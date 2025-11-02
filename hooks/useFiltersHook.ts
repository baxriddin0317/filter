"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFiltersStore, IChoose, Range } from "../store/filtersStore";

// Helper function to convert IChoose string to URL format
const chooseToUrlValue = (value: IChoose): string => {
  if (value === "Есть") return "1";
  if (value === "Нет") return "0";
  return "none";
};

// Helper function to convert URL value to IChoose string
const urlValueToChoose = (value: string | null): IChoose => {
  if (value === "1") return "Есть";
  if (value === "0") return "Нет";
  return "Не важно";
};

// Helper function to convert Range to URL params (min/max format)
const rangeToUrl = (range: Range, keyFrom: string, keyTo: string, params: URLSearchParams) => {
  if (range.min && range.min > 0) {
    params.set(keyFrom, range.min.toString());
  } else {
    params.delete(keyFrom);
  }
  if (range.max && range.max > 0) {
    params.set(keyTo, range.max.toString());
  } else {
    params.delete(keyTo);
  }
};

// Helper function to get Range from URL params
const urlToRange = (params: URLSearchParams, keyFrom: string, keyTo: string): Range => {
  const from = params.get(keyFrom);
  const to = params.get(keyTo);
  return {
    min: from !== null ? Number(from) : 0,
    max: to !== null ? Number(to) : 0,
  };
};

export const useFiltersHook = () => {
  const filters = useFiltersStore();
  const searchParams = useSearchParams();
  const initializedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const filtersRef = useRef(filters);
  
  // Keep filters ref updated
  useEffect(() => {
    filtersRef.current = filters;
  }, [filters]);
  
  // Helper function to build URL from filters
  const buildUrlFromFilters = (currentFilters: typeof filters) => {
    const params = new URLSearchParams();

    // Range filters
    rangeToUrl(currentFilters.channels, "channelsFrom", "channelsTo", params);
    rangeToUrl(currentFilters.contacts, "contactsFrom", "contactsTo", params);
    rangeToUrl(currentFilters.dialogs, "dialogsFrom", "dialogsTo", params);
    rangeToUrl(currentFilters.price, "priceFrom", "priceTo", params);
    rangeToUrl(currentFilters.age, "ageFrom", "ageTo", params);
    rangeToUrl(currentFilters.idDigits, "idDigitsFrom", "idDigitsTo", params);
    rangeToUrl(currentFilters.telegramStars, "telegramStarsFrom", "telegramStarsTo", params);
    rangeToUrl(currentFilters.adminChannels, "adminChannelsFrom", "adminChannelsTo", params);
    rangeToUrl(currentFilters.adminChannelsChats, "adminChannelsChatsFrom", "adminChannelsChatsTo", params);
    rangeToUrl(currentFilters.adminChats, "adminChatsFrom", "adminChatsTo", params);
    rangeToUrl(currentFilters.adminChatsChannels, "adminChatsChannelsFrom", "adminChatsChannelsTo", params);
    rangeToUrl(currentFilters.giftsRegular, "giftsRegularFrom", "giftsRegularTo", params);
    rangeToUrl(currentFilters.giftsNft, "giftsNftFrom", "giftsNftTo", params);
    rangeToUrl(currentFilters.channelsAndChatsChannels, "channelsAndChatsChannelsFrom", "channelsAndChatsChannelsTo", params);
    rangeToUrl(currentFilters.channelsAndChatsChats, "channelsAndChatsChatsFrom", "channelsAndChatsChatsTo", params);

    // Boolean filters (IChoose)
    if (currentFilters.premium !== "Не важно") {
      params.set("premium", chooseToUrlValue(currentFilters.premium));
    } else {
      params.delete("premium");
    }

    if (currentFilters.spamblock !== "Не важно") {
      params.set("spamblock", chooseToUrlValue(currentFilters.spamblock));
    } else {
      params.delete("spamblock");
    }

    if (currentFilters.two_fa !== "Не важно") {
      params.set("two_fa", chooseToUrlValue(currentFilters.two_fa));
    } else {
      params.delete("two_fa");
    }

    if (currentFilters.with_admin_channels !== "Не важно") {
      params.set("with_admin_channels", chooseToUrlValue(currentFilters.with_admin_channels));
    } else {
      params.delete("with_admin_channels");
    }

    // String filters
    if (currentFilters.orderBy) {
      params.set("orderBy", currentFilters.orderBy);
    } else {
      params.delete("orderBy");
    }

    if (currentFilters.orderType) {
      params.set("orderType", currentFilters.orderType);
    } else {
      params.delete("orderType");
    }

    if (currentFilters.country) {
      params.set("country", currentFilters.country);
    } else {
      params.delete("country");
    }

    if (currentFilters.origin) {
      params.set("origin", currentFilters.origin);
    } else {
      params.delete("origin");
    }

    if (currentFilters.searchString) {
      params.set("searchString", currentFilters.searchString);
    } else {
      params.delete("searchString");
    }

    if (currentFilters.seller_username) {
      params.set("seller_username", currentFilters.seller_username);
    } else {
      params.delete("seller_username");
    }

    // Arrays
    if (currentFilters.selectedCountries.length > 0) {
      params.set("selectedCountries", JSON.stringify(currentFilters.selectedCountries));
    } else {
      params.delete("selectedCountries");
    }

    if (currentFilters.selectedOrigins.length > 0) {
      params.set("selectedOrigins", JSON.stringify(currentFilters.selectedOrigins));
    } else {
      params.delete("selectedOrigins");
    }

    if (currentFilters.selectedMinusOrigins.length > 0) {
      params.set("selectedMinusOrigins", JSON.stringify(currentFilters.selectedMinusOrigins));
    } else {
      params.delete("selectedMinusOrigins");
    }

    if (currentFilters.excludedCountries.length > 0) {
      params.set("excludedCountries", JSON.stringify(currentFilters.excludedCountries));
    } else {
      params.delete("excludedCountries");
    }

    const queryString = params.toString();
    return queryString ? `?${queryString}` : window.location.pathname;
  };

  // Initialize filters from URL params on mount
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    const updateFilters = filters.updateFilters;

    const urlFilters: any = {};

    // Range filters - only update if URL has values and store has default values
    const updateRangeIfNeeded = (key: string, keyFrom: string, keyTo: string, currentValue: Range) => {
      const from = searchParams.get(keyFrom);
      const to = searchParams.get(keyTo);
      if ((from !== null || to !== null) && currentValue.min === 0 && currentValue.max === 0) {
        urlFilters[key] = {
          min: from !== null ? Number(from) : 0,
          max: to !== null ? Number(to) : 0,
        };
      }
    };

    updateRangeIfNeeded("channels", "channelsFrom", "channelsTo", filters.channels);
    updateRangeIfNeeded("contacts", "contactsFrom", "contactsTo", filters.contacts);
    updateRangeIfNeeded("dialogs", "dialogsFrom", "dialogsTo", filters.dialogs);
    updateRangeIfNeeded("price", "priceFrom", "priceTo", filters.price);
    updateRangeIfNeeded("age", "ageFrom", "ageTo", filters.age);
    updateRangeIfNeeded("idDigits", "idDigitsFrom", "idDigitsTo", filters.idDigits);
    updateRangeIfNeeded("telegramStars", "telegramStarsFrom", "telegramStarsTo", filters.telegramStars);
    updateRangeIfNeeded("adminChannels", "adminChannelsFrom", "adminChannelsTo", filters.adminChannels);
    updateRangeIfNeeded("adminChannelsChats", "adminChannelsChatsFrom", "adminChannelsChatsTo", filters.adminChannelsChats);
    updateRangeIfNeeded("adminChats", "adminChatsFrom", "adminChatsTo", filters.adminChats);
    updateRangeIfNeeded("adminChatsChannels", "adminChatsChannelsFrom", "adminChatsChannelsTo", filters.adminChatsChannels);
    updateRangeIfNeeded("giftsRegular", "giftsRegularFrom", "giftsRegularTo", filters.giftsRegular);
    updateRangeIfNeeded("giftsNft", "giftsNftFrom", "giftsNftTo", filters.giftsNft);
    updateRangeIfNeeded("channelsAndChatsChannels", "channelsAndChatsChannelsFrom", "channelsAndChatsChannelsTo", filters.channelsAndChatsChannels);
    updateRangeIfNeeded("channelsAndChatsChats", "channelsAndChatsChatsFrom", "channelsAndChatsChatsTo", filters.channelsAndChatsChats);

    // Boolean filters (IChoose)
    const premium = searchParams.get("premium");
    if (premium !== null && filters.premium === "Не важно") {
      urlFilters.premium = urlValueToChoose(premium);
    }

    const spamblock = searchParams.get("spamblock");
    if (spamblock !== null && filters.spamblock === "Не важно") {
      urlFilters.spamblock = urlValueToChoose(spamblock);
    }

    const two_fa = searchParams.get("two_fa");
    if (two_fa !== null && filters.two_fa === "Не важно") {
      urlFilters.two_fa = urlValueToChoose(two_fa);
    }

    const with_admin_channels = searchParams.get("with_admin_channels");
    if (with_admin_channels !== null && filters.with_admin_channels === "Не важно") {
      urlFilters.with_admin_channels = urlValueToChoose(with_admin_channels);
    }

    // String filters
    const orderBy = searchParams.get("orderBy");
    if (orderBy !== null && !filters.orderBy) {
      urlFilters.orderBy = orderBy;
    }

    const orderType = searchParams.get("orderType");
    if (orderType !== null && !filters.orderType) {
      urlFilters.orderType = orderType;
    }

    const country = searchParams.get("country");
    if (country !== null && !filters.country) {
      urlFilters.country = country;
    }

    const origin = searchParams.get("origin");
    if (origin !== null && !filters.origin) {
      urlFilters.origin = origin;
    }

    const searchString = searchParams.get("searchString");
    if (searchString !== null && !filters.searchString) {
      urlFilters.searchString = searchString;
    }

    const seller_username = searchParams.get("seller_username");
    if (seller_username !== null && !filters.seller_username) {
      urlFilters.seller_username = seller_username;
    }

    // Arrays
    const selectedCountries = searchParams.get("selectedCountries");
    if (selectedCountries !== null) {
      try {
        urlFilters.selectedCountries = JSON.parse(selectedCountries);
      } catch (e) {
        // Ignore parse errors
      }
    }

    const selectedOrigins = searchParams.get("selectedOrigins");
    if (selectedOrigins !== null) {
      try {
        urlFilters.selectedOrigins = JSON.parse(selectedOrigins);
      } catch (e) {
        // Ignore parse errors
      }
    }

    const selectedMinusOrigins = searchParams.get("selectedMinusOrigins");
    if (selectedMinusOrigins !== null) {
      try {
        urlFilters.selectedMinusOrigins = JSON.parse(selectedMinusOrigins);
      } catch (e) {
        // Ignore parse errors
      }
    }

    const excludedCountries = searchParams.get("excludedCountries");
    if (excludedCountries !== null) {
      try {
        urlFilters.excludedCountries = JSON.parse(excludedCountries);
      } catch (e) {
        // Ignore parse errors
      }
    }

    // Only update if there are URL params to apply
    if (Object.keys(urlFilters).length > 0) {
      updateFilters(urlFilters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Update URL params when filters change (with debounce - real-time URL update)
  // Using window.history.replaceState to avoid triggering Next.js navigation/requests
  useEffect(() => {
    // Skip URL update on initial mount (handled by first useEffect)
    if (!initializedRef.current) return;
    
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Debounce URL updates to avoid too frequent updates
    timeoutRef.current = setTimeout(() => {
      const newUrl = buildUrlFromFilters(filters);
      const currentUrl = window.location.pathname + window.location.search;
      
      // Only update if URL actually changed
      if (newUrl !== currentUrl) {
        // Use window.history.replaceState to update URL without triggering Next.js navigation/requests
        // This only updates the browser URL bar, doesn't send any requests
        window.history.replaceState(
          { ...window.history.state },
          '',
          newUrl
        );
      }
    }, 300); // 300ms debounce delay

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [filters]); // Update URL when filters change (but no request is sent)
};
