import Porsche from "../components/Porsche.tsx";
import AxesHelper from "../components/AxesHelper.tsx";
import {ThreeInitializer} from "../components/ThreeContext.tsx";

const ThreeScene = () => {
   return (
       <>
           <ThreeInitializer />
           {/*<Cube />*/}
           {/*<Light />*/}
           <Porsche/>
           <AxesHelper/>
       </>
   )
};

export default ThreeScene;
