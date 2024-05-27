import VolanteCanvas from "../Componentes/canvas/Volante";
import PropTypes from 'prop-types';

function Contenedor3D(props) {
    return (
        <div className='w-full mx-10 my-10 md:my-50 max-w-screen-lg flex flex-col md:flex-row bg-slate-400 rounded-lg shadow-lg overflow-hidden'>
            
            <div className='w-full md:w-1/2'>
                <div className='text-center p-10 md:p-10 font-lato font-normal leading-6'>
                    <p className='text-lg font-semibold'>{props.titulo}</p>
                    <p className='text-lg mt-2.5 pb-7'>{props.subtitulo}</p>
                    <p className='text-base text-justify'>{props.parrafo}</p>
                </div>
            </div>
            
            <div className='w-full md:w-1/2 flex items-center justify-center'>
                <VolanteCanvas /> 
            </div>

        </div>
    );
}

Contenedor3D.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    parrafo: PropTypes.string.isRequired
};

export default Contenedor3D;
