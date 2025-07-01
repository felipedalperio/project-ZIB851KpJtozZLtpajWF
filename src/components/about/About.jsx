import React from 'react';
import SafeText from './SafeText';

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
            <SafeText
              text="Fundada em 2005"
              className="font-playfair text-xl font-semibold"
              style={{
                color: '#1c3c34'
              }}
            />
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
          <SafeText text="Sobre o Recanto Verde" />
        </h2>
        <div
          className="w-20 h-1 mb-8"
          style={{
            backgroundColor: '#1c3c34'
          }}
        />
        <SafeText
          text="A Pousada Recanto Verde nasceu do sonho de oferecer um refúgio especial, onde o aconchego encontra a natureza. Situada em um local privilegiado, nossa pousada combina o charme rústico com o conforto moderno."
          className="mb-6 text-lg"
          style={{
            color: '#374151'
          }}
        />
        <SafeText
          text="Em meio à exuberante paisagem natural, criamos um ambiente onde cada detalhe foi pensado para proporcionar momentos inesquecíveis. Seja para um fim de semana relaxante ou férias prolongadas, aqui você encontrará o equilíbrio perfeito entre descanso e aventura."
          className="mb-6 text-lg"
          style={{
            color: '#374151'
          }}
        />
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div
            className="flex flex-col items-center p-4 rounded-lg shadow-md"
            style={{
              backgroundColor: '#ffffff'
            }}
          >
            <SafeText
              text="15+"
              className="font-bold text-3xl mb-2"
              style={{
                color: '#1c3c34'
              }}
            />
            <span
              style={{
                color: '#4b5563'
              }}
            >
              {' '}
              <SafeText text="Anos de Experiência" />
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
              <SafeText text="20" />
            </span>
            <span
              style={{
                color: '#4b5563'
              }}
            >
              <SafeText text="Acomodações" />
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