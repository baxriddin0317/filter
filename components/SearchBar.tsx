"use client"
import React from "react";
import { useFiltersStore } from "../store/filtersStore";

const SearchBar: React.FC = () => {
  const { toggleShowFilters, showFilters } = useFiltersStore();
  return (
    <div className="max-w-10xl mx-auto w-full flex items-center py-8 desktop:px-[105px] laptop:px-[75px] px-6 mt-10 gap-4">
      <button
        onClick={toggleShowFilters}
        className="w-72 h-20 rounded-5xl flex items-center justify-center gap-6 bg-brand-neutral-1 text-brand-white border border-brand-neutral-5 cursor-pointer"
      >
        <span className="text-3xl text-brand-white">Фильтры</span>
        <svg className={`transition-transform duration-300 ${showFilters ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width={17} height={10} viewBox="0 0 17 10" fill="none">
          <line x1="16.0488" y1="9.08552" x2="7.67045" y2="0.707221" stroke="#D5D5D5" strokeWidth={2} />
          <line y1={-1} x2="10.7174" y2={-1} transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 8.37866)" stroke="#D5D5D5" strokeWidth={2} />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Поиск по названию"
        className="flex-1 h-20 rounded-5xl bg-brand-neutral-1 text-brand-white border border-brand-neutral-5 outline-none text-center placeholder:text-center text-[27px] placeholder:text-brand-gray px-4"
      />
      <button className="h-20 w-72 bg-brand-yellow rounded-5xl hover:bg-brand-yellow/90 transition-colors flex items-center justify-center gap-5 text-brand-neutral cursor-pointer text-3xl">
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
          <path d="M11.1123 0.25C17.1011 0.250224 21.9727 5.12227 21.9727 11.1104C21.9746 13.7087 21.0388 16.2156 19.3457 18.1797L27.1621 25.9951V25.9961C27.3309 26.1652 27.4259 26.3939 27.4258 26.6328C27.4256 26.8719 27.3303 27.1016 27.1611 27.2705C26.992 27.4393 26.7624 27.5344 26.5234 27.5342C26.2846 27.5339 26.0555 27.4385 25.8867 27.2695L18.0635 19.4453C16.1163 21.0764 13.6573 21.9737 11.1123 21.9717V21.9727C5.12263 21.9727 0.250225 17.1011 0.25 11.1123V11.1113L0.263672 10.5732C0.399486 7.88962 1.52555 5.34359 3.43457 3.43457C5.47078 1.39836 8.2317 0.253157 11.1113 0.25H11.1123ZM12.8799 2.22559C11.1224 1.876 9.30004 2.05548 7.64453 2.74121C5.9892 3.4269 4.5746 4.58841 3.5791 6.07812C2.58357 7.56804 2.05176 9.32039 2.05176 11.1123C2.05445 13.5142 3.00962 15.8172 4.70801 17.5156C6.4066 19.2142 8.71013 20.1694 11.1123 20.1719C12.904 20.1718 14.6557 19.6409 16.1455 18.6455C17.6354 17.65 18.7967 16.2346 19.4824 14.5791C20.1681 12.9237 20.3475 11.1021 19.998 9.34473C19.6485 7.58725 18.7856 5.97215 17.5186 4.70508C16.2516 3.43814 14.6372 2.57521 12.8799 2.22559ZM11.5781 4.73633C11.638 4.77299 11.6937 4.81675 11.7441 4.86719C11.9128 5.03584 12.0078 5.26442 12.0078 5.50293C12.0078 5.74138 11.9128 5.97006 11.7441 6.13867C11.5755 6.30721 11.3468 6.40234 11.1084 6.40234C9.85976 6.40369 8.66222 6.90027 7.7793 7.7832C6.89647 8.66621 6.39966 9.86366 6.39844 11.1123C6.39832 11.3506 6.30428 11.5795 6.13574 11.748C5.9672 11.9166 5.73834 12.0106 5.5 12.0107C5.26149 12.0107 5.03193 11.9167 4.86328 11.748C4.69476 11.5795 4.6007 11.3506 4.60059 11.1123V11.1113C4.60266 9.38512 5.28915 7.73038 6.50977 6.50977C7.73038 5.28915 9.38512 4.60266 11.1113 4.60059L11.7158 4.59961L11.5781 4.73633Z" fill="#171717" stroke="black" strokeWidth="0.5" />
        </svg>
        Найти
      </button>
    </div>
  );
};
export default SearchBar;
