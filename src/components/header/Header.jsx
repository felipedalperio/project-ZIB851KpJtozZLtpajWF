import React from 'react';
import SafeText from './SafeText';

const Header = () => {
  return (
    <section
  id="header5"
  className="relative h-[70vh] md:h-screen bg-cover bg-center flex items-center"
  style={{
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(\'https://res.cloudinary.com/dbr0za6wf/image/upload/v1747492328/cmyarhigwma7wte0fuln.jpg\')'
  }}
>
  <div className="container mx-auto px-4 text-center text-white">
    <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
      <SafeText text="Bem-vindo à Pousada Recanto Verde" />
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
      <SafeText text="Seu refúgio de paz e conforto em meio à natureza" />
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="#acomodacoes"
        className="px-8 py-3 text-lg font-semibold rounded"
        style={{
          backgroundColor: '#1e6f3e',
          color: '#ffffff'
        }}
      >
        Conhecer Acomodações
      </a>
      <a
        href="#reserva"
        className="px-8 py-3 text-lg font-semibold border rounded backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: '#ffffff',
          color: '#ffffff'
        }}
      >
        Fazer uma Reserva
      </a>
    </div>
  </div>
</section>
  );
};

export default Header;