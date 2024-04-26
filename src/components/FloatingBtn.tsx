import { BsCapslockFill } from 'react-icons/bs';

function FloatingBtn() {
  return (
    <div data-aos="flip-left" className="fixed right-5 bottom-10 flex justify-center items-center bg-white border-4
     border-black rounded-full text-2xl p-3 w-16 h-16 z-30">
      <a href='#first_section' aria-label="Activate Caps Lock">
        <BsCapslockFill />
      </a>
    </div>
  );
}

export default FloatingBtn;
