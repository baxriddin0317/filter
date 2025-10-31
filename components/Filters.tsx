"use client"
import React from "react";
import PriceFilter from "./PriceFilter";
import SearchBySeller from "./SearchBySeller";
import AgeFilter from "./AgeFilter";
import User2FAVerified from "./User2FAVerified";
import TelegramPremiumFilter from "./TelegramPremiumFilter";
import SpamblockFilter from "./SpamblockFilter";
import IdDigitsFilter from "./IdDigitsFilter";
import ContactsFilter from "./ContactsFilter";
import DialogsFilter from "./DialogsFilter";
import TelegramStarsFilter from "./TelegramStarsFilter";
import ChannelsAndChatsFilter from "./ChannelsAndChatsFilter";
import AdminChannelsFilter from "./AdminChannelsFilter";
import GiftsFilter from "./GiftsFilter";
import { useFiltersStore } from "../store/filtersStore";
import AdminchatFilter from "./AdminchatFilter";

const Filters: React.FC = () => {
  const { showFilters } = useFiltersStore();
  return (
    <section className={`max-w-10xl mx-auto w-full desktop:px-[105px] laptop:px-[75px] px-6 rounded-5xl overflow-hidden transition-all duration-500 ${showFilters ? 'max-h-[2000px]' : 'max-h-0'}`}>
      <div className={`bg-brand-black border border-brand-black2 rounded-[40px] p-[46px]`}>
        <div className="grid grid-cols-4 gap-3.5">
            <PriceFilter />
            <SearchBySeller />
            <AgeFilter />
            <User2FAVerified />
            <div className="col-span-2 grid grid-cols-2 gap-3.5">
              
            </div>
            <TelegramPremiumFilter />
            <SpamblockFilter />
            <IdDigitsFilter />
            <ContactsFilter />
            <DialogsFilter />
            <TelegramStarsFilter />
            <ChannelsAndChatsFilter />
            <AdminChannelsFilter />
            <AdminchatFilter />
            <GiftsFilter />
        </div>
      </div>
    </section>
  );
};

export default Filters;
