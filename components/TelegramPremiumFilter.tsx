"use client"
import React from "react";
import { useFiltersStore, IChoose } from "../store/filtersStore";
import { DimonadsIcon } from "./icons";

const options: IChoose[] = ["Не важно", "Есть", "Нет", "Осталось дней до конца премиума..."];

const TelegramPremiumFilter: React.FC = () => {
  const { premium, premiumDaysRemaining, updateFilters } = useFiltersStore();
  return (
    <div className="bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-8 py-7 min-w-[180px]">
      <div className="flex items-center mb-8 gap-8 pl-6">
        <DimonadsIcon />
        <h2 className="text-3xl text-brand-white">Telegram Premium</h2>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2">
          {options.slice(0,3).map(o => (
            <button
              type="button"
              key={o}
              onClick={() => updateFilters({ premium: o })}
              className={`h-16 max-w-[234px] w-full border text-2xl text-brand-gray-2 outline-none rounded-5xl hover:bg-[#2F2F31] hover:border-[#555] cursor-pointer ${
                premium === o ? "bg-[#3C3325] border-[#847050] text-[#DDAB71]" : "border-brand-neutral-4 bg-brand-neutral text-brand-gray-2"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => updateFilters({ premium: "Осталось дней до конца премиума..." })}
          className={`h-16 w-full border text-2xl text-brand-gray-2 outline-none rounded-5xl hover:bg-[#2F2F31] hover:border-[#555] cursor-pointer ${
            premium === "Осталось дней до конца премиума..." ? "bg-[#3C3325] border-[#847050] text-[#DDAB71]" : "border-brand-neutral-4 bg-brand-neutral text-brand-gray-2"
          }`}
        >
          {premiumDaysRemaining === 0 ? 'Осталось дней до конца премиума...' : `${premiumDaysRemaining} дней`}
        </button>
      </div>
    </div>
  );
};
export default TelegramPremiumFilter;
