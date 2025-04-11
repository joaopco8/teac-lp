"use client";

import { motion } from "framer-motion"
import { X } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="py-16 bg-[#0a0a2e]">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
          {/* Coluna 1: Espiritualidade Popular */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-200 rounded-2xl overflow-hidden p-12 flex flex-col h-full"
          >
            <h3 className="text-4xl font-bold mb-10 text-gray-800">
              Espiritualidade<br />popular
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              A espiritualidade popular, enraizada no
              fanatismo e na adoração cega, limita a
              autonomia e promove a manipulação. Ao
              depositar fé em seres indiferentes, os
              indivíduos perdem o poder de pensamento
              crítico, perpetuando um ciclo de dependência
              e resignação.
            </p>
          </motion.div>
          
          {/* Separador Visual */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-stone-600 rounded-lg p-8">
              <X className="w-12 h-12 text-blue-500" />
            </div>
          </div>
          
          {/* Coluna 2: Método TEAC */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-200 rounded-2xl overflow-hidden p-12 flex flex-col h-full"
          >
            <h3 className="text-4xl font-bold mb-10 text-gray-800">
              Método<br />TEAC
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              O método TEAC oferece uma abordagem
              poderosa para se conectar com hierarquias
              espirituais pessoais, possibilitando a conquista
              de uma vida física em harmonia. Ao seguir
              esse método, é possível se libertar de
              influências negativas, como seres indesejados,
              contratos espirituais desfavoráveis e energias
              prejudiciais, alcançando um estado de
              harmonia e conexão duradouros.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 