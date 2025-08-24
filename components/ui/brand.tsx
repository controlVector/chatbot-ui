"use client"

import Link from "next/link"
import Image from "next/image"
import { FC } from "react"

interface BrandProps {
  theme?: "dark" | "light"
  scale?: number
  showText?: boolean
}

export const Brand: FC<BrandProps> = ({ theme = "dark", scale = 1, showText = true }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://controlvector.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <Image
          src={theme === "dark" ? "/DARK_BRAND_LOGO.png" : "/LIGHT_BRAND_LOGO.png"}
          alt="ControlVector"
          width={300 * scale}
          height={120 * scale}
          className="object-contain"
          priority
        />
      </div>

      {showText && (
        <div className="text-2xl font-bold tracking-wide text-center">
          AI Infrastructure Management
        </div>
      )}
    </Link>
  )
}
