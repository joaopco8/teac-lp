"use client";

import { motion } from "framer-motion"
import { BenefitCard } from "@/components/cards/benefit-card"
import { SectionCtaButton } from "@/components/ui/section-cta-button"
import { SpaceBackground } from "@/components/ui/space-background"

export function BenefitsSection() {
  const benefits = [
    {
      title: "Autodescoberta Profunda",
      description: "Conheça aspectos de si mesmo que estavam ocultos e desenvolva uma compreensão mais profunda de quem você realmente é.",
      icon: "search"
    },
    {
      title: "Propósito e Significado",
      description: "Encontre clareza sobre seu propósito de vida e descubra como viver com mais significado e realização.",
      icon: "target"
    },
    {
      title: "Paz Interior",
      description: "Cultive uma sensação duradoura de tranquilidade e equilíbrio emocional, independente das circunstâncias externas.",
      icon: "heart"
    },
    {
      title: "Relacionamentos Autênticos",
      description: "Desenvolva conexões mais profundas e genuínas, baseadas em quem você realmente é.",
      icon: "users"
    },
    {
      title: "Sabedoria Intuitiva",
      description: "Acesse sua sabedoria interior e desenvolva maior confiança em sua intuição e percepção.",
      icon: "lightbulb"
    },
    {
      title: "Vitalidade e Bem-estar",
      description: "Experimente maior energia, clareza mental e bem-estar físico através de práticas integradas.",
      icon: "zap"
    }
  ]

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <SpaceBackground />
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefícios do Método TEAC
          </h2>
          <p className="text-xl text-muted-foreground">
            Transformações reais para sua vida
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <SectionCtaButton />
        </motion.div>
      </div>
    </section>
  )
} 