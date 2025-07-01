import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1c3c34] text-[#d1d5db] border-t border-[#374151] p-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div className="space-y-3">
      <h2 className="text-[#ffffff] text-xl font-bold">Recanto Verde</h2>
      <p className="text-[#d1d5db]">Seu refúgio de paz e conforto em meio à natureza. Venha vivenciar momentos inesquecíveis no Recanto Verde.</p>
    </div>
    <div>
      <h3 className="text-[#ffffff] font-semibold mb-2">
        <span>Links Rápidos</span>
      </h3>
      <ul className="space-y-1">
        <li>
          <a
            href="#inicio"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <span>Início</span>
          </a>
        </li>
        <li>
          <a
            href="#sobre"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <span>Sobre Nós</span>
          </a>
        </li>
        <li>
          <a
            href="#acomodacoes"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <span>Acomodações</span>
          </a>
        </li>
        <li>
          <a
            href="#comodidades"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <span>Comodidades</span>
          </a>
        </li>
        <li>
          <a
            href="#localizacao"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <span>Localização</span>
          </a>
        </li>
        <li>
          <a
            href="#contato"
            className="text-[#d1d5db] hover:text-[#ffffff]"
          >
            <span>Reservas</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="space-y-1">
      <h3 className="text-[#ffffff] font-semibold mb-2">
        <span>Horários</span>
      </h3>
      <p>
        <span>Check-in:</span>
        {' '}
        <strong>
          <span>14:00 - 20:00</span>
        </strong>
      </p>
      <p>
        <span>Check-out:</span>
        {' '}
        <strong>
          <span>até 12:00</span>
        </strong>
      </p>
      <p>
        <span>Recepção:</span>
        {' '}
        <strong>
          <span>07:00 - 22:00</span>
        </strong>
      </p>
      <p>
        <span>Café da manhã:</span>
        {' '}
        <strong>
          <span>07:00 - 10:00</span>
        </strong>
      </p>
    </div>
    <div className="space-y-3">
      <h3 className="text-[#ffffff] font-semibold">
        <span>Contato</span>
      </h3>
      <div className="flex items-start gap-2">
        <i className="fas fa-map-pin text-[#ffffff] mt-1" />
        <p>Estrada do Recanto, Km 5, Serra Verde - MG</p>
      </div>
      <div className="flex items-start gap-2">
        <i className="fas fa-phone text-[#ffffff] mt-1" />
        <p>+55 (31) 3333-4444</p>
      </div>
      <div className="flex items-start gap-2">
        <i className="fas fa-envelope text-[#ffffff] mt-1" />
        <p>contato@recantoverde.com.br</p>
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
    <span>Todos os direitos reservados.</span>
  </div>
</footer>
  );
};

export default Footer;