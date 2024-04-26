
interface Props {
    url: string,
    text?: string, 
    children?: JSX.Element,
}
function Link(props: Props) {
    const { url, text, children } = props;

  const routePATH = "/H-L_landingPage";

  return (
    <a href={`${routePATH}${url}`}>
        {text}{children}
    </a>
  )
}

export default Link