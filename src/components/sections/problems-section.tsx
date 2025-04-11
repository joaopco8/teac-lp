"use client";

import { motion } from "framer-motion"
import { HelpCircle, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionCtaButton } from "@/components/ui/section-cta-button"
import { SpaceBackground } from "@/components/ui/space-background"

const problems = [
  {
    problem: "Confusão espiritual e práticas contraditórias",
    solution: "Clareza e coerência através de um método integrado e sistemático"
  },
  {
    problem: "Dogmatismo rígido ou sincretismo superficial",
    solution: "Síntese equilibrada que respeita a tradição e incorpora novos conhecimentos"
  },
  {
    problem: "Espiritualidade desconectada da vida cotidiana",
    solution: "Práticas aplicáveis ao dia a dia, com resultados concretos e sustentáveis"
  },
  {
    problem: "Separação entre ciência e espiritualidade",
    solution: "Integração de insights científicos e sabedoria espiritual tradicional"
  }
]

export function ProblemsSection() {
  return (
    <section className="py-16 bg-[#0a0a2e] relative overflow-hidden">
      <SpaceBackground />
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Está Te Impedindo?
          </h2>
          <p className="text-xl text-muted-foreground">
            Desafios comuns da espiritualidade atual e como o TEAC os resolve
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                <div className="grid md:grid-cols-2">
                  <div className="bg-red-900/20 p-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-2 mb-2">
                        <HelpCircle className="h-5 w-5 text-red-500" />
                        <CardTitle className="text-base">O Problema</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      <p>{item.problem}</p>
                    </CardContent>
                  </div>
                  <div className="bg-green-900/20 p-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <CardTitle className="text-base">A Solução TEAC</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      <p>{item.solution}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
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