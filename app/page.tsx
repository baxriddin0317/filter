"use client"
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import FiltersFooterPanel from "../components/FiltersFooterPanel";
import ProductCard from "../components/ProductCard";
import { useFiltersStore } from "../store/filtersStore";
import { useFiltersHook } from "../hooks/useFiltersHook";
import { useState, useEffect, useMemo, Suspense } from "react";

// Define ProductCardProps here as in ProductCard.tsx for type safety
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

const sampleProducts: ProductCardProps[] = [
  {
    title: "TG фиш прямо с завода",
    country: "Ирак",
    dialogs: 128,
    channels: 13,
    passwordStatus: "Без пароля",
    spamblockStatus: "Без спамблока",
    date: "20 февраля 2024 | 14:41",
    price: 20,
    phishingLabel: true
  },
  {
    title: "TG фиш прямо с завода",
    country: "Ирак",
    dialogs: 128,
    channels: 13,
    passwordStatus: "Без пароля",
    spamblockStatus: "Спамблок",
    date: "20 февраля 2024 | 14:41",
    price: 20,
    phishingLabel: true
  },
  {
    title: "TG фиш прямо с завода",
    country: "Ирак",
    dialogs: 128,
    channels: 13,
    passwordStatus: "С паролем",
    spamblockStatus: "Без спамблока",
    date: "20 февраля 2024 | 14:41",
    price: 20,
    phishingLabel: true
  },
  {
    title: "TG фиш прямо с завода",
    country: "Ирак",
    dialogs: 128,
    channels: 13,
    passwordStatus: "С паролем",
    spamblockStatus: "Спамблок",
    date: "20 февраля 2024 | 14:41",
    price: 20
  },
];

function filterProducts(products: ProductCardProps[], filters: any): ProductCardProps[] {
  return products.filter(product => {
    if (
      (filters.price.min && product.price < filters.price.min) ||
      (filters.price.max && product.price > filters.price.max)
    ) return false;
    if (filters.origin && filters.origin !== 'Все' && product.country !== filters.origin) return false;
    if ((filters.dialogs.min && product.dialogs < filters.dialogs.min) || (filters.dialogs.max && product.dialogs > filters.dialogs.max)) return false;
    if ((filters.channels.min && product.channels < filters.channels.min) || (filters.channels.max && product.channels > filters.channels.max)) return false;
    if (filters.spamblock === 'Есть' && product.spamblockStatus !== 'Спамблок') return false;
    if (filters.spamblock === 'Нет' && product.spamblockStatus !== 'Без спамблока') return false;
    if (filters.contacts.min || filters.contacts.max) {
      if (filters.contacts.min && product.dialogs < filters.contacts.min) return false;
      if (filters.contacts.max && product.dialogs > filters.contacts.max) return false;
    }
    if (filters.searchString && !product.title.toLowerCase().includes(filters.searchString.toLowerCase())) return false;
    return true;
  });
}

function HomeContent() {
  const filters = useFiltersStore();
  useFiltersHook(); // Sync filters with URL query params
  
  // Store current filters state for filtering - only updated when search is triggered
  const [activeFilters, setActiveFilters] = useState<any>(filters);
  
  // State for loading and products from API
  const [products, setProducts] = useState<ProductCardProps[]>(sampleProducts);
  const [isLoading, setIsLoading] = useState(false);
  
  // Only apply filters and send API request when search button is clicked (searchTrigger changes)
  useEffect(() => {
    // Skip on initial mount (when searchTrigger is 0)
    if (filters.searchTrigger === 0) return;
    
    // When searchTrigger changes, update activeFilters with current filters state
    // Create a deep copy to avoid reactivity issues
    const newActiveFilters = {
      searchString: filters.searchString,
      origin: filters.origin,
      country: filters.country,
      contacts: { ...filters.contacts },
      dialogs: { ...filters.dialogs },
      channels: { ...filters.channels },
      price: { ...filters.price },
      age: { ...filters.age },
      idDigits: { ...filters.idDigits },
      telegramStars: { ...filters.telegramStars },
      adminChannels: { ...filters.adminChannels },
      adminChannelsChats: { ...filters.adminChannelsChats },
      adminChats: { ...filters.adminChats },
      adminChatsChannels: { ...filters.adminChatsChannels },
      giftsRegular: { ...filters.giftsRegular },
      giftsNft: { ...filters.giftsNft },
      channelsAndChatsChannels: { ...filters.channelsAndChatsChannels },
      channelsAndChatsChats: { ...filters.channelsAndChatsChats },
      premium: filters.premium,
      premiumDaysRemaining: filters.premiumDaysRemaining,
      spamblock: filters.spamblock,
      two_fa: filters.two_fa,
      with_admin_channels: filters.with_admin_channels,
      orderBy: filters.orderBy,
      orderType: filters.orderType,
      selectedCountries: [...filters.selectedCountries],
      selectedOrigins: [...filters.selectedOrigins],
      selectedMinusOrigins: [...filters.selectedMinusOrigins],
      excludedCountries: [...filters.excludedCountries],
      seller_username: filters.seller_username,
    };
    
    setActiveFilters(newActiveFilters);
    
    // Send API request when search button is clicked
    setIsLoading(true);
    
    // Use current URL query params (which already contain all filters from useFiltersHook)
    const currentUrlParams = window.location.search;
    
    // Send API request to mock API endpoint (like Lorem Ipsum for images)
    // Using Next.js API route at /api/products which returns mock data
    // Replace with your real API endpoint when ready
    fetch(`/api/products${currentUrlParams}`)
      .then(res => {
        // Check if response is OK and is JSON
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }
        return res.json();
      })
      .then(data => {
        // Check if data is valid array
        if (Array.isArray(data)) {
          setProducts(data); // Update products from API response
        } else {
          console.warn('API returned invalid data format, using sample products');
          setProducts(sampleProducts);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
        // On error, keep using sample products
        setProducts(sampleProducts);
      });
      
  }, [filters.searchTrigger]); // Only trigger when search button is clicked
  
  // Only filter products when activeFilters changes (which only happens on search trigger)
  // Use useMemo to prevent recalculation on every render
  const filteredProducts = useMemo(() => {
    return filterProducts(products, activeFilters);
  }, [activeFilters, products]);
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main className="w-full">
        <Filters />
        <FiltersFooterPanel />
        <section className="max-w-10xl mx-auto w-full py-8 desktop:px-[105px] laptop:px-[75px] px-6 space-y-[75px] pt-40 pb-20">
          {isLoading ? (
            <div className="text-gray-500 text-center py-12">Загрузка...</div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product: ProductCardProps, i: number) => (
              <ProductCard key={i} {...product} />
            ))
          ) : (
            <div className="text-gray-500 text-center py-12">Товары по фильтру не найдены</div>
          )}
        </section>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="text-gray-500 text-center py-12">Загрузка...</div>}>
      <HomeContent />
    </Suspense>
  );
}
