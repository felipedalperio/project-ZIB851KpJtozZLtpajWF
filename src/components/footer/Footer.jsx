import React from 'react';
import SafeText from './SafeText';

const Footer = () => {
  return (
    <footer className="bg-[#1c3c34] text-[#d1d5db] border-t border-[#374151] p-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div className="space-y-3">
      <SafeText
        text="Recanto Verde"
        className="text-[#ffffff] text-xl font-bold"
        tag="h2"
      />
      <SafeText
        text="Seu refúgio de paz e conforto em meio à natureza. Venha vivenciar momentos inesquecíveis no Recanto Verde."
        className="text-[#d1d5db]"
        tag="p"
      />
    </div>
    <div>
      <h3 className="text-[#ffffff] font-semibold mb-2">
        <SafeText text="Links Rápidos" />
      </h3>
      <ul className="space-y-1">
        <li>
          <a
            href="#inicio"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <SafeText text="Início" />
          </a>
        </li>
        <li>
          <a
            href="#sobre"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <SafeText text="Sobre Nós" />
          </a>
        </li>
        <li>
          <a
            href="#acomodacoes"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <SafeText text="Acomodações" />
          </a>
        </li>
        <li>
          <a
            href="#comodidades"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <SafeText text="Comodidades" />
          </a>
        </li>
        <li>
          <a
            href="#localizacao"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <SafeText text="Localização" />
          </a>
        </li>
        <li>
          <a
            href="#contato"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <SafeText text="Reservas" />
          </a>
        </li>
      </ul>
    </div>
    <div className="space-y-1">
      <h3 className="text-[#ffffff] font-semibold mb-2">
        <SafeText text="Horários" />
      </h3>
      <p>
        <SafeText text="Check-in:" />
        {' '}
        <strong>
          <SafeText text="14:00 - 20:00" />
        </strong>
      </p>
      <p>
        <SafeText text="Check-out:" />
        {' '}
        <strong>
          <SafeText text="até 12:00" />
        </strong>
      </p>
      <p>
        <SafeText text="Recepção:" />
        {' '}
        <strong>
          <SafeText text="07:00 - 22:00" />
        </strong>
      </p>
      <p>
        <SafeText text="Café da manhã:" />
        {' '}
        <strong>
          <SafeText text="07:00 - 10:00" />
        </strong>
      </p>
    </div>
    <div className="space-y-3">
      <h3 className="text-[#ffffff] font-semibold">
        <SafeText text="Contato" />
      </h3>
      <div className="flex items-start gap-2">
        <i className="fas fa-map-pin text-[#ffffff] mt-1" />
        <SafeText
          text="Estrada do Recanto, Km 5, Serra Verde - MG"
          tag="p"
        />
      </div>
      <div className="flex items-start gap-2">
        <i className="fas fa-phone text-[#ffffff] mt-1" />
        <SafeText
          text="+55 (31) 3333-4444"
          tag="p"
        />
      </div>
      <div className="flex items-start gap-2">
        <i className="fas fa-envelope text-[#ffffff] mt-1" />
        <SafeText
          text="contato@recantoverde.com.br"
          tag="p"
        />
      </div>
    </div>
  </div>
  <div className="mt-10 flex justify-center gap-4">
    <a
      href="#"
      className="text-[#d1d5db] hover:text-[#ffffff] text-xl"
    >
      <i className="fab fa-facebook" />
    </a>
    <a
      href="#"
      className="text-[#d1d5db] hover:text-[#ffffff] text-xl"
    >
      <i className="fab fa-instagram" />
    </a>
    <a
      href="#"
      className="text-[#d1d5db] hover:text-[#ffffff] text-xl"
    >
      <i className="fab fa-twitter" />
    </a>
  </div>
  <div className="text-center text-sm text-[#9ca3af] mt-6">
    <SafeText text="Todos os direitos reservados." />
  </div>
</footer>
  );
};

export default Footer;