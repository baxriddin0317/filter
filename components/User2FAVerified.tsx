"use client"
import React from "react";
import { useFiltersStore, IChoose } from "../store/filtersStore";

const options: IChoose[] = ["Не важно", "Есть", "Нет"];

const User2FAVerified: React.FC = () => {
  const { two_fa, updateFilters } = useFiltersStore();
  return (
    <div className="bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-8 py-7 min-w-[180px]">
      <div className="flex items-center mb-7 gap-8 pl-6">
        <svg xmlns="http://www.w3.org/2000/svg" width={37} height={42} viewBox="0 0 37 42" fill="none">
          <path d="M33.4739 3.83562L23.4283 0.74107C21.834 0.249949 20.172 0 18.5 0C16.828 0 15.166 0.249949 13.5717 0.74107L3.5261 3.83562C1.42702 4.48227 0 6.3817 0 8.52904V25.5415C0 28.6693 1.52373 31.6109 4.10498 33.4663L13.9463 40.5402C15.2656 41.4885 16.8613 42 18.5 42C20.1387 42 21.7344 41.4885 23.0537 40.5402L32.895 33.4663C35.4763 31.6109 37 28.6693 37 25.5415V8.52904C37 6.3817 35.573 4.48227 33.4739 3.83562ZM26.23 18.6798L17.9054 26.8005C16.9202 27.7616 15.3229 27.7616 14.3378 26.8005L10.77 23.3203C9.78482 22.3592 9.78482 20.801 10.77 19.84C11.7552 18.8789 13.3525 18.8789 14.3377 19.84L16.1215 21.5801L22.6622 15.1996C23.6475 14.2385 25.2448 14.2385 26.2299 15.1996C27.2152 16.1606 27.2152 17.7188 26.23 18.6798Z" fill="#9F9F9F" />
        </svg>

        <h2 className="text-3xl text-brand-white">Наличие 2FA</h2>
      </div>
      <div className="flex gap-2">
        {options.map(o => (
          <button
            type="button"
            key={o}
            onClick={() => updateFilters({ two_fa: o })}
            className={`h-16 max-w-[234px] w-full border text-2xl text-brand-gray-2 outline-none rounded-5xl hover:bg-[#2F2F31] hover:border-[#555] cursor-pointer ${
              two_fa === o ? "bg-[#3C3325] border-[#847050] text-[#DDAB71]" : "border-brand-neutral-4 bg-brand-neutral text-brand-gray-2"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
};
export default User2FAVerified;
