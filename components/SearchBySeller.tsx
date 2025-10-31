"use client"
import React from "react";
import { useFiltersStore } from "../store/filtersStore";

const SearchBySeller: React.FC = () => {
  const { seller_username, updateFilters } = useFiltersStore();

  return (
    <div className="bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-8 py-7 min-w-[180px]">
      <h2 className="text-3xl text-brand-white mb-8 pl-4">Поиск по продавцу</h2>
      <div className="relative flex items-center justify-between h-16 max-w-[460px] w-full mx-auto rounded-full border-r-0 border border-brand-neutral-4 bg-brand-neutral">
        <input
          type="text"
          placeholder="Введите никнейм..."
          className="size-full text-2xl text-brand-gray-2 outline-none pl-7"
          value={seller_username}
          onChange={e => updateFilters({ seller_username: e.target.value })}
        />
        <div className="flex items-center justify-center rounded-full bg-brand-neutral-1 p-3">
          <span className="bg-[linear-gradient(91deg,#F2B663_0%,#CF8600_100%)] flex items-center justify-center border border-[#FFDEA1] size-[60px] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={39} viewBox="0 0 30 39" fill="none">
              <path d="M14.5837 19.4449C19.9533 19.4449 24.3062 15.092 24.3062 9.72246C24.3062 4.3529 19.9533 0 14.5837 0C9.21415 0 4.86124 4.3529 4.86124 9.72246C4.86124 15.092 9.21415 19.4449 14.5837 19.4449Z" fill="#2F2F31" />
              <path d="M14.5837 22.6858C6.53306 22.6947 0.00896292 29.2188 0 37.2695C0 38.1644 0.725465 38.8899 1.62039 38.8899H27.547C28.4419 38.8899 29.1674 38.1644 29.1674 37.2695C29.1585 29.2188 22.6344 22.6947 14.5837 22.6858Z" fill="#2F2F31" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBySeller;
