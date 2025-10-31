"use client"
import React from "react";
import { useFiltersStore, IChoose } from "../store/filtersStore";

const options: IChoose[] = ["Не важно", "Есть", "Нет", "Разрешить гео-спамблок"];

const SpamblockFilter: React.FC = () => {
  const { spamblock, updateFilters } = useFiltersStore();
  return (
    <div className="bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-8 py-7 min-w-[180px]">
      <div className="flex items-center mb-8 gap-8 pl-6">
        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42" fill="none">
          <path d="M32.375 19.25C45.0958 18.8458 45.0923 0.4025 32.375 0C19.6543 0.40425 19.6578 18.8475 32.375 19.25ZM32.375 15.75C31.3629 15.7432 30.3687 15.4821 29.484 14.9905L37.7405 6.734C38.2388 7.66464 38.4881 8.70826 38.4642 9.76363C38.4403 10.819 38.1441 11.8503 37.6042 12.7574C37.0644 13.6646 36.2992 14.4168 35.383 14.9411C34.4668 15.4655 33.4306 15.7441 32.375 15.75ZM32.375 3.5C33.3871 3.50677 34.3813 3.76794 35.266 4.2595L27.0095 12.516C26.5112 11.5854 26.2619 10.5417 26.2858 9.48637C26.3097 8.431 26.6059 7.39972 27.1458 6.49257C27.6856 5.58542 28.4508 4.83319 29.367 4.30886C30.2832 3.78453 31.3194 3.5059 32.375 3.5ZM32.375 22.75C34.1841 22.7501 35.9736 22.3748 37.6303 21.648C39.287 20.9211 40.7749 19.8585 42 18.5273V33.25C41.9972 35.5698 41.0745 37.7938 39.4341 39.4341C37.7938 41.0745 35.5698 41.9972 33.25 42H8.75C6.43021 41.9972 4.20623 41.0745 2.56588 39.4341C0.925543 37.7938 0.00277875 35.5698 0 33.25V14C0 13.7253 0.056 13.475 0.0805 13.1985L14.812 27.93C16.4548 29.568 18.6801 30.4878 21 30.4878C23.3199 30.4878 25.5452 29.568 27.188 27.93L32.375 22.75ZM17.2865 25.4555L1.302 9.46925C2.07634 8.18531 3.16847 7.12257 4.47305 6.38353C5.77763 5.64449 7.25064 5.2541 8.75 5.25H20.013C19.4434 6.88532 19.2016 8.61684 19.3015 10.3456C19.4013 12.0744 19.8408 13.7666 20.5949 15.3255C21.349 16.8843 22.4028 18.2794 23.6963 19.4308C24.9897 20.5822 26.4973 21.4675 28.133 22.036L24.7135 25.4555C23.727 26.4374 22.3918 26.9886 21 26.9886C19.6082 26.9886 18.273 26.4374 17.2865 25.4555Z" fill="#9F9F9F" />
        </svg>
        <h2 className="text-3xl text-brand-white">Spamblock</h2>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2">
          {options.slice(0,3).map(o => (
            <button
              type="button"
              key={o}
              onClick={() => updateFilters({ spamblock: o })}
              className={`h-16 max-w-[234px] w-full border text-2xl text-brand-gray-2 outline-none rounded-5xl hover:bg-[#2F2F31] hover:border-[#555] cursor-pointer ${
                spamblock === o ? "bg-[#3C3325] border-[#847050] text-[#DDAB71]" : "border-brand-neutral-4 bg-brand-neutral text-brand-gray-2"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => updateFilters({ spamblock: "Разрешить гео-спамблок" })}
          className={`h-16 w-full border text-2xl text-brand-gray-2 outline-none rounded-5xl hover:bg-[#2F2F31] hover:border-[#555] cursor-pointer ${
            spamblock === "Разрешить гео-спамблок" ? "bg-[#3C3325] border-[#847050] text-[#DDAB71]" : "border-brand-neutral-4 bg-brand-neutral text-brand-gray-2"
          }`}
        >
          Разрешить гео-спамблок
        </button>
      </div>
    </div>
  );
};
export default SpamblockFilter;
