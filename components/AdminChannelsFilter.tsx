"use client"
import React from "react";
import { useFiltersStore } from "../store/filtersStore";

const AdminChannelsFilter: React.FC = () => {
  const { adminChannels, adminChannelsChats, updateFilters } = useFiltersStore();
  return (
    <div className="bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-8 py-7 min-w-[180px]">
      <div className="flex items-center mb-8 gap-8 pl-6">
        {/* {icon && icon} */}
        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42" fill="none">
          <path d="M37.1958 0.0345307C36.3408 -0.0656704 35.4493 0.0486487 34.5923 0.424059L7.86857 12.155C9.13338 13.4375 9.92628 15.2119 9.92628 17.159V26.5438C9.92628 28.433 9.17526 30.1511 7.97588 31.4196L12.2255 32.666V33.7153C12.2255 37.4552 14.7182 40.7405 18.26 41.6475L18.8013 41.785C22.3646 42.6975 26.067 40.6263 27.2424 37.0651L34.6593 39.2372C38.2717 40.2945 42 37.422 42 33.5733V5.43265C42.0001 2.56715 39.7606 0.335226 37.1958 0.0345307ZM3.06424 14.2262C1.34284 14.2262 0 15.6019 0 17.3652V28.1064C0 29.8697 1.34284 31.2225 3.06424 31.2225C4.78563 31.2225 6.1061 29.8697 6.1061 28.1064V17.3652C6.1061 15.6019 4.78563 14.2262 3.06424 14.2262ZM16.8376 34.0177L22.7827 35.7591C22.2934 36.9061 21.1284 37.5407 19.9153 37.23L19.3785 37.0925C17.9531 36.7275 16.9654 35.4909 16.8376 34.0177Z" fill="#9F9F9F" />
        </svg>
        <h2 className="text-3xl text-brand-white">Кол-во админ. каналов</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-2xl">
          <input
            type="number"
            placeholder="Каналов, от"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={adminChannels.min == 0 ? '' : adminChannels.min}
            onChange={e => updateFilters({ adminChannels: { ...adminChannels, min: +e.target.value } })}
          />
          <span className="block w-5 h-0.5 bg-brand-gray-2"></span>
          <input
            type="number"
            placeholder="До"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={adminChannels.max == 0 ? '' : adminChannels.max}
            onChange={e => updateFilters({ adminChannels: { ...adminChannels, max: +e.target.value } })}
          />
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <input
            type="number"
            placeholder="Чатов, от"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={adminChannelsChats.min == 0 ? '' : adminChannelsChats.min}
            onChange={e => updateFilters({ adminChannelsChats: { ...adminChannelsChats, min: +e.target.value } })}
          />
          <span className="block w-5 h-0.5 bg-brand-gray-2"></span>
          <input
            type="number"
            placeholder="До"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={adminChannelsChats.max == 0 ? '' : adminChannelsChats.max}
            onChange={e => updateFilters({ adminChannelsChats: { ...adminChannelsChats, max: +e.target.value } })}
          />
        </div>
      </div>
    </div>
  );
};
export default AdminChannelsFilter;
