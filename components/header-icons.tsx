import { Star, Sparkles, Zap, Palette, Lightbulb, Music } from "lucide-react"

interface HeaderIconProps {
  className?: string
}

export function HeaderIcons({ className = "" }: HeaderIconProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-6 h-6 rounded-full bg-[#FF90E8] flex items-center justify-center">
        <Star className="w-3 h-3" />
      </div>
      <div className="w-6 h-6 rounded-full bg-[#FFC900] flex items-center justify-center">
        <Sparkles className="w-3 h-3" />
      </div>
      <div className="w-6 h-6 rounded-full bg-[#90E9FF] flex items-center justify-center">
        <Zap className="w-3 h-3" />
      </div>
      <div className="w-6 h-6 rounded-full bg-[#c5a1ff] flex items-center justify-center">
        <Palette className="w-3 h-3" />
      </div>
      <div className="w-6 h-6 rounded-full bg-[#FF5757] flex items-center justify-center">
        <Lightbulb className="w-3 h-3" />
      </div>
      <div className="w-6 h-6 rounded-full bg-[#7cf072] flex items-center justify-center">
        <Music className="w-3 h-3" />
      </div>
    </div>
  )
}

