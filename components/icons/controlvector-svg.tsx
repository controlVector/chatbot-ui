"use client"

import { FC } from "react"

interface ControlVectorSVGProps {
  theme?: "dark" | "light"
  scale?: number
  className?: string
}

export const ControlVectorSVG: FC<ControlVectorSVGProps> = ({ 
  theme = "dark", 
  scale = 1, 
  className = "" 
}) => {
  const size = 48 * scale
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* ControlVector gradient arrow icon */}
      <defs>
        <linearGradient id="cvGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      {/* Three chevron arrows forming the ControlVector logo */}
      <path
        d="M8 12L16 24L8 36"
        stroke="url(#cvGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 12L24 24L16 36"
        stroke="url(#cvGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M24 12L32 24L24 36"
        stroke="url(#cvGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Small dot accent */}
      <circle
        cx="36"
        cy="24"
        r="3"
        fill="#EC4899"
      />
    </svg>
  )
}