"use client";

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos todos os cartões de crédito, débito, boleto bancário, e Pix. Você pode parcelar em até 12x no cartão de crédito."
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo do TEAC após a compra?",
    answer: "O acesso ao TEAC é 100% vitalício. Uma vez que você adquire o programa, tem acesso permanente a todo o conteúdo, incluindo atualizações futuras, sem nenhuma mensalidade ou pagamento adicional."
  },
  {
    question: "Preciso ter experiência com práticas espirituais para começar?",
    answer: "Não. O método TEAC foi desenvolvido para ser acessível a pessoas de todos os níveis de experiência, desde iniciantes completos até praticantes avançados. O conteúdo é adaptável ao seu nível atual."
  },
  {
    question: "O TEAC está vinculado a alguma religião específica?",
    answer: "Não. O TEAC é uma metodologia que transcende fronteiras religiosas, respeitando todas as tradições enquanto oferece princípios e práticas que podem ser integrados à sua própria visão espiritual ou religiosa."
  },
  {
    question: "Quanto tempo leva para ver resultados com o método TEAC?",
    answer: "Muitas pessoas relatam mudanças perceptíveis nas primeiras semanas de prática consistente. No entanto, como qualquer prática transformadora, os resultados mais profundos se desenvolvem ao longo do tempo com dedicação regular."
  },
  {
    question: "Como o TEAC difere de outras abordagens espirituais?",
    answer: "O TEAC se distingue pela sua integração sistemática de sabedoria tradicional e conhecimento contemporâneo, foco em resultados verificáveis, abordagem não-dogmática e adaptabilidade às necessidades individuais."
  },
  {
    question: "É possível praticar o TEAC junto com minhas práticas espirituais atuais?",
    answer: "Sim. O TEAC foi projetado para complementar e enriquecer práticas espirituais existentes. Muitos praticantes relatam que o método aprofunda sua compreensão e experiência em sua própria tradição."
  },
]

export function FaqSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#013558] to-[#012741]">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ficou com alguma dúvida?
          </h2>
          <p className="text-xl text-white">
            Confira as respostas para as perguntas frequentes ou entre em contato conosco:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Coluna da esquerda - Contato */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-[#001c33]/80 rounded-xl p-6 border border-blue-800/50 backdrop-blur-sm">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg uppercase text-white">
                    ATENDIMENTO POR<br />
                    <span className="text-green-500" style={{ color: '#22c55e' }}>WHATSAPP</span>
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-3">Clique no número:</p>
              <a 
                href="https://wa.me/5514998525760" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-xl font-semibold text-center py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors border border-slate-700/70 text-white"
              >
                (14) 99852-5760
              </a>
            </div>
            
            <div className="text-center pt-4">
              <a 
                href="https://pay.hub.la/NOOiTYhnQcdZbytR5I0a?_path=%2Fr%2FEun1zKIRP22RP2ac4bRA" 
                className="inline-block w-full bg-[#96B853] hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                JÁ QUERO GARANTIR MINHA VAGA
              </a>
            </div>
          </div>
          
          {/* Coluna da direita - Perguntas */}
          <div className="md:col-span-2">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-blue-800/30 py-4"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-medium text-white">{faq.question}</span>
                    <span className="text-blue-400">
                      <Plus className="h-5 w-5 transform transition-transform group-open:rotate-45" />
                    </span>
                  </summary>
                  <div className="mt-3 text-slate-300">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
        
        {/* Texto de copyright */}
        <div className="text-center mt-16 text-sm text-slate-400 pt-6 border-t border-blue-800/20">
          © {new Date().getFullYear()} TEAC. Todos os direitos reservados.
        </div>
      </div>
    </section>
  )
} 