import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  type: 'quest' | 'subject' | 'achievement';
  description?: string;
  category?: string;
}

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onResultSelect?: (result: SearchResult) => void;
  suggestions?: SearchResult[];
  recentSearches?: string[];
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search quests, subjects, achievements...',
  onSearch,
  onResultSelect,
  suggestions = [],
  recentSearches = [],
  className = ''
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = suggestions.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [query, suggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    onSearch?.(value);
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery(result.title);
    setIsOpen(false);
    onResultSelect?.(result);
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'quest': return '🎯';
      case 'subject': return '📚';
      case 'achievement': return '🏆';
      default: return '🔍';
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
          {/* Recent Searches */}
          {query.length === 0 && recentSearches.length > 0 && (
            <div className="p-4 border-b border-gray-100">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Recent Searches
              </h4>
              <div className="space-y-1">
                {recentSearches.slice(0, 3).map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {filteredSuggestions.length > 0 && (
            <div className="p-2">
              {filteredSuggestions.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                >
                  <span className="text-xl">{getTypeIcon(result.type)}</span>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-gray-900 truncate">{result.title}</h5>
                    {result.description && (
                      <p className="text-sm text-gray-600 truncate">{result.description}</p>
                    )}
                    <span className="text-xs text-gray-500 capitalize">{result.type}</span>
                  </div>
                  <TrendingUp className="h-4 w-4 text-gray-400" />
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {query.length > 0 && filteredSuggestions.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No results found for "{query}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;