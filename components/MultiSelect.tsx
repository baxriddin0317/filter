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
        className="w-full min-h-[90px] bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-4 py-3 flex items-center gap-3 text-left hover:border-brand-neutral-4 transition-colors"
      >
        <div className="shrink-0 size-[60px] rounded-full bg-brand-neutral flex items-center justify-center text-brand-gray-2">
          {icon}
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <span className="text-brand-gray-2 text-lg">
            {selectedValues.length === 0 ? (placeholder || title) : title}
          </span>
          {selectedValues.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {getSelectedItems().map((item) => {
                const flagEmoji = getFlagEmoji(item.value);
                return (
                  <div
                    key={item.value}
                    className="flex items-center gap-2 px-3 py-1.5 bg-brand-neutral rounded-full border border-brand-neutral-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(item.value, e);
                    }}
                  >
                    {flagEmoji && <span className="text-base">{flagEmoji}</span>}
                    <span className="text-brand-gray-2 text-base">{item.label}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeItem(item.value, e);
                      }}
                      className="ml-1 text-brand-gray-2 hover:text-brand-white transition-colors flex items-center justify-center w-4 h-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M9 3L3 9M3 3L9 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`shrink-0 text-brand-gray-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl shadow-lg z-50 max-h-64 overflow-y-auto">
          <div className="p-2">
            {items.map((item) => {
              const isSelected = selectedValues.includes(item.value);
              const flagEmoji = getFlagEmoji(item.value);
              return (
                <div
                  key={item.value}
                  className={`w-full px-4 py-3 rounded-2xl transition-colors ${
                    isSelected ? "bg-brand-neutral-3" : "hover:bg-brand-neutral"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      {flagEmoji && <span className="text-xl">{flagEmoji}</span>}
                      <span className="text-brand-gray-2 text-lg">{item.label}</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => toggleItem(item.value, e)}
                      className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors ${
                        isSelected
                          ? "bg-[#DDAB71]/20 text-[#DDAB71] hover:bg-[#DDAB71]/30 border border-[#847050]/30"
                          : "bg-[#DDAB71]/10 text-[#DDAB71] hover:bg-[#DDAB71]/20 border border-[#847050]/20"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M11 3L5 9M5 3L11 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm font-medium">Выбрано</span>
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M7 3V11M3 7H11"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm font-medium">Выбрать</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

