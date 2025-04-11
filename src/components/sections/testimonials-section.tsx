"use client";

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

// Array com os caminhos das imagens de depoimentos
const testimonialImages = [
  "/testimonials/f1.jpg",
  "/testimonials/f2.jpg",
  "/testimonials/f3.jpg",
  "/testimonials/f4.jpg",
  "/testimonials/f5.jpg",
  "/testimonials/f6.jpg"
];

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesPerSlide = 3;
  const totalSlides = Math.ceil(testimonialImages.length / imagesPerSlide);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <>
      <section className="py-16 bg-[#0a0a2e]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ninguém que conseguiu a conexão espiritual é exceção. <span className="text-blue-400">E você também não será.</span>
            </h2>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            {/* Carrossel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Dividir as imagens em grupos de 3 */}
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {testimonialImages
                      .slice(slideIndex * imagesPerSlide, slideIndex * imagesPerSlide + imagesPerSlide)
                      .map((imagePath, index) => (
                        <div 
                          key={index} 
                          className="w-full rounded-xl overflow-hidden shadow-lg bg-white h-fit"
                        >
                          <Image
                            src={imagePath}
                            alt={`Depoimento ${slideIndex * imagesPerSlide + index + 1}`}
                            width={500}
                            height={670}
                            className="w-full h-auto object-contain block"
                            style={{ display: 'block' }}
                          />
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Botões de navegação */}
            <button 
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
            
            {/* Indicadores de slides */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ver slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Linha divisória */}
      <div className="w-full h-px bg-slate-700/30 max-w-7xl mx-auto my-4"></div>
    </>
  );
} 