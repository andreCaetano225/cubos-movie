"use client";
import React from "react";

interface CirclePointProps {
  rating: number;
}

const radius = 100;
const stroke = 10;
const normalizedRadius = radius - stroke / 2;
const circumference = 2 * Math.PI * normalizedRadius;

export const CirclePoint: React.FC<CirclePointProps> = ({ rating }) => {
  const safeRating = Math.min(Math.max(rating, 0), 100);
  const strokeDashoffset = circumference - (safeRating / 100) * circumference;

  return (
    <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none">
      <div className="relative w-full h-full">
        <svg
          className="absolute top-0 left-0 w-full h-full transform -rotate-90"
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        >
          <circle
            stroke="#2a2730"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#facc15"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-500"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[58.7px] sm:w-[117.7px] h-[58.7px] sm:h-[117.7px] rounded-full bg-black/70 flex items-center justify-center">
            <span className="text-yellow-400 text-xl font-bold">
              {safeRating}
              <span className="text-white text-sm font-normal">%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
