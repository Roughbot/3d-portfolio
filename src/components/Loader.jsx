import { Html } from "@react-three/drei";
import loadGif from "../assets/images/loader.gif";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-capacity border-blue-500 border-t-blue-500 animate-spin rounded-full">
          <img className="bg-white rounded-full" src={loadGif} />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
