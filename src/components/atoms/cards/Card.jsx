import React from 'react'
// import { contact1 } from '../../../assets';


// export const Card = ({style}) => {
//     return (
//         <div className="grid custom-md:grid-cols-2 lg:items-start">
//           <div className={`sm:px-16 px-6 py-5 gap-10 lg:gap-4 my-auto flex flex-col items-start 2xl:w-[80%] 2xl:m-auto 2xl:gap-10 ${style}`}>
//             <h3 className="font-bold text-[1.2rem] md:text-[1.3rem] lg:text-[1.6rem]">
//               Somos un Proyecto de inclusión sustentable que brinda una solución al
//               transporte y a la movilidad activa de las personas de bajos recursos.
//             </h3>
//             <p className=" lg:text-[1rem]">
//               Buscamos que ciudadanos de bajos recursos tengan acceso a un medio de
//               locomoción útil, económico y sustentable, cómo lo es la bici. A su
//               vez, promovemos la igualdad de oportunidades para que las personas
//               puedan ir a sus escuelas y empleos.
//             </p>
//             <button className="bg-blue-500 p-3 rounded-md text-white">
//               Hace una donacion
//             </button>
//           </div>
//           <div className="">
//             <img
//               className=""
//               src={contact1}
//               alt=""
//             />
//           </div>
//         </div>
//       );
// }

export const Card = ({homeContent}) => {
  return (
      <div className="grid custom-md:grid-cols-2 lg:items-start">
        <div className={`sm:px-16 px-6 py-5 gap-10 lg:gap-4 my-auto flex flex-col items-start 2xl:w-[80%] 2xl:m-auto   2xl:gap-10 ${homeContent.style}`}>
          <h3 className="font-bold text-[1.2rem] md:text-[1.3rem] lg:text-[1.6rem]">{homeContent.title}
          </h3>
          <p className=" lg:text-[1rem]">{homeContent.desc}
          </p>
          <button className="bg-blue-500 p-3 rounded-md text-white">
            Hace una donacion
          </button>
        </div>
        <div className="">
          <img
            className="w-full"
            src={homeContent.img}
            alt=""
          />        
        </div>
      </div>
    );
}
