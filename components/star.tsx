interface StarProps {
  className?: string
  color?: string
}

export function Star({ className = "", color = "#FF90E8" }: StarProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0L14.59 8.26L23.41 9.27L17.7 15.47L19.02 24L12 19.89L4.98 24L6.3 15.47L0.59 9.27L9.41 8.26L12 0Z"
        fill={color}
      />
    </svg>
  )
}

