"use client"
import { useFiltersStore } from '@/store/filtersStore';

const AdminchatFilter = () => {
  const { adminChats, adminChatsChannels, updateFilters } = useFiltersStore();
  return (
    <div className="bg-brand-neutral-1 border border-brand-neutral-5 rounded-3xl px-8 py-7 min-w-[180px]">
      <div className="flex items-center mb-8 gap-8 pl-6">
        {/* {icon && icon} */}
        <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42" fill="none">
          <path d="M37.5985 8.04406L34.421 7.66122L26.3629 0V6.69039L5.59775 4.1888C4.17928 4.01793 2.75194 4.4636 1.68275 5.4117C0.613478 6.35989 0.000215458 7.72332 0.000215458 9.15237V16.5637C0.952347 15.7506 2.13433 15.1935 3.44436 15.0137L31.8769 11.1099C32.1796 11.0683 32.4886 11.0471 32.7947 11.0471C34.4229 11.0471 35.9957 11.6367 37.2234 12.7072C38.6916 13.9876 39.5336 15.8391 39.5336 17.787V23.4644C39.9546 23.2167 40.3412 22.9072 40.6788 22.5405C41.5308 21.615 42 20.4124 42 19.1545V13.0076C42 10.4802 40.1077 8.34634 37.5985 8.04406Z" fill="#9F9F9F" />
          <path d="M37.1545 17.7875C37.1545 16.5271 36.6096 15.3292 35.6597 14.5007C34.7098 13.6724 33.4487 13.2954 32.2003 13.4671L3.76776 17.3709C1.61978 17.6658 0 19.5232 0 21.6913V29.8078C0 31.9167 1.47574 33.6817 3.50034 34.0837L11.8266 42V34.8937L32.3832 36.8359C33.6031 36.9516 34.8223 36.5444 35.7285 35.7198C36.6347 34.8952 37.1545 33.7195 37.1545 32.4943V17.7875ZM15.4796 26.1716H13.0209V23.7131H15.4796V26.1716ZM20.6431 26.1716H18.1843V23.7131H20.6431V26.1716ZM25.8067 26.1716H23.3479V23.7131H25.8067V26.1716Z" fill="#9F9F9F" />
        </svg>
        <h2 className="text-3xl text-brand-white">Кол-во админ. чатов</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-2xl">
          <input
            type="number"
            placeholder="Чатов, от"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={adminChats.min == 0 ? '' : adminChats.min}
            onChange={e => updateFilters({ adminChats: { ...adminChats, min: +e.target.value } })}
          />
          <span className="block w-5 h-0.5 bg-brand-gray-2"></span>
          <input
            type="number"
            placeholder="До"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={adminChats.max == 0 ? '' : adminChats.max}
            onChange={e => updateFilters({ adminChats: { ...adminChats, max: +e.target.value } })}
          />
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <input
            type="number"
            placeholder="Каналов, от"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={adminChatsChannels.min == 0 ? '' : adminChatsChannels.min}
            onChange={e => updateFilters({ adminChatsChannels: { ...adminChatsChannels, min: +e.target.value } })}
          />
          <span className="block w-5 h-0.5 bg-brand-gray-2"></span>
          <input
            type="number"
            placeholder="До"
            className="h-16 max-w-[234px] w-full border border-brand-neutral-4 bg-brand-neutral text-2xl text-brand-gray-2 outline-none rounded-5xl pl-7"
            min={0}
            value={adminChatsChannels.max == 0 ? '' : adminChatsChannels.max}
            onChange={e => updateFilters({ adminChatsChannels: { ...adminChatsChannels, max: +e.target.value } })}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminchatFilter