"use client"
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import FiltersFooterPanel from "../components/FiltersFooterPanel";
import ProductCard from "../components/ProductCard";
import { useFiltersStore } from "../store/filtersStore";

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

export default function Home() {
  const filters = useFiltersStore();
  const filteredProducts = filterProducts(sampleProducts, filters);
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main className="w-full">
        <Filters />
        <FiltersFooterPanel />
        <section className="max-w-10xl mx-auto w-full py-8 desktop:px-[105px] laptop:px-[75px] px-6 space-y-[75px] pt-40 pb-20">
          {filteredProducts.length > 0 ? filteredProducts.map((product: ProductCardProps, i: number) => (
            <ProductCard key={i} {...product} />
          )) : (
            <div className="text-gray-500 text-center py-12">Товары по фильтру не найдены</div>
          )}
        </section>
      </main>
    </>
  );
}
