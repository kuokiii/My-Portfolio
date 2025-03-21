interface CornerDoodleProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  type: "star" | "circle" | "squiggle" | "burst"
  color?: string
  className?: string
}

export function CornerDoodle({ position, type, color = "#FF90E8", className = "" }: CornerDoodleProps) {
  const positionClasses = {
    "top-left": "top-[-15px] left-[-15px]",
    "top-right": "top-[-15px] right-[-15px]",
    "bottom-left": "bottom-[-15px] left-[-15px]",
    "bottom-right": "bottom-[-15px] right-[-15px]",
  }

  const renderDoodle = () => {
    switch (type) {
      case "star":
        return (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0L18.5 11L30 15L18.5 19L15 30L11.5 19L0 15L11.5 11L15 0Z"
              fill={color}
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>
        )
      case "circle":
        return (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="15"
              cy="15"
              r="14"
              fill={color}
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
          </svg>
        )
      case "squiggle":
        return (
          <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 7.5C1 7.5 7 1 13.5 7.5C20 14 27 1 33.5 7.5C40 14 46 7.5 46 7.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "burst":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z"
              fill={color}
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return <div className={`absolute ${positionClasses[position]} z-10 ${className}`}>{renderDoodle()}</div>
}

