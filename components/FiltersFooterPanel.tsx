import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

const FiltersFooterPanel: React.FC = () => {
  const [activeAction, setActiveAction] = useState<"bulk" | "reset" | null>("bulk")
  return (
    <div className="max-w-10xl mx-auto w-full desktop:px-[105px] laptop:px-[75px] px-6 pt-14 flex flex-wrap items-center justify-between gap-4">
      <RadioGroup className="flex items-center gap-5" defaultValue="price-asc">
        <Label className="flex items-center gap-3 text-xl text-brand-white font-medium cursor-pointer" htmlFor="r1">
          <RadioGroupItem value="price-asc" id="r1" />
          <span>Сначала дешёвые</span>
        </Label>
        <Label className="flex items-center gap-3 text-xl text-brand-white font-medium cursor-pointer" htmlFor="r2">
          <RadioGroupItem value="price-desc" id="r2" />
          <span>Сначала дорогие</span>
        </Label>
        <Label className="flex items-center gap-3 text-xl text-brand-white font-medium cursor-pointer" htmlFor="r3">
          <RadioGroupItem value="date-asc" id="r3" />
          <span>Сначала старые</span>
        </Label>
        <Label className="flex items-center gap-3 text-xl text-brand-white font-medium cursor-pointer" htmlFor="r4">
          <RadioGroupItem value="date-desc" id="r4" />
          <span>Сначала новые</span>
        </Label>
      </RadioGroup>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setActiveAction("bulk")}
          className={
            "h-16 rounded-5xl transition-colors flex items-center justify-center gap-5 cursor-pointer text-2xl px-9 " +
            (activeAction === "bulk"
              ? "bg-brand-yellow text-brand-neutral hover:bg-brand-yellow/90"
              : "bg-transparent text-white hover:bg-white/10")
          }
        >
          Массовая покупка
        </button>
        <button
          onClick={() => setActiveAction("reset")}
          className={
            "h-16 rounded-5xl transition-colors flex items-center justify-center gap-5 cursor-pointer text-2xl px-9 " +
            (activeAction === "reset"
              ? "bg-brand-yellow text-brand-neutral hover:bg-brand-yellow/90"
              : "bg-transparent text-white hover:bg-white/10")
          }
        >
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
};
export default FiltersFooterPanel;
