import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';


const greenIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const redIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const goldIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const orangeIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const yellowIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const violetIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const greyIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const blueIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function MapI() {
    return (
        <div>
           <MapContainer center={[4.480,-73.301]} zoom={5} scrollWheelZoom={false} className='mapa'>
             <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />

             <Marker position={[3.9479,-76.6489]} icon={greenIcon}>
              <Popup className="custom-popup"> 
                <div>
                  <img
                    className='h-full w-full object-cover'
                    src='/imagenArea/calima.png' alt="Imagen" 
                  />
                </div>
                
                <div className='flex flex-col px-2 py-2'>
                  <Link to='/Calima'><strong>Calima</strong></Link>
                  <p>
                    Descripcion,  Curiosidades sobre los pingüinos, los Curiosidades 
                    sobre los pingüinos Curiosidades 
                  </p>
                </div>

              </Popup>
             </Marker>

             <Marker position={[2.1302,-77.0183]} icon={redIcon}>
              <Popup className="custom-popup"> 
                <div>
                  <img
                    className='h-full w-full object-cover'
                    src='/imagenArea/patia.png' alt="Imagen" 
                  />
                </div>
                
                <div className='flex flex-col px-2 py-2'>
                  <Link to='/Patia'><strong>Patía</strong></Link>
                  <p>
                    Descripcion,  Curiosidades sobre los pingüinos, los Curiosidades 
                    sobre los pingüinos Curiosidades 
                  </p>
                </div>

              </Popup>
             </Marker>

             <Marker position={[6.3637,-75.5606]} icon={blueIcon}>
              <Popup className="custom-popup"> 
                <div>
                  <img
                    className='h-full w-full object-cover'
                    src='/imagenArea/tierraAdentro.png' alt="Imagen" 
                  />
                </div>
                
                <div className='flex flex-col px-2 py-2'>
                  <Link to='/TierraAdentro'><strong>Tierra Adentro</strong></Link>
                  <p>
                    Descripcion,  Curiosidades sobre los pingüinos, los Curiosidades 
                    sobre los pingüinos Curiosidades 
                  </p>
                </div>

              </Popup>
             </Marker>

             <Marker position={[2.4699,-76.5692]} icon={goldIcon}>
              <Popup className="custom-popup"> 
                <div>
                  <img
                    className='h-full w-full object-cover'
                    src='/imagenArea/popayan.png' alt="Imagen" 
                  />
                </div>
                
                <div className='flex flex-col px-2 py-2'>
                  <Link to='/Popayan'><strong>Popayán</strong></Link>
                  <p>
                    Descripcion,  Curiosidades sobre los pingüinos, los Curiosidades 
                    sobre los pingüinos Curiosidades 
                  </p>
                </div>

              </Popup>
             </Marker>

             <Marker position={[1.571,-77.866]} icon={orangeIcon}>
              <Popup className="custom-popup"> 
                <div>
                  <img
                    className='h-full w-full object-cover'
                    src='/imagenArea/nariño.png' alt="Imagen" 
                  />
                </div>
                
                <div className='flex flex-col px-2 py-2'>
                  <Link to='/Nariño'><strong>Nariño</strong></Link>
                  <p>
                    Descripcion,  Curiosidades sobre los pingüinos, los Curiosidades 
                    sobre los pingüinos Curiosidades 
                  </p>
                </div>

              </Popup>
             </Marker>

             <Marker position={[1.5383,-78.6099]} icon={yellowIcon}>
              <Popup className="custom-popup"> 
                <div>
                  <img
                    className='h-full w-full object-cover'
                    src='/imagenArea/tumaco.png' alt="Imagen" 
                  />
                </div>
                
                <div className='flex flex-col px-2 py-2'>
                  <Link to='/Tumaco'><strong>Tumaco</strong></Link>
                  <p>
                    Descripcion,  Curiosidades sobre los pingüinos, los Curiosidades 
                    sobre los pingüinos Curiosidades 
                  </p>
                </div>

              </Popup>
             </Marker>

             <Marker position={[3.1745,-76.2594]} icon={violetIcon}>
              <Popup className="custom-popup"> 
                <div>
                  <img
                    className='h-full w-full object-cover'
                    src='/imagenArea/corinto.png' alt="Imagen" 
                  />
                </div>
                
                <div className='flex flex-col px-2 py-2'>
                  <Link to='/Corinto'><strong>Corinto</strong></Link>
                  <p>
                    Descripcion,  Curiosidades sobre los pingüinos, los Curiosidades 
                    sobre los pingüinos Curiosidades 
                  </p>
                </div>

              </Popup>
             </Marker>

             <Marker position={[4.6228,-75.7634]} icon={greyIcon}>
              <Popup className="custom-popup"> 
                <div>
                  <img
                    className='h-full w-full object-cover'
                    src='/imagenArea/quimbaya.png' alt="Imagen" 
                  />
                </div>
                
                <div className='flex flex-col px-2 py-2'>
                  <Link to='/Quimbaya'><strong>Quimbaya</strong></Link>
                  <p>
                    Descripcion,  Curiosidades sobre los pingüinos, los Curiosidades 
                    sobre los pingüinos Curiosidades 
                  </p>
                </div>

              </Popup>
             </Marker>

           </MapContainer>
        </div>
    );
}


export default MapI;