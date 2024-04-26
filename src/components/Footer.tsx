import { BsTwitterX, BsTiktok, BsThreads, BsWhatsapp, BsInstagram } from "react-icons/bs";
import Anchors from "./Anchors";

function Footer() {
  let date = new Date
  return (
    <footer>
      <div className='flex flex-col justify-center w-full'>
        <div className='bg-secondary p-5 text-center'>
          <h1 className=' text-xl gl:text-2xl font-bold text-white tracking-wide'>HEALTH & LIFE PANAMA, if you'r having issues
          <button className=' bg-white rounded-2xl py-1 px-4 text-black mx-2 border-2 border-black'>Contact us!</button>
          </h1>
        </div>
        <div className='flex flex-col bg-red-principal p-2'>
          <h1 className='text-2xl rounded-xl bg-secondary p-2 w-fit border-2 border-black mx-auto text-white font-bold my-4 lg:my-5'>Follow us!</h1>
          <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center mx-auto 
          text-white text-2xl lg:text-xl font-bold mb-5 text-center'>
            <div className="hidden lg:flex gap-10">
              <Anchors url="#" text={'Instagram'} />
              <Anchors url="#" text={'X'} />
              <Anchors url="#" text={'TikTok'} />
              <Anchors url="#" text={'Threads'} />
              <Anchors url="#" text={'WhatsApp'} />
            </div>
            <div className=" flex gap-10 my-5 lg:hidden">
              <Anchors url="#" children={<BsInstagram/>}/> 
              <Anchors url="#" children={<BsTwitterX/>} />
              <Anchors url="#" children={<BsTiktok/>} /> 
              <Anchors url="#" children={<BsThreads/>} /> 
              <Anchors url="#" children={<BsWhatsapp/>} /> 
            </div>
          </div>
        </div>
        <div className='p-2 border-t-2 bg-[#b44368]/90'>
          <h1 className=' text-center text-lg lg:text-xl text-white font-bold my-1'>© {date.getFullYear()} Copyright: healthAndLife</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer