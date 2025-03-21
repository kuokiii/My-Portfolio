interface HandwrittenTextProps {
  text: string
  className?: string
  color?: string
}

export function HandwrittenText({ text, className = "", color = "black" }: HandwrittenTextProps) {
  return (
    <div
      className={`font-bold relative inline-block ${className}`}
      style={{
        transform: "rotate(-2deg)",
        fontFamily: "cursive, sans-serif",
      }}
    >
      <span className="relative z-10">{text}</span>
      <svg
        className="absolute -bottom-1 left-0 w-full z-0"
        height="5"
        viewBox="0 0 100 5"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 2.5C20 1 40 4 60 2.5C80 1 100 3.5 100 2.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

