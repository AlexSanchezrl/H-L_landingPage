import FirstSect from "../components/Sections/FirstSect";
import SecondSect from "../components/Sections/SecondSect";
import ThirtSect from "../components/Sections/ThirtSect";
import FourthSect from "../components/Sections/FourthSect";
import FormGmail from "../components/Contactenos";
function Home() {
  return (

    <div className='flex flex-col gap-5'>
        <div id='first_section' className=" w-screen h-auto xl:h-screen">
            <FirstSect/>
        </div>
        <div id='second_section'  className=" bg-black/90 w-full 
        shadow-lg shadow-slate-700">
          <SecondSect/>
        </div>
        <div id='our_app_section' className=" w-full bg-slate-50 mt-10">
            <FourthSect/>
        </div>
        <div id='what_we_offer_section' className="w-full ">
            <ThirtSect/>
        </div>
        <div id='support_section' className=" w-full mx-auto bg-black/90 p-2 md:p-10 mb-10 shadow-lg shadow-slate-700">
            <FormGmail/>
        </div>
    </div>
  )
}

export default Home