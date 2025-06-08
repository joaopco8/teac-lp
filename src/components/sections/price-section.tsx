"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PriceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Veja tudo que você recebe para <span className="text-blue-500">se conectar com a sua família cósmica</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Coluna 1: O que você recebe */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500 rounded-md p-1 w-8 h-8 flex items-center justify-center text-white font-bold">1</div>
              <h3 className="font-bold text-lg text-slate-900">Para você estudar (e aplicar).</h3>
            </div>

            <ul className="space-y-3 ml-4">
              <li className="text-slate-900">Módulo 1: Comece por Aqui</li>
              <li className="text-slate-900">Módulo 2: Iniciando sua Jornada TEAC</li>
              <li className="text-slate-900">Módulo 3: Por que Estamos Perdidos e Sem Memória</li>
              <li className="text-slate-900">Módulo 4: Guardiões, Guardiãs e seus Tronos</li>
              <li className="text-slate-900">Módulo 5: Projetos Estelares Ascensionais</li>
              <li className="text-slate-900">Módulo 6: Método TEAC e as Ordens Cósmicas</li>
              <li className="text-slate-900">Módulo 7: Método TEAC</li>
              <li className="text-slate-900">Módulo 8: Aplicação do TEAC</li>
            </ul>
          </div>

          {/* Coluna 2: Preço e Botão */}
          <div className="flex flex-col justify-between bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-500 rounded-md p-1 w-8 h-8 flex items-center justify-center text-white font-bold">2</div>
                <h3 className="font-bold text-lg text-slate-900">Encontros Ao Vivo</h3>
              </div>

              <div className="bg-blue-50 rounded-md border border-blue-200 p-4 ml-4 mb-8">
                <p className="font-bold text-slate-900">Tire dúvidas e sugira conteúdos</p>
                <p className="text-slate-900 text-sm mt-1">Faça parte do encontro ao vivo e interaja, ou assista as lives gravadas.</p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-500 rounded-md p-1 w-8 h-8 flex items-center justify-center text-white font-bold">3</div>
                <h3 className="font-bold text-lg text-slate-900">Bônus Exclusivos.</h3>
              </div>

              <div className="ml-4 space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-md p-3">
                  <p className="font-bold text-slate-900">Grupo exclusivo no Telegram</p>
                  <p className="text-slate-900 text-sm">Entre no grupo privado dos alunos TEAC e acesse conteúdos exclusivos</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-3">
                  <p className="font-bold text-slate-900">Descontos Exclusivos</p>
                  <p className="text-slate-900 text-sm">Em todos os outros produtos da Academia HQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco de Preço */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4">
            <p className="text-xl text-blue-500 font-bold">O mais impressionante?</p>
            <p className="text-2xl font-bold text-slate-900">Não vai custar R$1997,00, mas apenas...</p>
          </div>

          <div className="mb-8">
            <p className="text-center mb-2">
              <span className="line-through text-slate-900 opacity-60">R$1997,00</span>
              <span className="bg-green-500 text-white text-sm rounded-full px-2 py-1 ml-2">R$1200 OFF</span>
            </p>

            <div className="flex items-center justify-center gap-2">
              <p className="text-5xl font-bold text-slate-900 !text-slate-900" style={{ color: '#1e293b' }}>
                12x <span className="text-[80px] leading-none !text-slate-900" style={{ color: '#1e293b' }}>80</span>,<span className="text-3xl !text-slate-900" style={{ color: '#1e293b' }}>98</span>
              </p>
            </div>

            <p className="text-slate-900 !text-slate-900 mt-2" style={{ color: '#1e293b' }}>ou R$797 à vista.</p>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://pay.hub.la/NOOiTYhnQcdZbytR5I0a?_path=%2Fr%2FEun1zKIRP22RP2ac4bRA" 
              className="inline-block bg-[#96B853] hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              QUERO ENTRAR NO TEAC
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <p className="text-slate-900 mt-4 text-sm">
            Compra 100% segura! Receba seu acesso imediatamente após confirmação do pagamento.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <img src="/images/pag-cion.png" alt="Métodos de Pagamento" className="h-8 opacity-20" />
          </div>

          
        </div>
      </div>
    </section>
  );
} 