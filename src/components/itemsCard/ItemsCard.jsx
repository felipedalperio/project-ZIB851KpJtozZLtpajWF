import React from 'react';
import SafeText from './SafeText';

const ItemsCard = () => {
  return (
    <section
  id="comodidades"
  className="py-20 bg-[#fdf5d6] text-[#333333]"
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1c3c34] mb-4">
        <SafeText text="Nossas Comodidades" />
      </h2>
      <div className="w-20 h-1 bg-[#8B5E3C] mx-auto mb-8" />
      <SafeText
        text="Oferecemos tudo que você precisa para uma estadia inesquecível. Nossos serviços são pensados para garantir seu conforto e bem-estar."
        className="text-[#333333] max-w-2xl mx-auto"
        tag="p"
      />
    </div>
    <div className="grid gap-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa-solid fa-wifi text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <SafeText text="Wi-Fi Grátis" />
        </h3>
        <SafeText
          text="Conexão de alta velocidade em toda a pousada."
          className="text-[#333333]"
          tag="p"
        />
      </div>
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa fa-home text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <SafeText text="Comodidade" />
        </h3>
        <SafeText
          text="Casa ampla com 3 quartos e 2 banheiros"
          className="text-[#333333]"
          tag="p"
        />
      </div>
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa-solid fa-spa text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <SafeText text="Jardim" />
        </h3>
        <SafeText
          text="Amplo espaço para se reconectar com a natureza"
          className="text-[#333333]"
          tag="p"
        />
      </div>
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa fa-map-marker text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <SafeText text="localização" />
        </h3>
        <SafeText
          text="Apenas 21 km do centro de Curitiba."
          className="text-[#333333]"
          tag="p"
        />
      </div>
    </div>
  </div>
</section>
  );
};

export default ItemsCard;