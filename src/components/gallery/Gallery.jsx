import React from 'react';

const Gallery = () => {
  return (
    <div
  className="
            w-full
            text-[#000000]
            bg-[#ffffff] pt-[16px] pr-[16px] pb-[16px] pl-[16px] 
          md:pt-[16px] md:pr-[16px] md:pb-[16px] md:pl-[16px] 
          lg:pt-[16px] lg:pr-[16px] lg:pb-[16px] lg:pl-[16px] mt-[0px] mr-[0px] mb-[0px] ml-[0px] 
          md:mt-[0px] md:mr-[0px] md:mb-[0px] md:ml-[0px] 
          lg:mt-[0px] lg:mr-[0px] lg:mb-[0px] lg:ml-[0px]
          flex flex-col justify-center items-center"
>
  <h2 className="text-[30px] md:text-[34px] lg:text-[34px]  font-bold mb-4 text-center">
    <span>Nosso Espaço</span>
  </h2>
  <div className="text-[20px] md:text-[20px] lg:text-[20px]  mb-6 opacity-75 text-center">
    <span>- Galeria de fotos -</span>
  </div>
  <div
    className="
            grid gap-[1rem]
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          "
  >
    <div className="relative flex group overflow-hidden rounded-none min-w-[200px] md:min-w-[200px] lg:min-w-[448px]  max-w-[500px] md:max-w-[500px] lg:max-w-[501px]  max-h-[200px] md:max-h-[200px] lg:max-h-[500px]  min-h-[autopx] md:min-h-[autopx] lg:min-h-[autopx] ">
      <img
        src="https://res.cloudinary.com/dbr0za6wf/image/upload/v1747492531/db8dqqdnroy16nquoxrk.jpg"
        alt="Image 1"
        loading="lazy"
        className="w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        Image 1
      </div>
    </div>
    <div className="relative flex group overflow-hidden rounded-none min-w-[200px] md:min-w-[200px] lg:min-w-[448px]  max-w-[500px] md:max-w-[500px] lg:max-w-[501px]  max-h-[200px] md:max-h-[200px] lg:max-h-[500px]  min-h-[autopx] md:min-h-[autopx] lg:min-h-[autopx] ">
      <img
        src="https://res.cloudinary.com/dbr0za6wf/image/upload/v1747492541/u8rerqwracszxyanqlti.jpg"
        alt="Image 2"
        loading="lazy"
        className="w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        Image 2
      </div>
    </div>
    <div className="relative flex group overflow-hidden rounded-none min-w-[200px] md:min-w-[200px] lg:min-w-[448px]  max-w-[500px] md:max-w-[500px] lg:max-w-[501px]  max-h-[200px] md:max-h-[200px] lg:max-h-[500px]  min-h-[autopx] md:min-h-[autopx] lg:min-h-[autopx] ">
      <img
        src="https://res.cloudinary.com/dbr0za6wf/image/upload/v1747492549/rwtjjeo7uvxy0vrnoabj.jpg"
        alt="Image 3"
        loading="lazy"
        className="w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        Image 3
      </div>
    </div>
    <div className="relative flex group overflow-hidden rounded-none min-w-[200px] md:min-w-[200px] lg:min-w-[448px]  max-w-[500px] md:max-w-[500px] lg:max-w-[501px]  max-h-[200px] md:max-h-[200px] lg:max-h-[500px]  min-h-[autopx] md:min-h-[autopx] lg:min-h-[autopx] ">
      <img
        src="https://res.cloudinary.com/dbr0za6wf/image/upload/v1747492605/uqyozfu0d4hsszerga8u.jpg"
        alt="Imagem Text"
        loading="lazy"
        className="w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        Imagem Text
      </div>
    </div>
    <div className="relative flex group overflow-hidden rounded-none min-w-[200px] md:min-w-[200px] lg:min-w-[448px]  max-w-[500px] md:max-w-[500px] lg:max-w-[501px]  max-h-[200px] md:max-h-[200px] lg:max-h-[500px]  min-h-[autopx] md:min-h-[autopx] lg:min-h-[autopx] ">
      <img
        src="https://res.cloudinary.com/dbr0za6wf/image/upload/v1747492615/iyrus2ol0k3bq2tqyc2r.jpg"
        alt="Imagem Text"
        loading="lazy"
        className="w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        Imagem Text
      </div>
    </div>
    <div className="relative flex group overflow-hidden rounded-none min-w-[200px] md:min-w-[200px] lg:min-w-[448px]  max-w-[500px] md:max-w-[500px] lg:max-w-[501px]  max-h-[200px] md:max-h-[200px] lg:max-h-[500px]  min-h-[autopx] md:min-h-[autopx] lg:min-h-[autopx] ">
      <img
        src="https://res.cloudinary.com/dbr0za6wf/image/upload/v1747492632/x40d3wp8xzhuwhzgwe64.jpg"
        alt="Imagem Text"
        loading="lazy"
        className="w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        Imagem Text
      </div>
    </div>
  </div>
</div>
  );
};

export default Gallery;