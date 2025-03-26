import React, { useState } from 'react'

function BodyPagina() {
  // Estado para controlar la imagen activa
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/ganado.jpeg',
    '/ganado2.jpeg',
    '/ganado.jpeg',
    '/ganado2.jpeg',
    '/ganado.jpeg'
  ];

  // Función para manejar el clic en el botón de siguiente
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para manejar el clic en el botón de anterior
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='flex flex-col items-center justify-center bg-white mt-36 gap-20 text-black'>
        
        <p id='inicio' className='pt-10'></p>

        
        <h2 className='font-semibold text-3xl md:text-4xl lg:text-5xl text-center pt-10 leading-tight'>
          Gestiona tu ganado con precisión. Donde sea, cuando sea.
        </h2>

        <div id="animation-carousel" className="relative w-2/5 pr-16 pl-16" data-carousel="static">
    
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Mostrar imagen activa */}
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`duration-200 ease-linear ${index === currentIndex ? '' : 'hidden'}`}
                    data-carousel-item={index === currentIndex ? 'active' : ''}
                  >
                    <img
                      src={image}
                      className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="..."
                    />
                  </div>
                ))}
            </div>
            
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={goToPrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={goToNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
        </div>

        <ul className="list-disc pl-6 pt-10 pb-40 space-y-4">
            <li className="text-xl md:text-2xl font-semibold leading-relaxed">
              Control total sobre el ganado desde cualquier lugar.
            </li>
            <li className="text-xl md:text-2xl font-semibold leading-relaxed">
              Ubicación precisa y en tiempo real.
            </li>
            <li className="text-xl md:text-2xl font-semibold leading-relaxed">
              Optimiza la productividad y la seguridad de tu rebaño.
            </li>
        </ul>
        
    </div>
  );
}

export default BodyPagina;
