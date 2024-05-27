import Contenedor from "../Componentes/Contenedor";
import ContenedorInvert from "../Componentes/ContenedorInvert";
import HojaLibro from "../Componentes/HojaLibro";
import Informacion from "../Componentes/Informacion";
import Card from "../Componentes/Card";

//Librerias del carrusel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {

  const cards = [
    { imagen: 'imagen1', link: 'Page', titulo: 'Curiosidades 1', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'imagen1', link: 'Page', titulo: 'Curiosidades 2', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'imagen1', link: 'Page', titulo: 'Curiosidades 3', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'imagen1', link: 'Page', titulo: 'Curiosidades 4', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
    { imagen: 'imagen1', link: 'Page', titulo: 'Curiosidades 5', parrafo: 'Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
    <div className='min-h-screen flex flex-wrap items-center justify-center text-center'>
      <div className='min-h-600 flex flex-wrap items-center justify-center'>
        <h1 className='max-w-940 text-5xl font-bold leading-tight my-10 '>
          Curiosidades sobre los pingüinos
        </h1>

        <Contenedor
          imagen='imagen1'
          titulo='Curiosidades sobre los pingüinos'
          subtitulo='Curiosidades pingüinos'
          parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
        />

        <Informacion
          imagen='imagen1'
          titulo='Curiosidades sobre los pingüinos'
          parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos,Curiosidades sobre los pingüinos,Curiosidades sobre los pingüinos,Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
        />

        <div className='max-w-screen-lg mx-auto'>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index}>
                <Card imagen={card.imagen} titulo={card.titulo} parrafo={card.parrafo} link={card.link}/>
              </div>
            ))}
          </Slider>
        </div>

        <ContenedorInvert
          imagen='imagen1'
          titulo='Curiosidades sobre los pingüinos'
          subtitulo='Curiosidades pingüinos'
          parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
        />

        <div className='flex justify-center w-full'>
          <HojaLibro
            imagen='imagen1'
            titulo='Curiosidades sobre los pingüinos'
            parrafo='Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos'
            link='Page'
          />
          <HojaLibro
            imagen='imagen1'
            titulo='Curiosidades sobre los pingüinos'
            parrafo='Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos, los Curiosidades sobre los pingüinos'
            link='Page'
          />
        </div>

     

      </div>
    </div>
  );
}

export default Home;
