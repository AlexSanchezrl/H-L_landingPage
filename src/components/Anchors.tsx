
interface Props {
    url?: string, 
    text?:string,
    children?: JSX.Element,
}

function Anchors(props:Props) {
    const {text, url, children} = props;
  return (
    <div>
        <a href={url} className='hover:text-[#5CB9FF] transition-transform transform hover:scale-125'>{text}{children}</a>
    </div>
  )
}

export default Anchors