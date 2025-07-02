import { en } from './en';
import React, { type ReactNode } from 'react';

export type Language = 'en';
export type TranslationKey = keyof typeof en;

const translations = {
  en
};

let currentLanguage: Language = 'en';

export const setLanguage = (lang: Language) => {
  currentLanguage = lang;
};

export const getCurrentLanguage = (): Language => currentLanguage;

// Type-safe translation function
export const t = (key: string): string => {
  const keys = key.split('.');
  let value: any = translations[currentLanguage];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
};

// Simple function to parse {text|classes} syntax and HTML tags
export const tStyled = (key: string): ReactNode => {
  const text = t(key);
  
  // Handle both {text|classes} syntax and HTML tags
  if (text.includes('{') || text.includes('<')) {
    return parseStyledText(text);
  }
  
  return text;
};

// Helper function to parse styled text
const parseStyledText = (text: string): ReactNode => {
  // Split by {text|classes} pattern while preserving the matches
  const parts = text.split(/(\{[^}]+\})/g);
  const elements: ReactNode[] = [];
  let key = 0;
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    
    if (part.startsWith('{') && part.endsWith('}')) {
      // Handle {text|classes} syntax
      const content = part.slice(1, -1);
      const pipeIndex = content.indexOf('|');
      
      if (pipeIndex !== -1) {
        const textContent = content.slice(0, pipeIndex).trim();
        const styleInfo = content.slice(pipeIndex + 1).trim();
        
        // Parse style info: "classes" or "tag:classes"
        const colonIndex = styleInfo.indexOf(':');
        let tagName = 'span';
        let className = styleInfo;
        
        if (colonIndex !== -1) {
          tagName = styleInfo.slice(0, colonIndex);
          className = styleInfo.slice(colonIndex + 1);
        }
        
        elements.push(
          React.createElement(tagName, { 
            key: `styled-${key++}`, 
            className: className 
          }, textContent)
        );
      } else {
        // Invalid syntax, treat as plain text
        elements.push(part);
      }
    } else if (part.includes('<') && part.includes('>')) {
      // Handle HTML tags
      elements.push(
        React.createElement('span', {
          key: `html-${key++}`,
          dangerouslySetInnerHTML: { __html: part }
        })
      );
    } else if (part.trim()) {
      // Plain text
      elements.push(part);
    }
  }
  
  return elements.length === 1 ? elements[0] : elements;
};

// HTML-safe translation function that returns JSX
export const tHtml = (key: string): ReactNode => {
  const translatedText = t(key);
  
  // If the text contains HTML tags, parse and render them
  if (translatedText.includes('<') && translatedText.includes('>')) {
    return parseHtmlToJsx(translatedText);
  }
  
  return translatedText;
};

// Simplified HTML parser for common tags
const parseHtmlToJsx = (htmlString: string): ReactNode => {
  const supportedTags = ['strong', 'em', 'b', 'i', 'u', 'mark', 'span'];
  
  // Simple approach: use dangerouslySetInnerHTML for basic HTML
  // This is safer and more reliable than complex parsing
  return React.createElement('span', {
    dangerouslySetInnerHTML: { __html: htmlString }
  });
};

// Utility function to handle both styling and HTML in one go
export const tComplete = (key: string): ReactNode => {
  const text = t(key);
  
  // Handle custom syntax first, then HTML
  if (text.includes('{') || text.includes('<')) {
    return parseStyledText(text);
  }
  
  return text;
};