'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ModalCountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Sempre exibe o pop-up para testes
    setIsOpen(true);
  }, []);

  const handleCountrySelection = (country: 'BR' | 'PT') => {
    localStorage.setItem('countrySelected', country);
    setIsOpen(false);
    
    if (country === 'PT') {
      // Redireciona para a versão portuguesa
      router.push('/pt');
    } else if (country === 'BR') {
      router.push('/');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Escolha seu país de origem
        </h2>
        <div className="space-y-4">
          <button
            onClick={() => handleCountrySelection('BR')}
            className="w-full py-4 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold hover:scale-105"
          >
            <span className="text-2xl">🇧🇷</span>
            Brasil
          </button>
          <button
            onClick={() => handleCountrySelection('PT')}
            className="w-full py-4 px-6 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold hover:scale-105"
          >
            <span className="text-2xl">🇵🇹</span>
            Portugal
          </button>
        </div>
        <p className="text-center text-gray-600 mt-6 text-sm">
          Esta escolha ajudará a personalizar sua experiência
        </p>
      </div>
    </div>
  );
} 