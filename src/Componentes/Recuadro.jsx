import PropTypes from 'prop-types';

function Recuadro(props) {
    
    const imagenPath = `/imagenes/${props.imagen}.png`;
    const linkPath = `http://localhost:5173/${props.link}`;

    return (
        <div className='w-full mx-10 my-10 md:my-50 max-w-screen-lg flex flex-col md:flex-row bg-slate-400 rounded-lg shadow-lg overflow-hidden'>
            
            <div className='w-full md:w-4/7'>
                <div className='text-center p-10 md:p-10 font-lato font-normal leading-6'>
                    <p className='text-lg font-semibold'>{props.titulo}</p>
                    <p className='text-lg mt-2.5 pb-7'>{props.subtitulo}</p>
                    <p className='text-base text-justify'>{props.parrafo}</p>
                    {props.link && <a className='text-blue-500 text-left'  href={linkPath}>Leer más</a>}
                </div>
            </div>
            
            <div className='w-full md:w-3/7 flex items-center justify-center'>
                <img
                    className='h-full w-full object-cover p-7'
                    src={imagenPath} alt="Imagen" />
            </div>

            
        </div>
    );
}

Recuadro.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    parrafo: PropTypes.string.isRequired,
    link: PropTypes.string 
};

export default Recuadro;
