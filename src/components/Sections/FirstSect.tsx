import BgVideo from '../../assets/video/tomaMedicamentos.mp4';
import BgVideo2 from '../../assets/video/tomaMedicamentos2.mp4';
import Link from '../Link';
import { BsArrowUpRight } from "react-icons/bs";

function FirstSect() {
  return (

        <div className="flex justify-center flex-col xl:flex-row gap-1 lg:gap-5 p-2 lg:p-10 mt-0 lg:mt-2">
            <div className='flex flex-1 p-2'>
                <div className='p-2 lg:p-5 bg-white/60 opacity-90 rounded-2xl tracking-wide'>
                    <h1 className=' text-7xl lg:text-8xl my-2'>Keep your <span className=' uppercase font-bold text-[#b44368]'>health</span> on track!</h1>
                    <p className='text-xl text-justify my-4'>
                    On life's journey, your health is your most faithful companion. Take care of it with attention and determination, charting each step on the right path to wellness. With healthy habits and preventive care, you ensure a journey full of vitality and fulfilment. 
                    Keep your health on the right track and enjoy every stage with energy and joy!
                    </p>
                        <div className='flex justify-center lg:justify-start items-center gap-x-5'>
                            <a href='/H-L_landingPage#support_section' className='flex items-center border border-[#015276] rounded-2xl 
                                                text-xl py-2 px-4 font-bold my-4 lg:my-5'>
                            Contact Us
                            </a>
                            <button className='flex items-center bg-red-principal text-white rounded-2xl 
                                                text-xl py-2 px-4 font-bold my-4 lg:my-5'>
                            Sign Up
                            </button>
                        </div>
                    <div className=' h-16 w-full bg-secondary mt-2 lg:mt-16 flex items-center justify-center 
                    shadow-lg shadow-slate-500 rounded-b-full border-b-2'>
                        <h1 className='text-3xl font-bold text-white'>HEALTH & <span>LIFE</span></h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 relative mt-0 md:mt-16 lg:t-0 '>
                <div className='hidden mx-auto xl:flex'>
                    <div className='absolute flex right-20 top-3 gap-x-2'>
                        <label className=' bg-[#015276] text-lg font-bold text-white rounded-2xl py-2 px-4 '>See More</label>
                        <div className=' bg-white w-11 h-11 flex items-center text-2xl font-extrabold rounded-full p-2 border-2 border-black'><Link url='/blog' children={<BsArrowUpRight/>}/></div>
                    </div>
                    <video className=' h-[700px] w-fit rounded-tl-lg rounded-bl-lg border-l-4 border-t-4 border-b border-black' loop autoPlay preload='auto'>
                        <source src={BgVideo} type='video/mp4'/>
                    </video>
                    <video className=' h-[700px] w-fit rounded-tr-lg rounded-br-lg border-r-4 border-t-4 border-b border-[#015276]' loop autoPlay preload='auto'>
                        <source src={BgVideo2} type='video/mp4'/>
                    </video>
                    <h3 className='absolute bottom-8 letter-mix'>Remember to take your medication <br></br> and keep your health in order!</h3>
                </div>
            </div>
        </div>

  )
}

export default FirstSect