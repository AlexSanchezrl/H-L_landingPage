import Person01 from '../../assets/img/person01.jpeg';
import Person02 from '../../assets/img/person02.jpeg';
import Person03 from '../../assets/img/person03.jpeg';

function SecondSect() {
  return (
    <div className=" container flex flex-col items-center justify-center p-5 lg:p-10 mt-2 mx-auto">
        <h1 className=' text-white text-4xl mb-10 font-extrabold'>About Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <img data-aos="flip-left" className=' md:h-[400px] xl:h-[600px] xl:w-[400px] shadow-md shadow-gray-500' src={Person01} alt='person1'/>
            <img data-aos="flip-right" className=' md:h-[400px] xl:h-[600px] xl:w-[400px] shadow-md shadow-gray-500' src={Person03} alt='person3'/>
            <img data-aos="flip-left" className='  md:h-[400px] xl:h-[600px] xl:w-[400px] shadow-md shadow-gray-500' src={Person02} alt='person2'/>
        </div>
        <div>
            <p className=' text-xl text-white text-center mt-8 w-[80%] mx-auto'>
                Our team is made up of a group of highly skilled professionals in the field of technology. 
                We are passionate about helping people improve their quality of life and are committed to developing  
                innovative solutions to improve healthcare. 
                We hope our app will be useful to you and help you keep your health in order.
            </p>
            <button className='flex items-center bg-white text-black rounded-2xl 
                    text-3xl py-1 px-4 font-bold my-5 mx-auto'>
            Read more
            </button>
        </div>
    </div>
  )
}

export default SecondSect