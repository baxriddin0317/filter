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
import MultiSelect from "./MultiSelect";
import { useFiltersStore } from "../store/filtersStore";
import AdminchatFilter from "./AdminchatFilter";

const Filters: React.FC = () => {
  const { showFilters, selectedOrigins, selectedCountries, selectedMinusOrigins, excludedCountries, updateFilters } = useFiltersStore();

  const originItems = [
    { value: 'not_important', label: 'Не важно' },
    { value: 'brute', label: 'Брут' },
    { value: 'phishing', label: 'ФИШИНГ' },
    { value: 'other', label: 'Другое' },
  ];

  const countryItems = [
    { value: 'usa', label: 'США' },
    { value: 'russia', label: 'Россия' },
    { value: 'ukraine', label: 'Украина' },
    { value: 'kazakhstan', label: 'Казахстан' },
    { value: 'uzbekistan', label: 'Узбекистан' },
    { value: 'iraq', label: 'Ирак' },
    { value: 'germany', label: 'Германия' },
    { value: 'france', label: 'Франция' },
    { value: 'uk', label: 'Великобритания' },
    { value: 'china', label: 'Китай' },
  ];
  return (
    <section className={`max-w-10xl mx-auto w-full desktop:px-[105px] laptop:px-[75px] px-6 rounded-5xl overflow-hidden transition-all duration-500 ${showFilters ? 'max-h-[2000px]' : 'max-h-0'}`}>
      <div className={`bg-brand-black border border-brand-black2 rounded-[40px] p-[46px]`}>
        <div className="grid max-[1920px]:grid-cols-3 grid-cols-4 gap-3.5">
            <PriceFilter />
            <SearchBySeller />
            <AgeFilter />
            <User2FAVerified />
            <div className="col-span-2 grid grid-cols-2 gap-3.5">
              <MultiSelect
                title="Происхождение аккаунта"
                placeholder="Происхождение аккаунта..."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <path d="M0 2.17391C0 0.973293 0.973294 0 2.17391 0H8.69565C9.89627 0 10.8696 0.973294 10.8696 2.17391V8.69565C10.8696 9.89627 9.89627 10.8696 8.69565 10.8696H2.17391C0.973293 10.8696 0 9.89627 0 8.69565V2.17391Z" fill="#9F9F9F" />
                    <path d="M0 16.3048C0 15.1042 0.973294 14.1309 2.17391 14.1309H8.69565C9.89627 14.1309 10.8696 15.1042 10.8696 16.3048V22.8265C10.8696 24.0271 9.89627 25.0004 8.69565 25.0004H2.17391C0.973293 25.0004 0 24.0271 0 22.8265V16.3048Z" fill="#9F9F9F" />
                    <path d="M14.1304 16.3048C14.1304 15.1042 15.1037 14.1309 16.3043 14.1309H22.826C24.0266 14.1309 24.9999 15.1042 24.9999 16.3048V22.8265C24.9999 24.0271 24.0266 25.0004 22.826 25.0004H16.3043C15.1037 25.0004 14.1304 24.0271 14.1304 22.8265V16.3048Z" fill="#9F9F9F" />
                    <path d="M18.6958 1.95746C18.6958 1.47721 19.0851 1.08789 19.5654 1.08789C20.0456 1.08789 20.4349 1.47721 20.4349 1.95746V8.91398C20.4349 9.39422 20.0456 9.78354 19.5654 9.78354C19.0851 9.78354 18.6958 9.39423 18.6958 8.91398V1.95746Z" fill="#9F9F9F" />
                    <path d="M23.0435 4.56445C23.5238 4.56445 23.9131 4.95377 23.9131 5.43402C23.9131 5.91427 23.5238 6.30358 23.0435 6.30358L16.087 6.30358C15.6068 6.30358 15.2174 5.91427 15.2174 5.43402C15.2174 4.95377 15.6068 4.56445 16.087 4.56445L23.0435 4.56445Z" fill="#9F9F9F" />
                  </svg>
                }
                items={originItems}
                selectedValues={selectedOrigins}
                onSelectionChange={(values) => updateFilters({ selectedOrigins: values })}
              />
              <MultiSelect
                title="Выберите страну"
                placeholder="Выберите страну..."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <mask id="mask0_202_1967" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={0} y={0} width={25} height={25}>
                      <path d="M0 0H25V25H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_202_1967)">
                      <path d="M21.6177 9.58125C21.2417 11.2552 20.4271 12.8469 19.1552 14.149L15.949 17.3292C15.0208 18.25 13.799 18.7573 12.5063 18.7573H12.5031C11.2156 18.7573 9.99479 18.2521 9.06771 17.3333L5.88438 14.1875C4.62604 12.901 3.8125 11.3385 3.41979 9.69688C2.75104 9.94375 2.12812 10.3229 1.60208 10.825C0.56875 11.8125 0 13.1469 0 14.5844V18.8281C0 21.1417 1.55313 23.201 3.75313 23.8292L6.74271 24.7635C7.24688 24.9208 7.76667 25 8.29063 25C8.76146 25 9.23542 24.9365 9.70208 24.8073L15.7229 23.026C16.274 22.876 16.8573 22.8823 17.3625 23.026L19.8479 23.8625C21.0979 24.1667 22.3958 23.8854 23.4073 23.0906C24.4198 22.2958 25 21.101 25 19.8135V14.45C25 12.2896 23.651 10.3531 21.6177 9.58125ZM16.6667 7.29271C16.6667 4.99479 14.7979 3.12604 12.5 3.12604C10.2031 3.12604 8.33333 4.99479 8.33333 7.29271C8.33333 9.58958 10.2031 11.4594 12.5 11.4594C14.7979 11.4594 16.6667 9.58958 16.6667 7.29271ZM17.6646 12.6927L14.4812 15.85C13.9281 16.399 13.2177 16.674 12.5063 16.674C11.7969 16.675 11.0865 16.401 10.5333 15.8531L7.34792 12.7063C4.50625 9.79688 4.50625 5.08438 7.33542 2.18854C8.71354 0.778126 10.5479 0.00104141 12.5 0.00104141C14.4531 0.00104141 16.2875 0.778126 17.6646 2.18854C20.4937 5.08438 20.4937 9.79688 17.6646 12.6927ZM14.5833 7.29271C14.5833 8.44167 13.649 9.37604 12.5 9.37604C11.351 9.37604 10.4167 8.44167 10.4167 7.29271C10.4167 6.14375 11.351 5.20938 12.5 5.20938C13.649 5.20938 14.5833 6.14375 14.5833 7.29271Z" fill="#9F9F9F" />
                    </g>
                  </svg>
                }
                items={countryItems}
                selectedValues={selectedCountries}
                onSelectionChange={(values) => updateFilters({ selectedCountries: values })}
              />
              <MultiSelect
                title="Исключить проис. аккаунта"
                placeholder="Исключить проис. аккаунта..."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <path d="M0 2.17391C0 0.973293 0.973294 0 2.17391 0H8.69565C9.89627 0 10.8696 0.973294 10.8696 2.17391V8.69565C10.8696 9.89627 9.89627 10.8696 8.69565 10.8696H2.17391C0.973293 10.8696 0 9.89627 0 8.69565V2.17391Z" fill="#9F9F9F" />
                    <path d="M0 16.3048C0 15.1042 0.973294 14.1309 2.17391 14.1309H8.69565C9.89627 14.1309 10.8696 15.1042 10.8696 16.3048V22.8265C10.8696 24.0271 9.89627 25.0004 8.69565 25.0004H2.17391C0.973293 25.0004 0 24.0271 0 22.8265V16.3048Z" fill="#9F9F9F" />
                    <path d="M14.1304 16.3048C14.1304 15.1042 15.1037 14.1309 16.3043 14.1309H22.826C24.0266 14.1309 24.9999 15.1042 24.9999 16.3048V22.8265C24.9999 24.0271 24.0266 25.0004 22.826 25.0004H16.3043C15.1037 25.0004 14.1304 24.0271 14.1304 22.8265V16.3048Z" fill="#9F9F9F" />
                    <path d="M23.0435 4.56445C23.5238 4.56445 23.9131 4.95377 23.9131 5.43402C23.9131 5.91427 23.5238 6.30358 23.0435 6.30358H20.4349L18.6958 6.30358H16.087C15.6068 6.30358 15.2174 5.91427 15.2174 5.43402C15.2174 4.95377 15.6068 4.56445 16.087 4.56445H18.6958L20.4349 4.56445H23.0435Z" fill="#9F9F9F" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.6958 6.30358V4.56445L20.4349 4.56445V6.30358L18.6958 6.30358Z" fill="#9F9F9F" />
                  </svg>
                }
                items={originItems}
                selectedValues={selectedMinusOrigins}
                onSelectionChange={(values) => updateFilters({ selectedMinusOrigins: values })}
              />
              <MultiSelect
                title="Исключить страну"
                placeholder="Исключить страну..."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                    <path d="M13 0C5.83158 0 0 5.83158 0 13C0 20.1684 5.83158 26 13 26C20.1684 26 26 20.1684 26 13C26 5.83158 20.1684 0 13 0ZM17.3333 14.0833H8.66667C8.06867 14.0833 7.58333 13.598 7.58333 13C7.58333 12.402 8.06867 11.9167 8.66667 11.9167H17.3333C17.9313 11.9167 18.4167 12.402 18.4167 13C18.4167 13.598 17.9313 14.0833 17.3333 14.0833Z" fill="#9F9F9F" />
                  </svg>

                }
                items={countryItems}
                selectedValues={excludedCountries}
                onSelectionChange={(values) => updateFilters({ excludedCountries: values })}
              />
              <div className="col-span-2 w-full min-h-[90px] bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-4 py-3 flex items-center gap-3 text-left hover:border-brand-neutral-4 transition-colors">
                <div className="shrink-0 size-[60px] rounded-full bg-brand-neutral flex items-center justify-center text-brand-gray-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={25} viewBox="0 0 30 25" fill="none">
                    <path d="M23.75 11.25H2.5V1.25C2.5 0.56 1.94 0 1.25 0C0.56 0 0 0.56 0 1.25V23.75C0 24.44 0.56 25 1.25 25C1.94 25 2.5 24.44 2.5 23.75V21.25H27.5V23.75C27.5 24.44 28.0588 25 28.75 25C29.4412 25 30 24.44 30 23.75V17.5C30 14.0538 27.1963 11.25 23.75 11.25Z" fill="#9F9F9F" />
                  </svg>
                </div>
                <div className="text-brand-white text-2xl">
                  <span>Фильтровать по минимальной отлёжке аккаунта от</span>
                  <input type="number" className="py-1.5 w-[100px] border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl px-6 mx-[18px] text-center" placeholder="[N]" />
                  <span>дней</span>
                </div>
              </div>
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
