import Image from "next/image"
import Link from "next/link"
import { CornerDoodle } from "@/components/corner-doodle"
import { Github, ExternalLink } from "lucide-react"

interface PortfolioCardProps {
  title: string
  description: string
  imageSrc: string
  appLink: string
  githubLink?: string
  color: string
  doodleType: "star" | "circle" | "squiggle" | "burst"
  doodlePosition: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  doodleColor: string
}

export function PortfolioCard({
  title,
  description,
  imageSrc,
  appLink,
  githubLink,
  color,
  doodleType,
  doodlePosition,
  doodleColor,
}: PortfolioCardProps) {
  return (
    <div className="portfolio-item-container">
      <div className={`portfolio-item-content bg-[${color}] dark:bg-[${color}] text-black`}>
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <CornerDoodle position={doodlePosition} type={doodleType} color={doodleColor} />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-xl">{title}</h3>
            <div className="flex space-x-2">
              {githubLink && (
                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                  <div className="w-6 h-6 bg-black flex items-center justify-center">
                    <Github size={12} color="white" />
                  </div>
                </Link>
              )}
              <Link href={appLink} target="_blank" rel="noopener noreferrer">
                <div className="w-6 h-6 bg-black flex items-center justify-center">
                  <ExternalLink size={12} color="white" />
                </div>
              </Link>
            </div>
          </div>
          <p className="text-sm line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  )
}

