"use client";

import Image from "next/image";

export function SergioSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem */}
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/sergio.jpg"
                alt="Sergio Oliveira"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">Sergio Oliveira</h3>
                <p className="text-blue-300">Fundador do método TEAC</p>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
              <p className="text-lg font-bold">+15 anos</p>
              <p className="text-sm">de experiência</p>
            </div>
          </div>
          
          {/* Coluna do Texto */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Quem é <span className="text-blue-500">Sergio Oliveira</span>?
            </h2>
            
            <p className="text-slate-700 text-lg">
              Sergio Oliveira é médium, professor e fundador do método TEAC (Tecnologia Espiritual Ascensional Canopeana), uma metodologia inovadora que conecta espiritualidade prática e expansão de consciência à tecnologia dos planos sutis.
            </p>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-slate-600 italic">
                "Minha missão é desmistificar o conhecimento espiritual e torná-lo acessível e aplicável para todos."
              </p>
            </div>
            
            <div className="space-y-4 text-slate-700">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Fundador da Academia HQ e criador da metodologia TEAC, que já transformou a vida de milhares de pessoas em todo mundo.</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Pesquisador dedicado à integração entre práticas multidimensionais, com foco em resultados práticos e verificáveis.</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Professor de mais de centenas de alunos em seu percurso de desenvolvimento espiritual e autoconhecimento.</p>
              </div>
            </div>
            
            <p className="text-slate-700 text-lg pt-4">
              Através do TEAC, Sergio tem ajudado pessoas de todas as origens a desenvolverem conexões espirituais genuínas e transformadoras, independentemente de suas crenças prévias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 