import 'bootstrap/dist/css/bootstrap.min.css';  
import Image from 'next/image';
import {Carousel } from 'react-bootstrap';  
import img1 from "@/app/assets/imagen1.jpg"
import img2 from "@/app/assets/imagen2.jpg"
import img3 from "@/app/assets/imagen3.jpg"
import "@/app/contenedores/contenedor-principal.css"

function Carusel() {  
  
  return (  
    <>  
    <div className='p-5'>  
    <Carousel>  
  <Carousel.Item>  
  <Image   
      className="d-flex"  
      src={img1}  
      alt="First slide"  
      height={350}
      width={1120}
    />  
    <Carousel.Caption>  
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <Image 
      className="d-flex"  
      src={img2}  
      alt="Second slide"  
      height={350}
      width={1100}
    />  
  
    <Carousel.Caption>  
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <Image  
      className="d-flex"
      src={img3}  
      alt="Third slide"  
      height={350}
      width={1100}
    />  
  
    <Carousel.Caption>  
    </Carousel.Caption>  
  </Carousel.Item>  
</Carousel>  
</div>  
    </>  
  );  
}  
export default Carusel;  