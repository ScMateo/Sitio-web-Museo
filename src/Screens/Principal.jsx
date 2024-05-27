import Recuadro from "../Componentes/Recuadro";
import HojaLibro from "../Componentes/HojaLibro";
import Card from "../Componentes/Card";

//Librerias del carrusel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Principal = () => {

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
        <Recuadro
          imagen='imagen1'
          titulo='Curiosidades sobre los pingüinos'
          subtitulo='Curiosidades pingüinos'
          parrafo='Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos, Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos Curiosidades sobre los pingüinos'
          link='Page'
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

        <div className='max-w-screen-lg mx-auto'>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index}>
                <Card imagen={card.imagen} titulo={card.titulo} parrafo={card.parrafo} link={card.link}/>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
}

export default Principal;