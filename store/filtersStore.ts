import { create } from 'zustand';

export interface Range {
  min: number;
  max: number;
}

export type IChoose = 'Не важно' | 'Есть' | 'Нет' | 'Разрешить гео-спамблок' | 'Осталось дней до конца премиума...';

export interface FiltersState {
  searchString: string;
  origin: string;
  country: string;
  contacts: Range;
  dialogs: Range;
  channels: Range;
  price: Range;
  age: Range;
  idDigits: Range;
  telegramStars: Range;
  adminChannels: Range;
  adminChannelsChats: Range;
  adminChats: Range;
  adminChatsChannels: Range;
  giftsRegular: Range;
  giftsNft: Range;
  channelsAndChatsChannels: Range;
  channelsAndChatsChats: Range;
  premium: IChoose;
  premiumDaysRemaining: number;
  spamblock: IChoose;
  two_fa: IChoose;
  with_admin_channels: IChoose;
  orderBy: string;
  orderType: string;
  selectedCountries: string[];
  selectedOrigins: string[];
  excludedCountries: string[];
  isFiltersChanged: boolean;
  seller_username: string;
  // UI state
  showFilters: boolean;
  updateFilters: (fields: Partial<FiltersState>) => void;
  resetFilters: () => void;
  toggleShowFilters: () => void;
}

const defaultState = {
  searchString: '',
  origin: '',
  country: '',
  contacts: { min: 0, max: 0 },
  dialogs: { min: 0, max: 0 },
  channels: { min: 0, max: 0 },
  price: { min: 0, max: 0 },
  age: { min: 0, max: 0 },
  idDigits: { min: 0, max: 0 },
  telegramStars: { min: 0, max: 0 },
  adminChannels: { min: 0, max: 0 },
  adminChannelsChats: { min: 0, max: 0 },
  adminChats: { min: 0, max: 0 },
  adminChatsChannels: { min: 0, max: 0 },
  giftsRegular: { min: 0, max: 0 },
  giftsNft: { min: 0, max: 0 },
  channelsAndChatsChannels: { min: 0, max: 0 },
  channelsAndChatsChats: { min: 0, max: 0 },
  premium: 'Не важно' as IChoose,
  premiumDaysRemaining: 0,
  spamblock: 'Не важно' as IChoose,
  two_fa: 'Не важно' as IChoose,
  with_admin_channels: 'Не важно' as IChoose,
  orderBy: '',
  orderType: '',
  selectedCountries: [],
  selectedOrigins: [],
  excludedCountries: [],
  isFiltersChanged: false,
  seller_username: '',
  showFilters: true,
};

export const useFiltersStore = create<FiltersState>((set, get) => ({
  ...defaultState,
  updateFilters: (fields) => set((state) => ({ ...state, ...fields, isFiltersChanged: true })),
  resetFilters: () => set({ ...defaultState }),
  toggleShowFilters: () => set((state) => ({ showFilters: !state.showFilters })),
}));
