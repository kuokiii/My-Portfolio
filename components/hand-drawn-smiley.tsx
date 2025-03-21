interface SmileyProps {
  className?: string
}

export function HandDrawnSmiley({ className = "" }: SmileyProps) {
  return (
    <div className={`relative ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="3" fill="black" />
        <circle cx="40" cy="20" r="3" fill="black" />
        <path
          d="M15 35C20 45 40 45 45 35"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

