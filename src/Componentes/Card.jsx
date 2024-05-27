import PropTypes from 'prop-types';

function Card(props) {

    const imagenPath = `/imagenes/${props.imagen}.png`;
    const linkPath = `http://localhost:5173/${props.link}`;
    
    return (
      <div className='w-3/4 mx-10 my-10 md:my-50 max-w-screen-lg flex flex-col md:flex-row bg-slate-400 rounded-lg shadow-lg overflow-hidden'>
        <div className='w-full'>
          <div className='text-center p-5 md:p-5 font-lato font-normal leading-6'>
            <p className='text-lg font-semibold pb-3 md:pb-5'>{props.titulo}</p>
            <img
              className='w-full h-auto'
              src={imagenPath}
              alt='Imagen recuadro'
            />
            <p className='text-base text-justify mt-4 pb-2 md:pb-4'>{props.parrafo}</p>
            {props.link && <a className='text-blue-500 text-left'  href={linkPath}>Leer más</a>}
          </div>
        </div>
      </div>
    );
}

Card.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    parrafo: PropTypes.string.isRequired,
    link: PropTypes.string 
};
  
export default Card;