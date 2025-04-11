"use client";

import { motion } from "framer-motion"
import { X } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="py-16 bg-[#0a0a2e]">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 max-w-6xl mx-auto relative">
          {/* Coluna 1: Espiritualidade Popular */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-200 rounded-2xl overflow-hidden p-12 flex flex-col h-full relative mb-8 md:mb-0"
          >
            <h3 className="text-4xl font-bold mb-10 text-gray-800 text-center md:text-left" style={{ color: '#1f2937' }}>
              Espiritualidade<br />popular
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ color: '#4b5563' }}>
              A espiritualidade popular, enraizada no
              fanatismo e na adoração cega, limita a
              autonomia e promove a manipulação. Ao
              depositar fé em seres indiferentes, os
              indivíduos perdem o poder de pensamento
              crítico, perpetuando um ciclo de dependência
              e resignação.
            </p>
          </motion.div>
          
          {/* Separador Visual para Mobile - posicionado entre os retângulos */}
          <div className="md:hidden block absolute left-1/2 -translate-x-1/2 z-20" 
            style={{ 
              top: 'calc(50%)', 
              transform: 'translateY(-50%) translateX(-50%)',
              marginTop: '4px'
            }}>
            <div className="bg-[#57534e] rounded-lg p-3 shadow-lg" style={{ position: 'relative' }}>
              <X className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          
          {/* Separador Visual para Desktop - posicionado no meio dos retângulos */}
          <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-20" 
            style={{ 
              left: '50%', 
              marginLeft: '-16px'
            }}>
            <div className="bg-[#57534e] rounded-lg p-2 shadow-lg">
              <X className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          {/* Coluna 2: Método TEAC */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-200 rounded-2xl overflow-hidden p-12 flex flex-col h-full relative mt-8 md:mt-0"
          >
            <h3 className="text-4xl font-bold mb-10 text-gray-800 text-center md:text-left" style={{ color: '#1f2937' }}>
              Método<br />TEAC
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ color: '#4b5563' }}>
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