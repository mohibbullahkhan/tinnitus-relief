'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full relative overflow-hidden">
      
      {/* DESKTOP — Full Banner Image */}
      {/* The image contains all text and icons natively */}
      <div className="hidden md:block w-full">
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
      </div>

      {/* MOBILE — Custom Coded Header */}
      {/* Used for better legibility than a scaled-down banner */}
      <div 
        className="block md:hidden w-full px-5 py-[14px] border-b border-[#3ca08c]/30"
        style={{
          background: 'linear-gradient(180deg, #0a1a18 0%, #0d2420 60%, #081812 100%)'
        }}
      >
        {/* Top Row: Logo and Hamburger */}
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

          {/* Hamburger Icon */}
          <div className="flex flex-col gap-[4px] cursor-pointer group">
            <div className="w-[22px] h-[2px] bg-gradient-to-r from-[#60c8c0] to-[#4090a0]"></div>
            <div className="w-[22px] h-[2px] bg-gradient-to-r from-[#60c8c0] to-[#4090a0]"></div>
            <div className="w-[22px] h-[2px] bg-gradient-to-r from-[#60c8c0] to-[#4090a0]"></div>
          </div>
        </div>

        {/* Bottom Row: Subtext and Endorsement */}
        <div className="mt-[6px] flex justify-between items-end">
          <p className="font-sans text-[9px] lowercase tracking-[2.5px] text-[#507060]">
            professional masking solution
          </p>
          <p className="font-sans text-[9px] italic text-[#608888] text-right leading-tight">
            endorsed by <br /> audiologists
          </p>
        </div>
      </div>
      
    </header>
  )
}