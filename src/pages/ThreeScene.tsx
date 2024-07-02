import Porsche from "../components/vanilla/Porsche.tsx";
import AxesHelper from "../components/vanilla/AxesHelper.tsx";
import { ThreeInitializer } from "../components/vanilla/ThreeInitializer.tsx";

const ThreeScene = () => {
    return (
        <>
            <ThreeInitializer />
            {/*<Cube />*/}
            {/*<Light />*/}
            <Porsche />
            <AxesHelper />
        </>
    );
};

export default ThreeScene;
