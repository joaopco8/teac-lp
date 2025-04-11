import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { Heart, Search, Target, Users, Lightbulb, Zap } from "lucide-react"

interface BenefitCardProps {
  title: string
  description: string
  icon: string
}

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "heart":
        return <Heart className="h-10 w-10 text-blue-500" />
      case "search":
        return <Search className="h-10 w-10 text-blue-500" />
      case "target":
        return <Target className="h-10 w-10 text-blue-500" />
      case "users":
        return <Users className="h-10 w-10 text-blue-500" />
      case "lightbulb":
        return <Lightbulb className="h-10 w-10 text-blue-500" />
      case "zap":
        return <Zap className="h-10 w-10 text-blue-500" />
      default:
        return <Lightbulb className="h-10 w-10 text-blue-500" />
    }
  }

  return (
    <Card className="h-full border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
      <CardHeader>
        <div className="mb-2">{getIcon(icon)}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
} 