"use client"
import React from "react";
import RangeFilter from "./RangeFilter";

const TelegramStarsFilter: React.FC = () => {
  const ChannelIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width={49} height={42} viewBox="0 0 49 42" fill="none">
      <path d="M18.5948 6.6282L24.346 18.2727L37.196 20.136L27.8922 29.2014L30.0908 42L18.5948 35.9586L7.10522 42L9.29739 29.2014L0 20.136L12.85 18.2727L18.5948 6.6282Z" fill="#9F9F9F" />
      <path d="M44.6543 10.9739L49 13.3467L44.6543 15.7258L42.2816 20.0651L39.9025 15.7258L35.5633 13.3467L39.9025 10.9739L42.2816 6.6282L44.6543 10.9739Z" fill="#9F9F9F" />
      <path d="M28.4788 2.27602L30.7613 3.52686L28.4788 4.77126L27.228 7.05373L25.9836 4.77126L23.7012 3.52686L25.9836 2.27602L27.228 0L28.4788 2.27602Z" fill="#9F9F9F" />
    </svg>
  )
  return <RangeFilter title="Кол-во Telegram Stars" icon={ChannelIcon} filterKey="telegramStars" />;
};
export default TelegramStarsFilter;
