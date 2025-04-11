"use client";

import { useEffect, useRef } from "react";

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar o tamanho do canvas para preencher a seção
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Criar estrelas
    const stars: { x: number; y: number; radius: number; color: string; speed: number }[] = [];
    
    // Mais estrelas para maior densidade
    for (let i = 0; i < 250; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5,  // Estrelas maiores
        color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,  // Maior brilho
        speed: Math.random() * 0.1 + 0.02  // Movimento mais perceptível
      });
    }

    // Criar nebulosas (manchas coloridas)
    const nebulas: { x: number; y: number; radius: number; color: string }[] = [];
    
    // Adicionar algumas nebulosas coloridas no fundo
    const colors = ['rgba(70, 100, 255, 0.1)', 'rgba(100, 70, 255, 0.15)', 'rgba(255, 100, 100, 0.1)'];
    for (let i = 0; i < 5; i++) {
      nebulas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 200,  // Grandes manchas coloridas
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Animação
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradiente de fundo
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(5, 5, 30, 0.85)');
      gradient.addColorStop(1, 'rgba(0, 0, 20, 0.85)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar nebulosas
      nebulas.forEach(nebula => {
        const grd = ctx.createRadialGradient(
          nebula.x, nebula.y, 0, 
          nebula.x, nebula.y, nebula.radius
        );
        grd.addColorStop(0, nebula.color);
        grd.addColorStop(1, 'rgba(0,0,30,0)');
        
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Desenhar estrelas
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Adicionar brilho
        const glow = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 2.5
        );
        glow.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Mover estrelas
        star.x -= star.speed;
        
        // Reposicionar estrelas que saem da tela
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
    />
  );
} 