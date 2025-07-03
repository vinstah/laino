import { useState, useRef, useCallback, useEffect } from 'react';

export interface DragItem {
  id: string;
  type: string;
  data: any;
  position: { x: number; y: number };
}

export interface DropZone {
  id: string;
  accepts: string[];
  position: { x: number; y: number; width: number; height: number };
  items: DragItem[];
}

export const useDragAndDrop = () => {
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null);
  const [dropZones, setDropZones] = useState<DropZone[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const startDrag = useCallback((item: DragItem, event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
    
    setDraggedItem({
      ...item,
      position: { x: clientX, y: clientY }
    });
    setIsDragging(true);
  }, []);

  const updateDragPosition = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!draggedItem || !isDragging) return;
    
    event.preventDefault();
    
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    
    setDraggedItem(prev => prev ? {
      ...prev,
      position: {
        x: clientX - dragOffset.x,
        y: clientY - dragOffset.y
      }
    } : null);

    // Check for hover over drop zones
    const hoveredZone = dropZones.find(zone => {
      const { x, y, width, height } = zone.position;
      return clientX >= x && clientX <= x + width &&
             clientY >= y && clientY <= y + height &&
             zone.accepts.includes(draggedItem.type);
    });
    
    setHoveredZone(hoveredZone?.id || null);
  }, [draggedItem, isDragging, dragOffset, dropZones]);

  const endDrag = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!draggedItem || !isDragging) return;
    
    const clientX = 'touches' in event ? event.changedTouches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.changedTouches[0].clientY : event.clientY;

    const dropZone = dropZones.find(zone => {
      console.log(zone);
      
      const { x, y, width, height } = zone.position;
      return clientX >= x && clientX <= x + width &&
             clientY >= y && clientY <= y + height &&
             zone.accepts.includes(draggedItem.type);
    });

    if (dropZone) {
      setDropZones(prev => prev.map(zone => 
        zone.id === dropZone.id 
          ? { ...zone, items: [...zone.items, draggedItem] }
          : zone
      ));
    }

    setDraggedItem(null);
    setIsDragging(false);
    setHoveredZone(null);
  }, [draggedItem, isDragging, dropZones]);

  const registerDropZone = useCallback((zone: DropZone) => {
    setDropZones(prev => {
      const existing = prev.find(z => z.id === zone.id);
      if (existing) {
        return prev.map(z => z.id === zone.id ? zone : z);
      }
      return [...prev, zone];
    });
  }, []);

  const removeFromDropZone = useCallback((zoneId: string, itemId: string) => {
    setDropZones(prev => prev.map(zone =>
      zone.id === zoneId
        ? { ...zone, items: zone.items.filter(item => item.id !== itemId) }
        : zone
    ));
  }, []);

  const clearDropZone = useCallback((zoneId: string) => {
    setDropZones(prev => prev.map(zone =>
      zone.id === zoneId ? { ...zone, items: [] } : zone
    ));
  }, []);

  return {
    draggedItem,
    dropZones,
    isDragging,
    hoveredZone,
    startDrag,
    updateDragPosition,
    endDrag,
    registerDropZone,
    removeFromDropZone,
    clearDropZone
  };
};

export const useSVGCanvas = () => {
  const [elements, setElements] = useState<any[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [currentTool, setCurrentTool] = useState<'pen' | 'eraser' | 'line' | 'circle' | 'rectangle'>('pen');
  const [strokeColor, setStrokeColor] = useState('#8b5cf6');
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [history, setHistory] = useState<any[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const svgRef = useRef<SVGSVGElement>(null);

  const startDrawing = useCallback((event: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    
    event.preventDefault();
    
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    
    const rect = svgRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    setIsDrawing(true);
    
    if (currentTool === 'pen') {
      setCurrentPath(`M ${x} ${y}`);
    }
  }, [currentTool]);

  const draw = useCallback((event: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => {
    if (!isDrawing || !svgRef.current) return;
    
    event.preventDefault();
    
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    
    const rect = svgRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    if (currentTool === 'pen') {
      setCurrentPath(prev => `${prev} L ${x} ${y}`);
    }
  }, [isDrawing, currentTool]);

  const stopDrawing = useCallback(() => {
    if (isDrawing && currentPath && currentTool === 'pen') {
      const newElement = {
        id: Date.now().toString(),
        type: 'path',
        d: currentPath,
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        fill: 'none'
      };
      
      setElements(prev => {
        const newElements = [...prev, newElement];
        // Save to history
        setHistory(prevHistory => [...prevHistory.slice(0, historyIndex + 1), newElements]);
        setHistoryIndex(prev => prev + 1);
        return newElements;
      });
    }
    setIsDrawing(false);
    setCurrentPath('');
  }, [isDrawing, currentPath, currentTool, strokeColor, strokeWidth, historyIndex]);

  const addElement = useCallback((element: any) => {
    const newElement = { ...element, id: Date.now().toString() };
    setElements(prev => {
      const newElements = [...prev, newElement];
      setHistory(prevHistory => [...prevHistory.slice(0, historyIndex + 1), newElements]);
      setHistoryIndex(prev => prev + 1);
      return newElements;
    });
  }, [historyIndex]);

  const removeElement = useCallback((id: string) => {
    setElements(prev => {
      const newElements = prev.filter(el => el.id !== id);
      setHistory(prevHistory => [...prevHistory.slice(0, historyIndex + 1), newElements]);
      setHistoryIndex(prev => prev + 1);
      return newElements;
    });
  }, [historyIndex]);

  const clearCanvas = useCallback(() => {
    setElements([]);
    setCurrentPath('');
    setHistory(prevHistory => [...prevHistory.slice(0, historyIndex + 1), []]);
    setHistoryIndex(prev => prev + 1);
  }, [historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1);
      setElements(history[historyIndex - 1] || []);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(prev => prev + 1);
      setElements(history[historyIndex + 1] || []);
    }
  }, [history, historyIndex]);

  // Initialize history
  useEffect(() => {
    if (history.length === 0) {
      setHistory([[]]);
      setHistoryIndex(0);
    }
  }, [history.length]);

  return {
    elements,
    currentPath,
    isDrawing,
    currentTool,
    strokeColor,
    strokeWidth,
    svgRef,
    startDrawing,
    draw,
    stopDrawing,
    addElement,
    removeElement,
    clearCanvas,
    setCurrentTool,
    setStrokeColor,
    setStrokeWidth,
    undo,
    redo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1
  };
};