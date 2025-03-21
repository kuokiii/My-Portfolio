import type React from "react"
interface HandDrawnBorderProps {
  children: React.ReactNode
  className?: string
}

export function HandDrawnBorder({ children, className = "" }: HandDrawnBorderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Top border with slight imperfections */}
      <div className="absolute top-[-3px] left-[-3px] right-[-3px] h-[3px] bg-black" />
      <div className="absolute top-[-5px] right-[-5px] w-[5px] h-[5px] bg-black" />

      {/* Right border with slight imperfections */}
      <div className="absolute top-[-3px] right-[-3px] bottom-[-3px] w-[3px] bg-black" />
      <div className="absolute bottom-[-5px] right-[-5px] w-[5px] h-[5px] bg-black" />

      {/* Bottom border with slight imperfections */}
      <div className="absolute bottom-[-3px] left-[-3px] right-[-3px] h-[3px] bg-black" />
      <div className="absolute bottom-[-5px] left-[-5px] w-[5px] h-[5px] bg-black" />

      {/* Left border with slight imperfections */}
      <div className="absolute top-[-3px] left-[-3px] bottom-[-3px] w-[3px] bg-black" />
      <div className="absolute top-[-5px] left-[-5px] w-[5px] h-[5px] bg-black" />

      {children}
    </div>
  )
}

