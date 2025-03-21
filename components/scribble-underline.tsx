interface ScribbleUnderlineProps {
  width?: number
  color?: string
  className?: string
}

export function ScribbleUnderline({ width = 100, color = "black", className = "" }: ScribbleUnderlineProps) {
  return (
    <svg
      className={className}
      width={width}
      height="10"
      viewBox={`0 0 ${width} 10`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d={`M0 5C${width * 0.2} 2 ${width * 0.4} 8 ${width * 0.6} 3C${width * 0.8} 7 ${width} 5`}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

