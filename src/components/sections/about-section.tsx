"use client";

import Image from "next/image"
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <>
      <section className="py-16 bg-[#f5f5f5] relative pb-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900" style={{ color: '#0f172a' }}>
              O QUE É A <span className="text-blue-500" style={{ color: '#3b82f6' }}><strong>METODOLOGIA TEAC?</strong></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Imagem com efeito de brilho */}
            <div className="rounded-xl overflow-hidden md:sticky md:top-24 md:self-start relative">
              {/* Efeito de brilho azul */}
              <div className="absolute -inset-2 bg-blue-500 opacity-40 blur-xl rounded-xl z-0"></div>
              <div className="relative z-10">
                <Image
                  src="/images/ttt.jpg"
                  alt="Metodologia TEAC"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover md:max-h-[450px]"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
            
            <div className="space-y-8 text-slate-800" style={{ color: '#1e293b' }}>
             

              <p className="text-xl" style={{ color: '#1e293b' }}>
                O <span className="text-blue-500 font-bold" style={{ color: '#3b82f6' }}>TEAC</span> tem tudo, muito além de vídeos, ativações e materiais. Você encontrará tudo o que precisa para se conectar sem intermediários.
              </p>

              <div className="space-y-6 pl-6 border-l-2 border-blue-500">
                {/* T - Tecnologia */}
                <div>
                  <h3 className="text-2xl mb-2 text-slate-900" style={{ color: '#0f172a' }}>
                    <span className="text-blue-500 font-bold" style={{ color: '#3b82f6' }}>T</span><strong>ecnologia</strong>
                  </h3>
                  <p className="text-lg text-slate-700" style={{ color: '#334155' }}>
                    Toda a conexão multidimensional é pautada em tecnologia.
                  </p>
                </div>

                {/* E - Espiritual */}
                <div>
                  <h3 className="text-2xl mb-2 text-slate-900" style={{ color: '#0f172a' }}>
                    <span className="text-blue-500 font-bold" style={{ color: '#3b82f6' }}>E</span><strong>spiritual</strong>
                  </h3>
                  <p className="text-lg text-slate-700" style={{ color: '#334155' }}>
                    Acessar as informações além do que a realidade física oferece.
                  </p>
                </div>

                {/* A - Ascensional */}
                <div>
                  <h3 className="text-2xl mb-2 text-slate-900" style={{ color: '#0f172a' }}>
                    <span className="text-blue-500 font-bold" style={{ color: '#3b82f6' }}>A</span><strong>scensional</strong>
                  </h3>
                  <p className="text-lg text-slate-700" style={{ color: '#334155' }}>
                    Dominar informações que lhe farão romper o ciclo encarnacional terrestre.
                  </p>
                </div>

                {/* C - Canopeana */}
                <div>
                  <h3 className="text-2xl mb-2 text-slate-900" style={{ color: '#0f172a' }}>
                    <span className="text-blue-500 font-bold" style={{ color: '#3b82f6' }}>C</span><strong>anopeana</strong>
                  </h3>
                  <p className="text-lg text-slate-700" style={{ color: '#334155' }}>
                    Acesse a egrégora sustentadora deste trabalho, os Canopeanos.
                  </p>
                </div>
              </div>

              <p className="text-lg italic text-slate-500" style={{ color: '#64748b' }}>
                TEAC, a espiritualidade tecnológica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção "SERÁ QUE ISSO É PRA MIM?" */}
      <section className="py-16 bg-[#0a0a2e]">
        <div className="container -mt-24 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
            {/* Título e subtítulo */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                "SERÁ QUE O TEAC É <span className="text-blue-500">PARA MIM?</span>"
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Sem sombra de dúvidas, a Metodologia TEAC é pra você que...
              </p>
            </div>

            {/* Cards com os tipos de perfil */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-2 rounded-lg mr-4">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-medium text-slate-900">
                    Quer um caminho espiritual sem intermediários
                  </h3>
                </div>
                <p className="text-slate-600">
                  para ter autonomia e acessar o saber multidimensional por si mesmo(a).
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-2 rounded-lg mr-4">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-medium text-slate-900">
                    Quer conhecer a verdade completa
                  </h3>
                </div>
                <p className="text-slate-600">
                  sobre o que realmente acontece nesse plano chamado de espiritualidade, sem filtros e sem manipulação.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-2 rounded-lg mr-4">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-medium text-slate-900">
                    Quer evoluir realmente
                  </h3>
                </div>
                <p className="text-slate-600">
                  e não apenas ficar dando voltas no ciclo de encarnações sem nenhum progresso real.
                </p>
              </div>
            </div>

            {/* Exemplos de caso */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-slate-200 pt-12">
              {/* Exemplo 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-lg overflow-hidden mb-4">
                  <Image 
                    src="/images/img1.jpg" 
                    alt="Pessoa confusa"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">
                  "Eu nem sei criar uma conexão espiritual, funciona pra mim?"
                </h4>
                <p className="text-slate-600">
                  Só se você quiser começar do jeito certo e fazer suas conexões de forma segura.
                </p>
              </div>

              {/* Exemplo 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-lg overflow-hidden mb-4">
                  <Image 
                    src="/images/img2.jpg" 
                    alt="Pessoa experiente"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">
                  "E pra mim, que já me conecto há anos?"
                </h4>
                <p className="text-slate-600">
                  Só se você quiser elevar sua conexão mais do que nunca.
                </p>
              </div>
            </div>

            {/* Botão CTA */}
            <div className="mt-12 flex justify-center">
              <a 
                href="https://pay.hub.la/NOOiTYhnQcdZbytR5I0a?_path=%2Fr%2FEun1zKIRP22RP2ac4bRA" 
                className="bg-[#96B853] text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
              >
                É PRA MIM! TÔ DENTRO.
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa azul com título */}
      <section className="py-8 bg-blue-500 w-full">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
            O QUE VOCÊ RECEBE ENTRANDO NO TEAC?
          </h2>
        </div>
      </section>

      {/* Seção de módulos do curso */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              AGORA CONFIRA TUDO QUE VOCÊ RECEBERÁ <span className="text-blue-500">DENTRO DO TEAC.</span>
            </h2>
            <p className="text-slate-600 mt-2">
              Você terá acesso imediato a nossa plataforma com todos os módulos e conteúdos.
            </p>
          </div>

          {/* Módulos - Primeira linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Módulo 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="bg-orange-500 p-4 text-white">
                <h3 className="font-bold text-center">
                  MÓDULO 1<br />
                  <span className="text-2xl">COMECE POR AQUI</span>
                </h3>
              </div>
              <div className="p-4">
                <Image 
                  src="/images/mod1.jpg" 
                  alt="Comece por Aqui"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <h4 className="font-bold text-slate-900 mb-2">Fundamentos essenciais</h4>
                <p className="text-sm text-slate-600">
                  Primeiros passos para sua jornada espiritual multidimensional, com os conceitos fundamentais para começar com segurança.
                </p>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="bg-amber-800 p-4 text-white">
                <h3 className="font-bold text-center">
                  MÓDULO 2<br />
                  <span className="text-2xl">INICIANDO SUA JORNADA TEAC</span>
                </h3>
              </div>
              <div className="p-4">
                <Image 
                  src="/images/mod2.jpg" 
                  alt="Iniciando sua Jornada TEAC"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <h4 className="font-bold text-slate-900 mb-2">Primeiras conexões espirituais</h4>
                <p className="text-sm text-slate-600">
                  Técnicas iniciais para estabelecer suas primeiras conexões multidimensionais com segurança e eficácia.
                </p>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="bg-cyan-600 p-4 text-white">
                <h3 className="font-bold text-center">
                  MÓDULO 3<br />
                  <span className="text-2xl">POR QUE ESTAMOS PERDIDOS E SEM MEMÓRIA</span>
                </h3>
              </div>
              <div className="p-4">
                <Image 
                  src="/images/mod3.jpg" 
                  alt="Por que estamos perdidos"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <h4 className="font-bold text-slate-900 mb-2">A verdade sobre a Terra</h4>
                <p className="text-sm text-slate-600">
                  Revelações surpreendentes sobre por que perdemos nossas memórias cósmicas e como recuperar nosso verdadeiro propósito.
                </p>
              </div>
            </div>

            {/* Módulo 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="bg-blue-500 p-4 text-white">
                <h3 className="font-bold text-center">
                  MÓDULO 4<br />
                  <span className="text-2xl">GUARDIÕES, GUARDIÃS E SEUS TRONOS</span>
                </h3>
              </div>
              <div className="p-4">
                <Image 
                  src="/images/mod4.jpg" 
                  alt="Guardiões, Guardiãs e seus Tronos"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <h4 className="font-bold text-slate-900 mb-2">Hierarquia espiritual cósmica</h4>
                <p className="text-sm text-slate-600">
                  Conheça as entidades superiores que regem o cosmos, suas funções e como estabelecer contato seguro com estas consciências.
                </p>
              </div>
            </div>
          </div>

          {/* Módulos - Segunda linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Módulo 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="bg-red-600 p-4 text-white">
                <h3 className="font-bold text-center">
                  MÓDULO 5<br />
                  <span className="text-2xl">PROJETOS ESTELARES ASCENSIONAIS</span>
                </h3>
              </div>
              <div className="p-4">
                <Image 
                  src="/images/mod5.jpg" 
                  alt="Projetos Estelares Ascensionais"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <h4 className="font-bold text-slate-900 mb-2">Missões cósmicas</h4>
                <p className="text-sm text-slate-600">
                  Descubra os grandes projetos cósmicos em andamento e como você pode participar ativamente de sua própria ascensão estelar.
                </p>
              </div>
            </div>

            {/* Módulo 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="bg-green-600 p-4 text-white">
                <h3 className="font-bold text-center">
                  MÓDULO 6<br />
                  <span className="text-2xl">MÉTODO TEAC E AS ORDENS CÓSMICAS</span>
                </h3>
              </div>
              <div className="p-4">
                <Image 
                  src="/images/mod6.jpg" 
                  alt="Método TEAC e as Ordens Cósmicas"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <h4 className="font-bold text-slate-900 mb-2">Conexões com ordens superiores</h4>
                <p className="text-sm text-slate-600">
                  Como o método TEAC se conecta às estruturas cósmicas superiores e como utilizar essas conexões para sua evolução espiritual.
                </p>
              </div>
            </div>

            {/* Módulo 7 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="bg-purple-600 p-4 text-white">
                <h3 className="font-bold text-center">
                  MÓDULO 7<br />
                  <span className="text-2xl">MÉTODO TEAC</span>
                </h3>
              </div>
              <div className="p-4">
                <Image 
                  src="/images/mod7.jpg" 
                  alt="Método TEAC"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <h4 className="font-bold text-slate-900 mb-2">Dominando a metodologia</h4>
                <p className="text-sm text-slate-600">
                  Aprofundamento completo nas técnicas TEAC, expandindo suas capacidades de conexão multidimensional e acesso a consciências superiores.
                </p>
              </div>
            </div>

            {/* Módulo 8 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="bg-indigo-600 p-4 text-white">
                <h3 className="font-bold text-center">
                  MÓDULO 8<br />
                  <span className="text-2xl">APLICAÇÃO DO TEAC</span>
                </h3>
              </div>
              <div className="p-4">
                <Image 
                  src="/images/mod8.jpg" 
                  alt="Aplicação do TEAC"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <h4 className="font-bold text-slate-900 mb-2">Prática avançada</h4>
                <p className="text-sm text-slate-600">
                  Aplicações práticas do método TEAC em seu dia a dia, consolidando seu desenvolvimento espiritual e preparando para níveis mais elevados.
                </p>
              </div>
            </div>
          </div>

          {/* Seção de gravação de lives */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-16">
            <div>
              <Image 
                src="/images/encontros.jpg" 
                alt="Encontros ao vivo semanais"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg shadow-md"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Gravação das lives privadas
              </h3>
              <p className="text-slate-600 mb-4">
                Todas as lives que ocorreram no TEAC estão gravadas e disponibilizadas para você.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Vantagens Exclusivas - Academia HQ */}
      <section className="py-12 bg-[#0a0a2e] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              VANTAGENS EXCLUSIVAS PARA <span className="text-blue-400" style={{ color: '#3b82f6' }}>ALUNOS TEAC</span>
            </h2>
            
            <div className="bg-slate-800/50 rounded-xl p-8 shadow-lg border border-slate-700/50">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.94 1.94 0 0 0-.2 3.31l12.35 6.61c.5.26 1.1.26 1.6 0l3.65-1.9a1.94 1.94 0 0 0 .2-3.31z"/>
                    <path d="M3.09 8.84v10.25a1.88 1.88 0 0 0 2.16 1.87l5.58-1.24a1.86 1.86 0 0 0 1.47-1.83V10.4"/>
                    <path d="M20.91 8.84v10.25a1.88 1.88 0 0 1-2.16 1.87l-5.58-1.24a1.86 1.86 0 0 1-1.47-1.83V10.4"/>
                  </svg>
                </div>
                <div className="text-left md:flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Desconto especial na Academia HQ</h3>
                  <p className="text-slate-300 text-lg">
                    Ao se tornar um aluno TEAC, você automaticamente ganha acesso a <span className="text-blue-400 font-bold" style={{ color: '#3b82f6' }}>descontos exclusivos</span> na maioria dos produtos e cursos da Academia HQ.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-xl mb-2 text-blue-300">Cursos Complementares</h4>
                  <p className="text-slate-300">
                    Acesso a cursos complementares com valores reduzidos para expandir sua compreensão espiritual.
                  </p>
                </div>
                
                <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-xl mb-2 text-blue-300">Eventos Exclusivos</h4>
                  <p className="text-slate-300">
                    Participação prioritária em eventos presenciais e online com condições especiais.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-6">
                  Todo o ecossistema da Academia HQ foi criado para te apoiar em sua jornada espiritual. Como aluno TEAC, você faz parte de nossa comunidade mais valiosa.
                </p>
                
                <a 
                  href="https://pay.hub.la/NOOiTYhnQcdZbytR5I0a?_path=%2Fr%2FEun1zKIRP22RP2ac4bRA" 
                  className="inline-block bg-[#96B853] hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  QUERO ENTRAR PARA O TEAC AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha divisória */}
        <div className="w-full max-w-4xl mx-auto mt-16 mb-8">
          <div className="h-px bg-blue-500/30 w-full rounded-full"></div>
        </div>
      </section>
    </>
  );
} 