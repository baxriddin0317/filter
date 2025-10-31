"use client"
import React from "react";
import { useFiltersStore } from "../store/filtersStore";

const ChannelsAndChatsFilter: React.FC = () => {
  const { channelsAndChatsChannels, channelsAndChatsChats, updateFilters } = useFiltersStore();
  return (
    <div className="bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-8 py-7 min-w-[180px]">
      <div className="flex items-center mb-7 gap-8 pl-6">
        {/* {icon && icon} */}
        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42" fill="none">
          <path d="M35.8749 0H27.125C23.7422 0 21 2.74179 21 6.12398V13.1228C21 16.505 23.7422 19.2468 27.125 19.2468H31.8447L36.1549 22.1198C36.7849 22.5397 37.5111 22.7515 38.2409 22.7515C38.8481 22.7515 39.4571 22.6045 40.0136 22.307C41.2386 21.6509 41.9999 20.3824 41.9999 18.9931V6.12398C41.9999 2.74179 39.2576 0 35.8749 0ZM0.537381 10.8849C-0.159115 10.2148 -0.181864 9.10723 0.488381 8.41085C1.16038 7.71272 2.26812 7.69347 2.96287 8.36186L5.2501 10.5612V5.24913C5.2501 2.35511 7.60559 0 10.5001 0H15.75C16.716 0 17.5 0.783869 17.5 1.74971C17.5 2.71555 16.716 3.49942 15.75 3.49942H10.5001C9.53582 3.49942 8.75008 4.28504 8.75008 5.24913V10.549L11.0373 8.36186C11.7338 7.69347 12.8398 7.71272 13.5118 8.41085C14.182 9.10723 14.161 10.2148 13.4628 10.8849L9.43607 14.7553C8.77283 15.4184 7.89258 15.7509 7.00884 15.7509C6.11635 15.7509 5.2221 15.4114 4.53961 14.7308L0.537381 10.8849ZM41.4626 31.1098C42.1591 31.78 42.1819 32.8875 41.5116 33.5839C41.1686 33.9426 40.7101 34.1211 40.2499 34.1211C39.8124 34.1211 39.3766 33.9583 39.0371 33.6329L36.7499 31.4335V36.7456C36.7499 39.6396 34.3944 41.9948 31.4999 41.9948H26.25C25.284 41.9948 24.5 41.2109 24.5 40.245C24.5 39.2792 25.284 38.4953 26.25 38.4953H31.4999C32.4642 38.4953 33.2499 37.7097 33.2499 36.7456V31.4458L30.9627 33.6329C30.2679 34.303 29.1602 34.2838 28.4882 33.5839C27.818 32.8875 27.839 31.78 28.5372 31.1098L32.5639 27.2395C33.8957 25.9079 36.1059 25.9097 37.4604 27.2622L41.4626 31.1098ZM14.875 19.2485H6.12509C2.74237 19.2485 0.000134301 21.9903 0.000134301 25.3725V38.2416C0.000134301 39.6309 0.761379 40.9012 1.98637 41.5556C2.54287 41.853 3.15186 42 3.75911 42C4.48886 42 5.2151 41.7883 5.84335 41.3684L10.1536 38.4953H14.8733C18.256 38.4953 20.9982 35.7535 20.9982 32.3714V25.3725C20.9982 21.9903 18.256 19.2485 14.8733 19.2485H14.875Z" fill="#9F9F9F" />
        </svg>
        <h2 className="text-3xl text-brand-white">Кол-во каналов и чатов</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-2xl">
          <input
            type="number"
            placeholder="Каналов, от"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={channelsAndChatsChannels.min == 0 ? '' : channelsAndChatsChannels.min}
            onChange={e => updateFilters({ channelsAndChatsChannels: { ...channelsAndChatsChannels, min: +e.target.value } })}
          />
          <span className="block w-5 h-0.5 bg-brand-gray-2"></span>
          <input
            type="number"
            placeholder="До"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={channelsAndChatsChannels.max == 0 ? '' : channelsAndChatsChannels.max}
            onChange={e => updateFilters({ channelsAndChatsChannels: { ...channelsAndChatsChannels, max: +e.target.value } })}
          />
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <input
            type="number"
            placeholder="Чатов, от"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={channelsAndChatsChats.min == 0 ? '' : channelsAndChatsChats.min}
            onChange={e => updateFilters({ channelsAndChatsChats: { ...channelsAndChatsChats, min: +e.target.value } })}
          />
          <span className="block w-5 h-0.5 bg-brand-gray-2"></span>
          <input
            type="number"
            placeholder="До"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={channelsAndChatsChats.max == 0 ? '' : channelsAndChatsChats.max}
            onChange={e => updateFilters({ channelsAndChatsChats: { ...channelsAndChatsChats, max: +e.target.value } })}
          />
        </div>
      </div>
    </div>
  );
};
export default ChannelsAndChatsFilter;
