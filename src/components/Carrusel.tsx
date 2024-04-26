import { useEffect, useState } from "react";
import styled from 'styled-components';
import "./../Carrusel.css";
import { BsCaretRightFill, BsCaretLeftFill  } from "react-icons/bs";
const CarouselImg = styled.img`
max-width: 500px;
width: 100%;
max-height: 500px;
height: 100%;
opacity: 0;
transition: 1s;
&.loaded {
    opacity: 1;
}`
interface Props {
    Data: string[];
    autoPlay?: boolean;
    showButtons?: boolean; 
    timeInterval: number;
    bgColor: string;
    borderColor: string;
}
function Carrusel(props:Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.Data[2]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        if(props.autoPlay) {
            const interval = setInterval(()=>{
                selectNewImage( props.Data, )
            }, props.timeInterval)
            return () =>{clearInterval(interval)}
        }
    });
    const selectNewImage = ( Data:string[], next = true) => {
        setLoaded(false);
        setTimeout(()=>{
            const condition = next ? currentIndex < Data.length -1 : currentIndex > 0;
            const nextIndex = next  ? (condition ?  currentIndex +1 : 0) : condition ? currentIndex - 1 : Data.length - 1;
            setSelectedImage(Data[nextIndex]);
            setCurrentIndex(nextIndex);   
        }, 500)
    }
    const previusImge = () => {
        selectNewImage( props.Data, false)
    }
    const next = () => {
        selectNewImage( props.Data)
    }
  return (
    <div className={`flex flex-col mx-auto p-2 border-t-8 ${props.borderColor} shadow-xl shadow-slate-950 mb-5`}>
        <CarouselImg src={selectedImage} alt="hi" className={loaded  ? `loaded` : ``} onLoad={()=> setLoaded(true)} />
        <div className={`flex ${props.bgColor} justify-evenly p-4 text-3xl text-white items-center `}>
            <button className="hover:text-black/90 duration-300 ease-in-out" onClick={previusImge}> <BsCaretLeftFill /> </button>
            <button className="hover:text-black/90 duration-300 ease-in-out" onClick={next}> <BsCaretRightFill /> </button>
        </div>
    </div>
  )
}

export default Carrusel