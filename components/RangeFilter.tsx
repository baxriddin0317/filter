"use client"
import React from "react";
import { useFiltersStore, Range, FiltersState } from "../store/filtersStore";

interface RangeFilterProps {
  title: string;
  icon?: React.ReactNode;
  filterKey: 'price' | 'contacts' | 'dialogs' | 'channels' | 'age' | 'idDigits' | 'telegramStars' | 'adminChannels' | 'adminChats' | 'giftsRegular' | 'giftsNft' | 'channelsAndChatsChannels' | 'channelsAndChatsChats';
}

const RangeFilter: React.FC<RangeFilterProps> = ({ title, icon, filterKey }) => {
  const filters = useFiltersStore((state) => state[filterKey] as Range);
  const updateFilters = useFiltersStore((state) => state.updateFilters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedRange = { ...filters, [name]: +value } as Range;
    updateFilters({
      [filterKey]: updatedRange
    } as Partial<FiltersState>);
  };

  return (
    <div className="bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-8 py-7 min-w-[180px]">
      <div className="flex items-center mb-8 gap-8 pl-6">
        {icon && icon}
        <h2 className="text-3xl text-brand-white">{title}</h2>
      </div>
      <div className="flex items-center gap-2 text-2xl">
        <input
          type="number"
          placeholder="0"
          min={0}
          name="min"
          value={filters.min == 0 ? '' : filters.min}
          onChange={handleChange}
          className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
        />
        <span className="block w-5 h-0.5 bg-brand-gray-2"></span>
        <input
          type="number"
          placeholder="0"
          min={0}
          name="max"
          value={filters.max == 0 ? '' : filters.max}
          onChange={handleChange}
          className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
        />
      </div>
    </div>
  );
};

export default RangeFilter;

