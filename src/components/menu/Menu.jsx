import React from 'react';

const Menu = () => {
  return (
    <header className="w-full z-50 shadow-sm backdrop-blur-sm bg-[#ffffff]">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <a
      href="#"
      className="flex items-center"
    >
      <h1 className="text-2xl md:text-3xl font-playfair font-bold text-[#1e6f3e]">
        <span>Recanto Verde</span>
      </h1>
    </a>
    <nav className="hidden md:flex space-x-8 items-center">
      <a
        href="#inicio"
        className="font-medium transition-colors text-[#374151]"
      >
        Início
      </a>
      <a
        href="#sobre"
        className="font-medium transition-colors text-[#374151]"
      >
        Sobre
      </a>
      <a
        href="#acomodacoes"
        className="font-medium transition-colors text-[#374151]"
      >
        Acomodações
      </a>
      <a
        href="#comodidades"
        className="font-medium transition-colors text-[#374151]"
      >
        Comodidades
      </a>
      <a
        href="#localizacao"
        className="font-medium transition-colors text-[#374151]"
      >
        Localização
      </a>
      <a
        href="#contato"
        className="font-medium transition-colors text-[#374151]"
      >
        Contato
      </a>
      <button className="px-4 py-2 rounded bg-[#1e6f3e] text-[#ffffff]">
        <span>Reservar Agora</span>
      </button>
    </nav>
    <button
      id="menu-toggle"
      className="md:hidden"
    >
      <svg
        id="menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#374151]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        id="close-icon"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 hidden text-[#374151]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
  <nav
    id="mobile-menu"
    className="md:hidden hidden flex-col bg-white border-t"
  >
    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
      <a
        href="#inicio"
        className="font-medium py-2 text-[#374151]"
      >
        Início
      </a>
      <a
        href="#sobre"
        className="font-medium py-2 text-[#374151]"
      >
        Sobre
      </a>
      <a
        href="#acomodacoes"
        className="font-medium py-2 text-[#374151]"
      >
        Acomodações
      </a>
      <a
        href="#comodidades"
        className="font-medium py-2 text-[#374151]"
      >
        Comodidades
      </a>
      <a
        href="#localizacao"
        className="font-medium py-2 text-[#374151]"
      >
        Localização
      </a>
      <a
        href="#contato"
        className="font-medium py-2 text-[#374151]"
      >
        Contato
      </a>
      <button className="w-full py-2 rounded  bg-[#1e6f3e] text-[#ffffff]">
        <span>Reservar Agora</span>
      </button>
    </div>
  </nav>
</header>
  );
};

export default Menu;