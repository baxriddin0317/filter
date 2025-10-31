"use client"
import React from "react";
import { useFiltersStore } from "../store/filtersStore";

const GiftsFilter: React.FC = () => {
  const { giftsRegular, giftsNft, updateFilters } = useFiltersStore();
  return (
    <div className="bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-8 py-7 min-w-[180px]">
      <div className="flex items-center mb-7 gap-8 pl-6">
        {/* {icon && icon} */}
        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42" fill="none">
          <path d="M3.5 26.25H19.25V42H12.25C9.92936 42 7.70376 41.0781 6.06282 39.4372C4.42187 37.7962 3.5 35.5706 3.5 33.25V26.25ZM42 19.25C42 20.1783 41.6313 21.0685 40.9749 21.7249C40.3185 22.3813 39.4283 22.75 38.5 22.75H22.75V15.6748C22.162 15.7203 21.5758 15.75 21 15.75C20.4242 15.75 19.838 15.7203 19.25 15.6748V22.75H3.5C2.57174 22.75 1.6815 22.3813 1.02513 21.7249C0.368749 21.0685 0 20.1783 0 19.25C0 17.3935 0.737498 15.613 2.05025 14.3003C3.36301 12.9875 5.14348 12.25 7 12.25H10.0415C9.05205 11.3778 8.26665 10.2985 7.74101 9.0888C7.21538 7.87905 6.96239 6.56847 7 5.25C7 4.78587 7.18437 4.34075 7.51256 4.01256C7.84075 3.68437 8.28587 3.5 8.75 3.5C9.21413 3.5 9.65925 3.68437 9.98744 4.01256C10.3156 4.34075 10.5 4.78587 10.5 5.25C10.5 9.8385 14.6493 11.4275 17.8045 11.9718C16.6399 9.90685 15.9388 7.61314 15.75 5.25C15.75 3.85761 16.3031 2.52226 17.2877 1.53769C18.2723 0.553123 19.6076 0 21 0C22.3924 0 23.7277 0.553123 24.7123 1.53769C25.6969 2.52226 26.25 3.85761 26.25 5.25C26.0612 7.61314 25.3601 9.90685 24.1955 11.9718C27.3508 11.4275 31.5 9.8385 31.5 5.25C31.5 4.78587 31.6844 4.34075 32.0126 4.01256C32.3408 3.68437 32.7859 3.5 33.25 3.5C33.7141 3.5 34.1593 3.68437 34.4874 4.01256C34.8156 4.34075 35 4.78587 35 5.25C35.0376 6.56847 34.7846 7.87905 34.259 9.0888C33.7334 10.2985 32.948 11.3778 31.9585 12.25H35C36.8565 12.25 38.637 12.9875 39.9497 14.3003C41.2625 15.613 42 17.3935 42 19.25ZM19.25 5.25C19.4613 7.10995 20.0572 8.90559 21 10.5228C21.9428 8.90559 22.5387 7.10995 22.75 5.25C22.75 4.78587 22.5656 4.34075 22.2374 4.01256C21.9093 3.68437 21.4641 3.5 21 3.5C20.5359 3.5 20.0908 3.68437 19.7626 4.01256C19.4344 4.34075 19.25 4.78587 19.25 5.25ZM22.75 42H29.75C30.8991 42 32.0369 41.7737 33.0985 41.3339C34.1601 40.8942 35.1247 40.2497 35.9372 39.4372C36.7497 38.6247 37.3942 37.6601 37.8339 36.5985C38.2737 35.5369 38.5 34.3991 38.5 33.25V26.25H22.75V42Z" fill="#9F9F9F" />
        </svg>
        <h2 className="text-3xl text-brand-white">Кол-во подарков</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-2xl">
          <input
            type="number"
            placeholder="Каналов, от"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={channels.min == 0 ? '' : channels.min}
            onChange={e => updateFilters({ channels: { ...channels, min: +e.target.value } })}
          />
          <span className="block w-5 h-0.5 bg-brand-gray-2"></span>
          <input
            type="number"
            placeholder="До"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={channels.max == 0 ? '' : channels.max}
            onChange={e => updateFilters({ channels: { ...channels, max: +e.target.value } })}
          />
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <input
            type="number"
            placeholder="Чатов, от"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={channels.min == 0 ? '' : channels.min}
            onChange={e => updateFilters({ channels: { ...channels, min: +e.target.value } })}
          />
          <span className="block w-5 h-0.5 bg-brand-gray-2"></span>
          <input
            type="number"
            placeholder="Доvv"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={channels.max == 0 ? '' : channels.max}
            onChange={e => updateFilters({ channels: { ...channels, max: +e.target.value } })}
          />
        </div>
      </div>
    </div>
  );
};
export default GiftsFilter;
