import Contenedor3D from "../Componentes/Contenedor3D";
import Recuadro3D from "../Componentes/Recuadro3D";

const Page = () => {
  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center'>
      <div className='min-h-600 flex flex-wrap items-center justify-center'>
        <div>
           <Contenedor3D
              titulo='Curiosidades sobre los pingüinos'
              subtitulo='Curiosidades pingüinos'
              parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
           />
        </div>

        <div>
           <Recuadro3D
              titulo='Curiosidades sobre los pingüinos'
              subtitulo='Curiosidades pingüinos'
              parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
           />
        </div>
        
      </div>
    </div>
  );
};

export default Page;