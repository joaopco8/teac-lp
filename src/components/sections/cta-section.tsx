"use client";

import { motion } from "framer-motion"
import { SectionCtaButton } from "@/components/ui/section-cta-button"

export function CtaSection() {
  return (
    <section className="py-16 bg-[#0a0a2e] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-white rounded-full"></div>
        <div className="absolute -bottom-40 right-60 w-80 h-80 bg-white rounded-full"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Transforme sua jornada espiritual hoje
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100">
              Dê o primeiro passo para uma espiritualidade mais autêntica, 
              prática e transformadora com o método TEAC.
            </p>
            
            <div className="pt-6">
              <SectionCtaButton className="justify-center" />
            </div>
            
            <p className="text-blue-100 pt-4">
              Junte-se a milhares de pessoas que já transformaram sua relação com a espiritualidade
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 