import React, { useState } from 'react';
import { 
  Settings, 
  Eye, 
  Volume2, 
  Pause, 
  Zap,
  Sun,
  Moon,
  Type,
  Focus,
  Headphones
} from 'lucide-react';
import { t } from '../lang';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusMode: boolean;
}

interface AccessibilityControlsProps {
  settings: AccessibilitySettings;
  onSettingsChange: (settings: AccessibilitySettings) => void;
}

const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ settings, onSettingsChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSetting = (key: keyof AccessibilitySettings, value?: any) => {
    const newSettings = {
      ...settings,
      [key]: value !== undefined ? value : !settings[key]
    };
    onSettingsChange(newSettings);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        aria-label={t('accessibility.title')}
      >
        <Settings className="h-5 w-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 z-50">
          <h3 className="text-lg font-bold text-gray-900 mb-4">{t('accessibility.title')}</h3>
          
          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Eye className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('accessibility.highContrast.title')}</h4>
                  <p className="text-sm text-gray-600">{t('accessibility.highContrast.description')}</p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.highContrast ? 'bg-purple-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Pause className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('accessibility.reducedMotion.title')}</h4>
                  <p className="text-sm text-gray-600">{t('accessibility.reducedMotion.description')}</p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-purple-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Font Size */}
            <div className="p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Type className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('accessibility.fontSize.title')}</h4>
                  <p className="text-sm text-gray-600">{t('accessibility.fontSize.description')}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {['small', 'medium', 'large'].map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSetting('fontSize', size)}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      settings.fontSize === size
                        ? 'bg-purple-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {t(`accessibility.fontSize.${size}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Focus Mode */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Focus className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('accessibility.focusMode.title')}</h4>
                  <p className="text-sm text-gray-600">{t('accessibility.focusMode.description')}</p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('focusMode')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.focusMode ? 'bg-purple-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    settings.focusMode ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">{t('accessibility.quickActions')}</h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors">
                  <Headphones className="h-4 w-4" />
                  <span className="text-sm font-medium">{t('accessibility.audioMode')}</span>
                </button>
                <button className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-medium">{t('accessibility.breakTimer')}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              {t('accessibility.needMore')} <a href="#" className="text-purple-600 hover:underline">{t('accessibility.contactSupport')}</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityControls;