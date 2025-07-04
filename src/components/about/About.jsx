import React from 'react';

const About = () => {
  return (
    <section
  id="sobre"
  className="py-20"
  style={{
    backgroundColor: '#fdfcf8'
  }}
>
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dbr0za6wf/image/upload/v1747492375/wgc9hknpgj0awn1ckibd.jpg"
            alt="Vista da pousada"
            className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
            <span className="font-playfair text-xl font-semibold">Fundada em 2005</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2
          className="text-3xl md:text-4xl font-playfair font-bold mb-6"
          style={{
            color: '#1c3c34'
          }}
        >
          <span>Sobre o Recanto Verde</span>
        </h2>
        <div
          className="w-20 h-1 mb-8"
          style={{
            backgroundColor: '#1c3c34'
          }}
        />
        <span className="mb-6 text-lg">A Pousada Recanto Verde nasceu do sonho de oferecer um refúgio especial, onde o aconchego encontra a natureza. Situada em um local privilegiado, nossa pousada combina o charme rústico com o conforto moderno.</span>
        <span className="mb-6 text-lg">Em meio à exuberante paisagem natural, criamos um ambiente onde cada detalhe foi pensado para proporcionar momentos inesquecíveis. Seja para um fim de semana relaxante ou férias prolongadas, aqui você encontrará o equilíbrio perfeito entre descanso e aventura.</span>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div
            className="flex flex-col items-center p-4 rounded-lg shadow-md"
            style={{
              backgroundColor: '#ffffff'
            }}
          >
            <span className="font-bold text-3xl mb-2">15+</span>
            <span
              style={{
                color: '#4b5563'
              }}
            >
              {' '}
              <span>Anos de Experiência</span>
            </span>
          </div>
          <div
            className="flex flex-col items-center p-4 rounded-lg shadow-md"
            style={{
              backgroundColor: '#ffffff'
            }}
          >
            <span
              className="font-bold text-3xl mb-2"
              style={{
                color: '#1c3c34'
              }}
            >
              <span>20</span>
            </span>
            <span
              style={{
                color: '#4b5563'
              }}
            >
              <span>Acomodações</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;