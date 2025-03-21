// This component is no longer used in the main page to avoid doodles overlapping with text
interface DoodlesProps {
  type: "stars" | "circles" | "squiggles" | "mixed"
  count?: number
  className?: string
}

export function Doodles({ type = "mixed", count = 5, className = "" }: DoodlesProps) {
  const renderDoodle = (index: number) => {
    const randomSize = Math.floor(Math.random() * 20) + 10 // 10-30px
    const randomRotation = Math.floor(Math.random() * 360)
    const colors = ["#FF90E8", "#FFC900", "#90E9FF", "#FF5757", "#c5a1ff", "#7cf072"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    // Ensure doodles don't overlap with content by positioning them in corners and edges
    const positions = [
      { top: "5%", left: "5%" },
      { top: "5%", right: "5%" },
      { bottom: "5%", left: "5%" },
      { bottom: "5%", right: "5%" },
      { top: "50%", left: "5%" },
      { top: "50%", right: "5%" },
      { top: "5%", left: "50%" },
      { bottom: "5%", left: "50%" },
      { top: "15%", left: "15%" },
      { top: "15%", right: "15%" },
      { bottom: "15%", left: "15%" },
      { bottom: "15%", right: "15%" },
    ]

    const position = positions[index % positions.length]

    const style = {
      position: "absolute" as const,
      width: `${randomSize}px`,
      height: `${randomSize}px`,
      transform: `rotate(${randomRotation}deg)`,
      ...position,
      zIndex: 1,
    }

    if (type === "stars" || (type === "mixed" && index % 3 === 0)) {
      return (
        <svg key={index} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill={randomColor}
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      )
    }

    if (type === "circles" || (type === "mixed" && index % 3 === 1)) {
      return (
        <svg key={index} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="black"
            strokeWidth="1"
            strokeDasharray="2 2"
            fill={randomColor}
            fillOpacity="0.5"
          />
        </svg>
      )
    }

    // Squiggles or default
    return (
      <svg
        key={index}
        style={style}
        width="40"
        height="10"
        viewBox="0 0 40 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5C1 5 5 1 10 5C15 9 25 1 30 5C35 9 39 5 39 5"
          stroke={randomColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {Array.from({ length: count }).map((_, index) => renderDoodle(index))}
    </div>
  )
}

