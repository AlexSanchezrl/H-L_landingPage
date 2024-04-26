import { useState } from 'react'
import AppExample from '../../assets/img/exampleApp.jpeg'
import AppLogo from '../../assets/img/icon6.png';
function FourthSect() {
    const [showInfo, setSowInfo] = useState(false);
    const handleShow = () => {
        setSowInfo(!showInfo)
    }
  return (
    <div className= {`container mx-auto ${showInfo ? 'bg-secondary' : 'bg-principal'} ease-in-out duration-300 rounded-none lg:rounded-b-3xl shadow-lg shadow-black`}>
        <div className=' flex-1 flex flex-col-reverse lg:flex lg:flex-row justify-center p-5 gap-5 items-center '>
            <div className={`${showInfo && 'bg-[#ff3654]'} mx-auto bg-white p-2 shadow-lg shadow-black w-fit`}>
                <img className=' rounded-b-full border-2 border-black/90' width={400} height={300} src={AppExample} alt='App example image'/>
            </div>
            <div className={`flex flex-col flex-1 p-2 lg:p-5 justify-center border-y-4 lg:border-r-4 lg:border-b-4  
            ${showInfo && 'border-[#ff3654]'}
            text-white`}>
                <h1 className='text-center text-4xl font-extrabold '>Health&Life App</h1>
                <p className=' text-xl lg:text-2xl text-center my-12'>
                    Health&Life is a revolutionary application designed to strengthen the relationship between doctors and patients, 
                    optimising healthcare management from anywhere. With an intuitive interface and a secure design, Health&Life facilitates 
                    fluid and direct communication between the healthcare professional and the user, enabling a personalised and efficient medical follow-up.
                </p>
                <div className='flex justify-center p-2'>
                {!showInfo ?
                <button onClick={handleShow} className=' bg-red-400 text-xl font-bold py-2 px-5 
                rounded-2xl border-2 border-black/90 text-white'>Show More</button>
                :
                <button onClick={handleShow} className=' bg-blue-400 text-xl font-bold py-2 px-5 
                rounded-2xl border-2 border-black/90 text-white'>Show Less</button>
                }
                </div>
                {
                showInfo ? 
                <p className='text-xl lg:text-2xl font-bold text-center items-center mt-5'>
                 Health&Life not only simplifies the management of medical needs but also strengthens the doctor-patient relationship, creating an environment of trust and ongoing support. This application is ideal for any 
                    healthcare professional who wants to improve the efficiency of their practice and provide exceptional service to their patients.
                </p>
                :
                <div className='mx-auto p-5 mt-5'>
                    <img width={300} height={300} src={AppLogo} alt='HealthAndLife Logo'/>
                </div>
                }
            </div>
        </div>

    </div>
  )
}

export default FourthSect