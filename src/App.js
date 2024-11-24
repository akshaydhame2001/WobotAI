import { CameraProvider } from "../src/context/CameraContext";
import CameraTableData from "./components/CameraTableData";
import { wobot } from "../src/assets";

function App() {
  return (
    <CameraProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 pb-6 font-inter">
        <header className="mt-6 mb-10">
          <img src={wobot} alt="Logo" className="w-36" />
        </header>
        <CameraTableData />
      </div>
    </CameraProvider>
  );
}

export default App;
