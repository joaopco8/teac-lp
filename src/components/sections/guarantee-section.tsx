"use client";

import Image from "next/image";

export function GuaranteeSection() {
  return (
    <section className="py-16 bg-[#0a0a2e] text-white">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-[#0a0a2e]/70 rounded-xl p-8 md:p-12 shadow-lg border border-slate-700/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Selo de garantia */}
            <div className="w-72 h-72 md:w-88 md:h-88 shrink-0 relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-full h-full z-10">
                <Image 
                  src="/images/selo.svg" 
                  alt="Garantia de 7 dias" 
                  width={400} 
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Conteúdo textual */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                Risco zero com a <span className="text-blue-400">garantia de 7 dias</span>.
              </h2>
              
              <p className="text-lg mb-4 text-slate-300">
                Assim que entrar na Comunidade TEAC, você terá aos conteúdos do Portal e ao grupo exclusivo.
              </p>
              
              <p className="text-lg mb-4 text-slate-300">
                Durante 7 dias a partir da compra, você poderá consumir todo conteúdo que quiser e interagir com a comunidade.
              </p>
              
              <p className="text-lg mb-4 font-semibold">
                Se dentro desse período você se arrepender da compra, basta pedir o reembolso que devolveremos cada centavo, sem ressentimentos.
              </p>
              
              <div className="mt-8">
                <a 
                  href="https://pay.hub.la/NOOiTYhnQcdZbytR5I0a?_path=%2Fr%2FEun1zKIRP22RP2ac4bRA"
                  className="inline-block bg-[#96B853] hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                >
                  QUERO GARANTIR MINHA VAGA AGORA!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 