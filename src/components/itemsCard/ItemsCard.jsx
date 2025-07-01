import React from 'react';

const ItemsCard = () => {
  return (
    <section
  id="comodidades"
  className="py-20 bg-[#fdf5d6] text-[#333333]"
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1c3c34] mb-4">
        <span>Nossas Comodidades</span>
      </h2>
      <div className="w-20 h-1 bg-[#8B5E3C] mx-auto mb-8" />
      <p className="text-[#333333] max-w-2xl mx-auto">Oferecemos tudo que você precisa para uma estadia inesquecível. Nossos serviços são pensados para garantir seu conforto e bem-estar.</p>
    </div>
    <div className="grid gap-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa-solid fa-wifi text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <span>Wi-Fi Grátis</span>
        </h3>
        <p className="text-[#333333]">Conexão de alta velocidade em toda a pousada.</p>
      </div>
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa fa-home text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <span>Comodidade</span>
        </h3>
        <p className="text-[#333333]">Casa ampla com 3 quartos e 2 banheiros</p>
      </div>
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa-solid fa-spa text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <span>Jardim</span>
        </h3>
        <p className="text-[#333333]">Amplo espaço para se reconectar com a natureza</p>
      </div>
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-lg text-center">
        <i className="fa fa-map-marker text-4xl mb-4 text-[#1c3c34]" />
        <h3 className="text-xl font-semibold mb-2">
          <span>localização</span>
        </h3>
        <p className="text-[#333333]">Apenas 21 km do centro de Curitiba.</p>
      </div>
    </div>
  </div>
</section>
  );
};

export default ItemsCard;