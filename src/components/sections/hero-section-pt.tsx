"use client";

import Image from "next/image"

export function HeroSectionPT() {
  return (
    <>
      {/* Faixa azul no topo */}
      <div className="w-full bg-blue-600 text-white py-4 md:py-5 text-center font-medium text-sm md:text-base">
        SUA ASCENSÃO E SUA HIERARQUIA ESPIRITUAL ESPERARAM MUITO POR ESTE MOMENTO. SEJA BEM-VINDO(A).
      </div>
      
      <section className="relative py-6 md:py-10 overflow-hidden bg-[#0a0a2e]">
        <div className="container relative z-10">
          {/* Logo centralizada no topo */}
          <div className="flex justify-center mb-3">
            <div className="w-28 h-28 relative">
              <Image
                src="/images/logo teac.png"
                alt="Logo TEAC"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Layout de duas colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start items-center">
            {/* Coluna da esquerda - Textos */}
            <div className="flex flex-col gap-6 text-left">
              {/* Título Principal */}
              <div className="flex flex-col gap-1 md:gap-2">
                <h1 className="text-[28px] md:text-4xl font-bold leading-tight text-white inline-flex flex-wrap">
                <span className="inline whitespace-nowrap mr-1">Você Sente Que</span> <span className="text-blue-400 inline whitespace-nowrap" style={{ color: '#3b82f6' }}>Falta Algo</span>
                </h1>
                <h2 className="text-[28px] md:text-4xl font-bold leading-tight text-white">
                na Sua Conexão Espiritual?
                </h2>
                <h2 className="text-[28px] md:text-4xl font-bold leading-tight text-white inline-flex flex-wrap">
                <span className="inline whitespace-nowrap mr-1">Talvez Seja Porque Ainda</span> <span className="text-blue-400 inline whitespace-nowrap" style={{ color: '#3b82f6' }}>Não Te Contaram Tudo…</span>
                </h2>
              </div>

              {/* Subtítulo */}
              <p className="text-lg text-white">
              Você medita, faz limpezas energéticas, tenta se conectar… mas ainda sente que algo trava sua evolução? O problema não está em você. Está no sistema que te ensinaram a seguir. E se eu te mostrasse um caminho sem filtros, sem intermediários e sem manipulação?
              </p>

              {/* Vídeo - Mostrado após o subtítulo apenas no mobile */}
              <div className="w-full bg-foreground/5 rounded-2xl overflow-hidden md:hidden order-1">
                <div className="aspect-[16/9] w-full relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/zaEQZJRgKME"
                    title="TEAC - Apresentação do Método"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Botão CTA */}
              <div className="mt-6 order-2 md:order-none">
                <a 
                  href="https://pay.hotmart.com/F99777157X?bid=1749058823036"
                  className="inline-block bg-[#96B853] text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                >
                  QUERO ENTRAR PARA O TEAC
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

              {/* Texto de Garantia */}
              <p className="text-sm text-muted-foreground/60 order-3 md:order-none">
                Compra 100% segura! Receba seu acesso imediatamente após confirmação do pagamento.
              </p>

              {/* Métodos de Pagamento */}
              <div className="flex gap-4 items-center opacity-50 order-4 md:order-none">
                {/* Logos dos métodos de pagamento */}
              </div>
            </div>

            {/* Coluna da direita - Vídeo apenas para desktop */}
            <div className="w-full bg-foreground/5 rounded-2xl overflow-hidden hidden md:block">
              <div className="aspect-[16/9] w-full relative">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/zaEQZJRgKME"
                  title="TEAC - Apresentação do Método"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* Logo Academia HQ no fundo */}
        <div className="absolute -left-[300px] top-1/2 transform -translate-y-1/2 z-0 hidden md:block">
          <div className="relative w-[1000px] h-[1000px] opacity-15 blur-sm">
            <Image
              src="/images/logoacademiahq.png"
              alt="Logo Academia HQ"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Linha divisória */}
      <div className="w-full h-px bg-slate-700/30 relative z-10"></div>

      {/* Espaçamento adicional para mobile */}
      <div className="py-6 md:py-3 bg-[#0a0a2e]"></div>

      {/* Slot retangular com imagens e texto */}
      <div className="container relative z-20 mt-8 md:-mt-5 mb-8 md:mb-12 bg-[#0a0a2e]">
        {/* Efeito de brilho azul */}
        <div className="absolute -inset-5 bg-blue-400 opacity-20 blur-2xl rounded-3xl z-0"></div>
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Imagem apenas para mobile no topo */}
          <div className="w-full h-48 md:hidden relative">
            <Image
              src="/images/img1.jpg"
              alt="Subidos - Evento"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            {/* Lado esquerdo - Imagens (apenas no desktop) */}
            <div className="hidden md:flex flex-col h-full">
              <div className="w-full h-1/2 relative">
                <Image
                  src="/images/img1.jpg"
                  alt="Subidos - Evento"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full h-1/2 relative">
                <Image
                  src="/images/img2.jpg"
                  alt="Subidos - Profissionais"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Lado direito - Textos */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Esse jogo já está sendo manipulado. <span className="text-blue-500">Cabe a você se manter fora da matrix.</span>
              </h2>
              <p className="text-slate-700 text-lg mb-4">
              Despertos não aceitam verdades prontas, não seguem gurus e não caem nas armadilhas do astral. Eles acessam a verdade por si mesmos, sem intermediários.
              </p>
              <p className="text-slate-700 text-lg mb-4">
                Parece ousado?
              </p>
              <p className="text-slate-700 text-lg">
                Depois de anos de experiências, centenas de alunos e transformações reais, não é surpresa que, quando se fala em autonomia espiritual, o TEAC seja o caminho. E agora, você está prestes a sair da programação e tomar o controle da sua conexão.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Linha divisória fina e cinza - Centralizada entre seções */}
      <div className="w-full h-px bg-gray-400/30 relative z-10 my-12"></div>
    </>
  )
} 