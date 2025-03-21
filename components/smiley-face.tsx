interface SmileyFaceProps {
  className?: string
}

export function SmileyFace({ className = "" }: SmileyFaceProps) {
  return (
    <div className={`w-8 h-8 rounded-full border-3 border-black flex items-center justify-center ${className}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="6" r="1" fill="black" />
        <circle cx="11" cy="6" r="1" fill="black" />
        <path d="M4 10C4 10 6 12 8 12C10 12 12 10 12 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

