'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Audio Previews', href: '/' },
    { label: 'Suggestions for best use', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ]

  return (
    <header className="w-full relative z-50">

      {/* DESKTOP — Full Banner Image */}
      <div className="hidden md:block w-full relative">
        <Link href="/">
        
        <Image
      
          src="/Header.png"
          alt="Tinnitus Relief by Earvana"
          width={1560}
          height={280}
          priority
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
        </Link>
        

        {/* Desktop Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-1/2 -translate-y-1/2 right-12 -mt-[52px] mr-[732px] w-28 h-28 hover:scale-110 transition-transform focus:outline-none"
        >
          {/* <Image
            src="/menu.png"
            alt="Menu"
            width={120}
            height={120}
            className="object-contain"
          /> */}
        </button>
      </div>

      {/* MOBILE — Custom Coded Header */}
      <div
        className="block md:hidden w-full px-5 py-[14px] border-b border-[#3ca08c]/30 relative"
        style={{
          background: 'linear-gradient(180deg, #0a1a18 0%, #0d2420 60%, #081812 100%)'
        }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-baseline">
            <span className="font-orbitron font-black text-[22px] text-white tracking-tight">
              tinnitus
            </span>
            <span className="font-rajdhani font-light italic text-[20px] text-[#6070cc] ml-[3px]">
              relief
            </span>
            <span className="font-sans text-[10px] text-[#80a0a0] ml-[6px] whitespace-nowrap">
              by earvana
            </span>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer group flex items-center justify-center p-1"
          >
            <Image
              src="/menu.png"
              alt="Menu"
              width={26}
              height={26}
              className="object-contain"
            />
          </button>
        </div>

        <div className="mt-[6px] flex justify-between items-end">
          <p className="font-sans text-[9px] lowercase tracking-[2.5px] text-[#507060]">
            professional masking solution
          </p>
          <p className="font-sans text-[9px] italic text-[#608888] text-right leading-tight">
            endorsed by <br /> audiologists
          </p>
        </div>
      </div>

      {/* DROPDOWN MENU - Glassmorphism */}
      {isMenuOpen && (
        <>
          {/* Overlay to close menu */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute top-[100%] right-5 md:right-[780px] md:top-[205px] mt-2 w-[280px] z-50 overflow-hidden">
            <div
              className="bg-[#2a3a2d]/85 backdrop-blur-xl border border-[#3ca08c]/50 rounded-2xl shadow-[0_0_25px_rgba(60,160,140,0.2)] p-6"
            >
              <ul className="space-y-5">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 group"
                    >
                      <span className="w-2 h-2 rounded-full bg-white group-hover:bg-[#3ca08c] group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                      <span className="font-kallisto text-white text-[17px] font-medium tracking-wide group-hover:translate-x-1 transition-transform">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

    </header>
  )
}
