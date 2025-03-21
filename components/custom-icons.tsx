interface IconProps {
  type: "star" | "hashtag" | "heart" | "lightbulb" | "burst" | "sun"
  color: string
  className?: string
}

export function CustomIcon({ type, color, className = "" }: IconProps) {
  const renderIcon = () => {
    switch (type) {
      case "star":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill={color}
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "hashtag":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M10 3L6 21M18 3L14 21M3 10H21M3 14H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "heart":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z"
              fill={color}
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "lightbulb":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M9.66347 17H14.3365M12 3V4M18.364 5.63604L17.6569 6.34315M21 12H20M4 12H3M6.34309 6.34315L5.63599 5.63604M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={color}
            />
          </svg>
        )
      case "burst":
        return (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z"
              fill={color}
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>
        )
      case "sun":
        return (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <circle cx="20" cy="20" r="10" fill={color} stroke="black" strokeWidth="1.5" />
            <path
              d="M20 5V2M20 38V35M5 20H2M38 20H35M30 10L32 8M8 32L10 30M10 10L8 8M32 32L30 30"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="20" cy="20" r="3" fill="white" stroke="black" />
          </svg>
        )
      default:
        return null
    }
  }

  return <div className="inline-block">{renderIcon()}</div>
}

export function CircleIcon({ type, color, className = "" }: IconProps) {
  return (
    <div
      className={`rounded-full p-2 flex items-center justify-center ${className}`}
      style={{ backgroundColor: color }}
    >
      <CustomIcon type={type} color={color} className="text-black" />
    </div>
  )
}

