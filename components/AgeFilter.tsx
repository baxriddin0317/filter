"use client"
import React from "react";
import RangeFilter from "./RangeFilter";

const AgeFilter: React.FC = () => {
  return <RangeFilter title="Возраст пользователя" filterKey="age" />;
};

export default AgeFilter;
