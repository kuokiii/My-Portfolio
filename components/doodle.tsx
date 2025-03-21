interface DoodleProps {
  className?: string
  type: "arrow" | "squiggle" | "circle" | "star" | "cross"
  color?: string
}

export function Doodle({ className = "", type = "arrow", color = "black" }: DoodleProps) {
  if (type === "arrow") {
    return (
      <svg
        className={className}
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50C10 50 40 50 50 10M50 10C50 10 30 15 25 25M50 10C50 10 45 30 35 35"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === "squiggle") {
    return (
      <svg
        className={className}
        width="60"
        height="20"
        viewBox="0 0 60 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 10C1 10 10 1 20 10C30 19 40 1 50 10C60 19 70 10 70 10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === "star") {
    return (
      <svg
        className={className}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0L18.5 11L30 15L18.5 19L15 30L11.5 19L0 15L11.5 11L15 0Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === "cross") {
    return (
      <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2L18 18M2 18L18 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
    </svg>
  )
}

