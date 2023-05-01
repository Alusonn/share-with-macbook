import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {


  const { images, isLoading } = useFetchGifs( category )
  

  return (
    <>
    
        <h3>{category}</h3>
        <div className="card-grid">
            {/* Otra forma de hacer lo de arriba...
            {
              images.map( image => (
                <li key={image.id}>{image.title}</li>
              ))
            } */}
            
            {
              images.map( (image) => (
                <GifItem 
                key={image.id}
                
                // esto es lo mismo que ...image tomar las propertid de image
                
                // title={image.title}
                // url={image.url}
                { ...image }
                />
              ))
            }
        </div>
    
    
    </>
  )
}
