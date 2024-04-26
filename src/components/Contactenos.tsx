import someOneAsking from '../assets/img/pixelcut-export.png';

function FormGmail() {

  return (
    <div className=" container mx-auto">
      <h1 className=' text-4xl text-center p-2 font-bold text-white'>Suggestions? 🤖</h1>
      <div className="flex justify-center lg:justify-evenly mt-2 md:mt-10">
        <form method="POST"  className='flex flex-col p-2'>
          <div className='flex flex-col bg-white p-5 gap-5 w-auto mt-1 md:mt-10 rounded-tr-2xl rounded-bl-2xl border-4 border-gray-300'>
            <label className='text-xl font-bold p-2'>Enter your name</label>
            <input type='email' className=' w-full outline-none text-lg bg-transparent border-b-2 border-black p-1'
            placeholder='Alexander'/>
            <label className='text-xl font-bold p-2'>Enter your email address</label>
            <input type='email' className=' w-full outline-none text-lg bg-transparent border-b-2 border-black p-1'
            placeholder='example@gmail.com'/>
            <label className='text-xl font-bold p-2'>What would you suggest or advise us to improve?</label>
            <textarea className=' w-full outline-none text-lg bg-transparent border-b-2 border-black p-1'
            placeholder='Your idea or suggestion'>
            </textarea>
            <div className='flex flex-col md:flex-row justify-evenly p-2 gap-2'>
              <button className=' bg-red-400 text-xl font-bold py-2 px-5 
              rounded-2xl border-2 border-black text-white'>clear</button>
              <button className=' bg-blue-400 text-xl font-bold py-2 px-5 
              rounded-2xl border-2 border-black text-white'>Submit</button>
            </div>
          </div>

        </form>
        <div className=' hidden lg:block'>
          <img width={500} height={200} src={someOneAsking} alt='someone asking'/>
        </div>
      </div>

    </div>
  )
}

export default FormGmail