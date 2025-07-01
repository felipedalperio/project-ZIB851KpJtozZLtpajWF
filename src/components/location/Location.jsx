import React from 'react';

const Location = () => {
  return (
    <section
  id="localizacao"
  className="py-20 bg-[white]"
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-[#1c3c34]">Nossa Localização</h2>
      <div className="w-20 h-1 mx-auto mb-8 bg-[#6b4226]" />
      <p className="text-[#4a5568] max-w-2xl mx-auto">Localizada estrategicamente em um ambiente tranquilo...</p>
    </div>
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-96 relative shadow-lg">
        <img
          src="https://amorepet.vercel.app/map2.PNG"
          alt="Mapa de localização"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="fas fa-map-marker-alt text-red-500 text-5xl drop-shadow-lg" />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white rounded-lg p-8 shadow-lg">
        <h3 className="text-2xl font-playfair font-semibold mb-6 text-[#1c3c34]">Endereço e Contato</h3>
        <div className="space-y-6 text-[#4a5568]">
          <div className="flex items-start">
            <i className="mr-4 mt-1 fas fa-map-pin text-[#1c3c34]" />
            <div>
              <h4 className="font-semibold mb-1">Endereço</h4>
              <p>Estrada do Recanto, Km 5
Serra Verde - MG...</p>
            </div>
          </div>
          <div className="flex items-start">
            <i className="mr-4 mt-1 fas fa-phone text-[#1c3c34]" />
            <div>
              <h4 className="font-semibold mb-1">Telefone</h4>
              <p>+55 (31) 3333-4444
+55 (31) 99999-8888</p>
            </div>
          </div>
          <div className="flex items-start">
            <i className="mr-4 mt-1 fas fa-envelope text-[#1c3c34]" />
            <div>
              <h4 className="font-semibold mb-1">E-mail</h4>
              <p>contato@recantoverde.com.br
reservas@recantoverde.com.br</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Como Chegar</h4>
            <p>A 120km da capital, acesso pela rodovia BR-101...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Location;