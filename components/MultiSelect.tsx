"use client"
import React, { useState, useRef, useEffect } from "react";

export interface MultiSelectItem {
  value: string;
  label: string;
  flag?: string;
}

interface MultiSelectProps {
  title: string;
  icon: React.ReactNode;
  items: MultiSelectItem[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  placeholder?: string;
}

// Country flag emoji mapping
const countryFlags: Record<string, string> = {
  usa: '🇺🇸',
  russia: '🇷🇺',
  ukraine: '🇺🇦',
  kazakhstan: '🇰🇿',
  uzbekistan: '🇺🇿',
  iraq: '🇮🇶',
  germany: '🇩🇪',
  france: '🇫🇷',
  uk: '🇬🇧',
  china: '🇨🇳',
  belarus: '🇧🇾',
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  title,
  icon,
  items,
  selectedValues,
  onSelectionChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleItem = (value: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedValues.includes(value)) {
      onSelectionChange(selectedValues.filter((v) => v !== value));
    } else {
      onSelectionChange([...selectedValues, value]);
    }
  };

  const removeItem = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectionChange(selectedValues.filter((v) => v !== value));
  };

  const getSelectedItems = () => {
    return selectedValues
      .map((value) => items.find((item) => item.value === value))
      .filter((item): item is MultiSelectItem => item !== undefined);
  };

  const getFlagEmoji = (value: string) => {
    const item = items.find((i) => i.value === value);
    return item?.flag || countryFlags[value.toLowerCase()] || '';
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full min-h-[90px] bg-brand-neutral-1 border border-brand-neutral-5 ${isOpen ? 'rounded-t-3xl' : 'rounded-3xl'} px-4 py-3 flex items-center gap-3 text-left hover:border-brand-neutral-4 transition-colors`}
      >
        {selectedValues.length === 0 && (
          <div className="shrink-0 size-[60px] rounded-full bg-brand-neutral flex items-center justify-center text-brand-gray-2">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0 flex flex-col">
          {selectedValues.length === 0 ? (
            <span className="text-[27px] font-light text-brand-gray-2 line-clamp-1">
              {placeholder}
            </span>
          ) : (
            <span className="text-lg font-light text-brand-gray-2">
              {title}
            </span>
          )}
          {selectedValues.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {getSelectedItems().map((item) => {
                const flagEmoji = getFlagEmoji(item.value);
                return (
                  <div
                    key={item.value}
                    className="flex items-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(item.value, e);
                    }}
                  >
                    {flagEmoji && <img src="/flags/iroq.png" alt="globe" className="w-[18px] inline-block" />}
                    <span className="block text-brand-white text-lg">{item.label}</span>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeItem(item.value, e);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          e.stopPropagation();
                          removeItem(item.value, e as any);
                        }
                      }}
                      className=" flex items-center justify-center size-3 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                        <path d="M0.583767 12.481L12.4833 0.54187M12.4432 12.481L0.543701 0.54187" stroke="#939393" strokeWidth="1.53519" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <svg className={`transition-transform duration-300 -translate-x-4 ${isOpen ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width={17} height={10} viewBox="0 0 17 10" fill="none">
          <line x1="16.0488" y1="9.08552" x2="7.67045" y2="0.707221" stroke="#D5D5D5" strokeWidth={2} />
          <line y1={-1} x2="10.7174" y2={-1} transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 8.37866)" stroke="#D5D5D5" strokeWidth={2} />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-neutral-1 border border-brand-neutral-5 rounded-b-3xl shadow-lg z-50 max-h-64 overflow-y-auto scroll-style">
          {items.map((item) => {
            const isSelected = selectedValues.includes(item.value);
            const flagEmoji = getFlagEmoji(item.value);
            return (
              <div
                key={item.value}
                className={`w-full px-4 py-3 transition-colors group ${
                  isSelected ? "" : "hover:bg-[#323232]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    {flagEmoji && <img src="/flags/iroq.png" alt="globe" className="w-[18px] inline-block" />}
                    <span className={`text-[28px] group-hover:text-brand-white ${isSelected ? 'text-brand-white' : 'text-[#969696]'}`}>{item.label}</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => toggleItem(item.value, e)}
                    className={`items-center gap-2 px-4 h-9 rounded-full transition-colors cursor-pointer ${
                      isSelected
                        ? "flex bg-transparent text-brand-yellow"
                        : "hidden group-hover:flex bg-brand-neutral-2 text-[#a1a1a1] border border-brand-neutral-4"
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
                          <path d="M9.5196 0.468622C10.1444 -0.156216 11.1575 -0.156217 11.7823 0.468622C12.4072 1.09346 12.4072 2.10652 11.7823 2.73136L2.73138 11.7823C2.10654 12.4072 1.09347 12.4072 0.468634 11.7823C-0.156204 11.1575 -0.156205 10.1444 0.468634 9.51959L9.5196 0.468622Z" fill="#A1A1A1" />
                          <path d="M11.7823 9.51959C12.4072 10.1444 12.4072 11.1575 11.7823 11.7823C11.1575 12.4072 10.1444 12.4072 9.5196 11.7823L0.468635 2.73136C-0.156204 2.10652 -0.156205 1.09346 0.468634 0.468622C1.09347 -0.156217 2.10654 -0.156217 2.73138 0.468622L11.7823 9.51959Z" fill="#A1A1A1" />
                        </svg>
                        <span className="block">Выбрано</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="#F0A900">
                          <path d="M6.4 1.6C6.4 0.716345 7.11634 0 8 0C8.88366 0 9.6 0.716344 9.6 1.6V14.4C9.6 15.2837 8.88366 16 8 16C7.11634 16 6.4 15.2837 6.4 14.4V1.6Z" fill="#F0A900" />
                          <path d="M14.4 6.4C15.2837 6.4 16 7.11634 16 8C16 8.88366 15.2837 9.6 14.4 9.6L1.6 9.6C0.716345 9.6 -3.86258e-08 8.88366 0 8C3.86258e-08 7.11634 0.716345 6.4 1.6 6.4L14.4 6.4Z" fill="#F0A900" />
                        </svg>
                        <span className="block">Выбрать</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

