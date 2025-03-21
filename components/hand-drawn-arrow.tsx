interface HandDrawnArrowProps {
  className?: string
}

export function HandDrawnArrow({ className = "" }: HandDrawnArrowProps) {
  return (
    <svg
      className={`${className}`}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 20C30 20 60 40 70 70C80 100 100 110 100 110"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 6"
      />
      <path
        d="M85 95L100 110L115 95"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

