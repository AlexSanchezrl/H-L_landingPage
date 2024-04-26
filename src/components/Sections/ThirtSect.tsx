import Carrusel from '../Carrusel';
import image1 from '../../assets/img/Be Kind to Your Mind, Mental Health Wall Art.jpeg'
import image2 from '../../assets/img/sMZKihjk.jpeg'
import image3 from '../../assets/img/Poster.jpeg'
function ThirtSect() {

    const Data = [image1, image2, image3];
  return (
    <div className=" container flex-col p-12 mt-2 mx-auto ">
        <h1 className=' text-[#015276] text-4xl mb-10 font-extrabold'>What we<span className='text-[#b44368]'> offer</span></h1>
        <div className=' mx-auto gap-5 w-[95%] '>
            <div className='grid grid-flow-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 '>
                <Carrusel Data={Data} autoPlay={true} timeInterval={4000} borderColor='border-red-primary' bgColor='bg-red-principal'/>
                <Carrusel Data={Data} autoPlay={true} timeInterval={3000} borderColor='border-blue-secondary' bgColor='bg-secondary'/>
                <Carrusel Data={Data} autoPlay={true} timeInterval={5000} borderColor='border-red-primary' bgColor='bg-red-principal'/>
            </div>
        </div>
    </div>
  )
}

export default ThirtSect