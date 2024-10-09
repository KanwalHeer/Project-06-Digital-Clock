"use client";
import React, { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(() => new Date());
  const [is24Hour, setIs24Hour] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24Hour,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const switchTo24Hour = () => {
    setIs24Hour(true);
  };

  const switchTo12Hour = () => {
    setIs24Hour(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-6  rounded-xl shadow-2xl shadow-red-300">
      <div className="max-w-md w-full h-full text-center bg-red-950 p-8 rounded-xl">
        <div>
          <h1 className="text-white font-bold md:text-2xl lg:text-2xl text-center">
            Digital Clock
          </h1>
          <p className="text-red-200 text-sm text-center pt-2">
            Display current time in hours, minutes, and seconds
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-red-100 text-center">
            {formatTime(time)}
          </h1>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center mt-5 mb-5">
          <button
            onClick={switchTo12Hour}
            className={`py-2 px-6 rounded-xl font-semibold text-sm ${
              !is24Hour ? "bg-red-400 text-red-100" : "text-red-950 bg-red-100"
            }`}
          >
            12-Hour Format
          </button>
          <button
            onClick={switchTo24Hour}
            className={`py-2 px-6 rounded-xl font-semibold text-sm ${
              is24Hour ? "bg-red-400 text-red-100" : "text-red-950 bg-red-100"
            }`}
          >
            24-Hour Format
          </button>
        </div>
      </div>
    </div>
  );
}
