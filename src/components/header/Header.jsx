import React from 'react';

const Header = () => {
  return (
    <section id="header5" class="relative h-[70vh] md:h-screen bg-cover bg-center flex items-center" style="background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(&#x27;https://res.cloudinary.com/dbr0za6wf/image/upload/v1747492328/cmyarhigwma7wte0fuln.jpg&#x27;)"><div class="container mx-auto px-4 text-center text-white"><h1 class="text-4xl md:text-6xl font-playfair font-bold mb-6"><span>Bem-vindo à Pousada Recanto Verde</span></h1><p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"><span>Seu refúgio de paz e conforto em meio à natureza</span></p><div class="flex flex-col sm:flex-row justify-center gap-4"><a href="#acomodacoes" class="px-8 py-3 text-lg font-semibold rounded" style="background-color:#1e6f3e;color:#ffffff">Conhecer Acomodações</a><a href="#reserva" class="px-8 py-3 text-lg font-semibold border rounded backdrop-blur-sm" style="background-color:rgba(255, 255, 255, 0.1);color:#ffffff;border-color:#ffffff">Fazer uma Reserva</a></div></div></section>
  );
};

export default Header;