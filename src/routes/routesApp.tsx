import { Routes, Route } from "react-router-dom"
import HomeApp from '../pages/App/HomeApp';

interface Props {
    path: string,
}
function RoutesAppPath(props:Props) {

    const {path} = props;

  return (
    <>
        <Routes>
            <Route path={`${path}/homeApp`} element={<HomeApp/>}/>
        </Routes>
    </>
  )
}

export default RoutesAppPath