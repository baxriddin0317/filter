"use client"
import React from "react";
import { TimeIcon } from "./icons";
import { RiTelegram2Fill } from "react-icons/ri";

interface ProductCardProps {
  title: string;
  country: string;
  dialogs: number;
  channels: number;
  passwordStatus: 'Без пароля' | 'С паролем';
  spamblockStatus: 'Без спамблока' | 'Спамблок';
  date: string;
  price: number;
  phishingLabel?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  country,
  dialogs,
  channels,
  passwordStatus,
  spamblockStatus,
  date,
  price,
  phishingLabel = false
}) => {
  return (
    <div className="w-full relative flex items-center justify-between rounded-3xl border-2 border-brand-neutral-1 bg-brand-neutral-2 pl-11 pr-16 pt-9 pb-[30px]">
      <div className="absolute flex items-center text-xl text-white border-2 border-brand-neutral-1 bg-brand-neutral-2 rounded-b-2xl py-4 px-6 gap-2 -bottom-14 left-16 -z-10">
        <TimeIcon /> 
        {date}
      </div>
      {phishingLabel && (
          <div className="absolute flex items-center text-xl text-white border-2 border-brand-neutral-1 bg-brand-neutral-2 rounded-t-2xl py-4 px-6 gap-2 -top-14 right-20 -z-10">Фишинг</div>
        )}
      <div className="flex items-center gap-5 w-full sm:w-auto">
        <RiTelegram2Fill className="text-[60px] text-[#6CB1E3] drop-shadow-[0_0_25px_rgba(108,177,227,0.25)]" />
        <div className="flex flex-col gap-1">
          <div className="flex items-center text-[32px] mb-3">
            <span className="text-brand-yellow text-shadow-[0_0_25px_rgba(245,175,0,0.25)] font-semibold">Darkness</span>
            <span className="text-brand-white font-normal ml-2">| {title}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-1 text-lg">
            <span className="h-10 bg-brand-neutral-1 border border-brand-neutral-3 rounded-full px-2.5 text-brand-white flex items-center gap-2.5">
              <img src="/flags/iroq.png" alt="globe" className="w-[18px] inline-block" />
              {country}
            </span>
            <span className="h-10 bg-brand-neutral-1 border border-brand-neutral-3 rounded-full px-2.5 text-brand-white flex items-center">{dialogs} диалога</span>
            <span className="h-10 bg-brand-neutral-1 border border-brand-neutral-3 rounded-full px-2.5 text-brand-white flex items-center">{channels} каналов</span>
            <span className={`h-10 px-2.5 rounded-full flex items-center border ${passwordStatus === 'Без пароля' ? 'bg-brand-green-2 border-brand-green-1 text-brand-green' : 'bg-brand-red-2 border-brand-red-1 text-brand-red'}`}>{passwordStatus}</span>
            <span className={`h-10 px-2.5 rounded-full flex items-center border ${spamblockStatus === 'Без спамблока' ? 'bg-brand-green-2 border-brand-green-1 text-brand-green' : 'bg-brand-red-2 border-brand-red-1 text-brand-red'}`}>{spamblockStatus}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-brand-yellow text-2xl font-semibold">{price} ₽</div>
        <button className="bg-brand-yellow-2 text-brand-yellow rounded-5xl px-[34px] h-16 font-extrabold text-2xl border border-brand-yellow-1 cursor-pointer">Купить</button>
      </div>
    </div>
  );
};
export default ProductCard;
