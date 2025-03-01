import React, { useEffect, useState } from 'react';
import { Star, Film, Award, Clapperboard } from 'lucide-react';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCredits, setShowCredits] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, duration: number}>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Rutas de imágenes de Unsplash (imágenes de ejemplo de ciencia ficción/espacio)
  const unsplashImages = [
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=1920&auto=format&fit=crop'
  ];
  
  // Rutas de imágenes locales - Ajustadas para coincidir con los nombres de archivo reales
  // Puedes añadir más imágenes simplemente agregando más rutas a este array
  const localImages = [
    '/images/Imagen 1.jpg', 
    '/images/Imagen 2.jpg', 
    '/images/imagen 3.jpg',
    '/images/imagen 4.jpg',
    '/images/Imagen 5.jpg',
    '/images/Imagen 6.jpg',
    '/images/Imagen 7.jpg',
    '/images/Imagen 8.jpg',
    // Añade aquí más imágenes siguiendo el mismo formato:
    // '/images/NombreDeImagen.jpg',
  ];
  
  // Verificar si las imágenes locales existen, si no usar las de Unsplash
  const [useLocalImages, setUseLocalImages] = useState(true); // Cambiado a true por defecto ya que sabemos que existen
  
  // Ruta del logo
  const logoPath = '/images/logo.jpg'; // Cambiado a .jpg según el archivo existente
  
  // Información del reparto y equipo
  const castAndCrew = [
    { name: "ISMAEL BRIASCO" },
    { name: "GUILLERMO ARIAS" },
    { name: "RODRIGO GARCÍA LEÓN" },
    { name: "ÁNGEL LOZANO DE LA ROSA" },
    { name: "BEGOÑA JIMÉNEZ ROMERA" },
    { name: "ARELI AGUILAR DELGADO" },
    { name: "FRANCISCO GAMBÍN CAMPUZANO" }
  ];
  
  const aiTools = [
    "DALL·E 3",
    "GPT-4",
    "Midjourney",
    "Stable Diffusion",
    "Claude",
    "Anthropic"
  ];

  // Generar partículas
  useEffect(() => {
    const newParticles = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10
    }));
    setParticles(newParticles);
  }, []);

  // Efecto de rotación de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % (useLocalImages ? localImages.length : unsplashImages.length)
      );
    }, 8000); // Cambiar imagen cada 8 segundos
    
    return () => clearInterval(interval);
  }, [useLocalImages, localImages.length, unsplashImages.length]);

  // Secuencia de animación
  useEffect(() => {
    const fullText = "POWERED BY: " + aiTools.join(" • ");
    let currentIndex = 0;
    
    // Iniciar secuencia de animaciones
    setTimeout(() => {
      setLoaded(true);
      
      setTimeout(() => {
        setShowCredits(true);
        
        setTimeout(() => {
          setShowCast(true);
          
          // Iniciar efecto de máquina de escribir después de que aparezcan los créditos
          setTimeout(() => {
            const typingInterval = setInterval(() => {
              if (currentIndex < fullText.length) {
                setTypedText(fullText.substring(0, currentIndex + 1));
                currentIndex++;
              } else {
                clearInterval(typingInterval);
              }
            }, 100);
            
            return () => clearInterval(typingInterval);
          }, 1500);
        }, 1000);
      }, 1500);
    }, 500);
  }, []);

  // URL de la imagen de fondo actual
  const currentBackgroundImage = useLocalImages 
    ? localImages[currentImageIndex] 
    : unsplashImages[currentImageIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fondo con efecto de zoom */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-30000 ease-out ${loaded ? 'scale-110' : 'scale-100'}`}
        style={{ backgroundImage: `url("${currentBackgroundImage}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>
      
      {/* Partículas */}
      {particles.map((particle) => (
        <div 
          key={particle.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s infinite ease-in-out`
          }}
        ></div>
      ))}
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Título con efecto de brillo */}
        <h1 
          className={`text-7xl md:text-9xl font-bold tracking-wider mb-6 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'} hover-glitch`}
          style={{ 
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6',
            animation: 'glow 3s infinite alternate'
          }}
        >
          ASTRA
        </h1>
        
        {/* Eslogan */}
        <p className={`text-xl md:text-2xl mb-8 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          UN VIAJE A LO DESCONOCIDO
        </p>
        
        {/* Créditos */}
        <div className={`text-center mb-8 transition-opacity duration-1000 ${showCredits ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl mb-2">UNA PRODUCCIÓN DE</p>
          <p className="text-3xl md:text-4xl font-semibold tracking-wide">HYPERDRIVE REBELS</p>
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
        
        {/* Reparto y Equipo */}
        <div className={`text-center mb-8 transition-opacity duration-1000 ${showCast ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-sm md:text-base">
            {castAndCrew.map((person, index) => (
              <div key={index} className="flex justify-center md:justify-start">
                <span className="font-medium">{person.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sección del logo */}
        <div className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32">
          <img 
            src={logoPath} 
            alt="Logo ASTRA" 
            className="w-full h-full object-contain"
            onError={(e) => {
              // Si el logo no se encuentra, mostrar un icono como respaldo
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<svg class="w-full h-full text-white" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 4v16m-8-8h16"></path></svg>';
              }
            }}
          />
        </div>
        
        {/* Iconos de película */}
        <div className="absolute top-8 left-8 flex flex-col space-y-4">
          <Film className="w-6 h-6 text-white opacity-70" />
          <Award className="w-6 h-6 text-white opacity-70" />
          <Clapperboard className="w-6 h-6 text-white opacity-70" />
        </div>
        
        {/* Herramientas de IA con efecto de máquina de escribir */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-lg md:text-xl tracking-wide font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        
        {/* Indicador de imagen actual */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2">
          {localImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/30'}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;