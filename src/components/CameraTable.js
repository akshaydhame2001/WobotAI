import { FaTrash } from "react-icons/fa";
import {
  Checkbox,
  StatusG,
  StatusR,
  Warning,
  Cloud,
  Server,
  A,
  B,
  C,
  Null,
} from "../assets";
import { useCamera } from "../context/CameraContext";

export const CameraTable = () => {
  const {
    filteredCameras,
    currentPage,
    itemsPerPage,
    handleStatusUpdate,
    handleDelete,
  } = useCamera();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCameras = filteredCameras.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white overflow-hidden">
        <thead className="text-gray-3 border-b-[3px] border-gray-50">
          <tr className="p-9">
            <th className="px-2 py-4 flex justify-center items-center">
              <img src={Checkbox} alt="Checkbox Logo" />
            </th>
            <th className="py-4 text-left text-sm font-medium">NAME</th>
            <th className="py-4 text-left text-sm font-medium">HEALTH</th>
            <th className="px-4 py-4 text-left text-sm font-medium">
              LOCATION
            </th>
            <th className="px-4 py-4 text-left text-sm font-medium">
              RECORDER
            </th>
            <th className="px-4 py-4 text-center text-sm font-medium">TASKS</th>
            <th className="px-4 py-4 text-center text-sm font-medium">
              STATUS
            </th>
            <th className="py-4 text-center text-sm font-medium">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="text-gray-5 text-sm">
          {currentCameras.map((camera) => (
            <tr key={camera.id} className="border-b hover:bg-gray-50">
              <td className="px-2 py-5">
                <span className="flex justify-center items-center">
                  <img src={Checkbox} alt="Checkbox Logo" />
                </span>
              </td>
              <td className="py-5 flex items-center gap-1 whitespace-nowrap">
                <span>
                  {camera.current_status === "Online" ? (
                    <img src={StatusG} alt="Online Logo" />
                  ) : (
                    <img src={StatusR} alt="Offline Logo" />
                  )}
                </span>
                {camera.name}
                <span>
                  {camera.hasWarning && (
                    <img src={Warning} alt="Warning Logo" />
                  )}
                </span>
              </td>
              <td className="px-1 py-5 text-center">
                <div className="flex items-center space-x-2">
                  {camera.health.cloud && (
                    <span className="flex flext-start mr-3">
                      <img src={Cloud} alt="Cloud Logo" />
                      <img
                        src={
                          camera.health.cloud === "A"
                            ? A
                            : camera.health.cloud === "B"
                            ? B
                            : camera.health.cloud === "C"
                            ? C
                            : Null
                        }
                        alt="Cloud Health Rating"
                      />
                    </span>
                  )}
                  {camera.health.device && (
                    <span className="flex flex-end">
                      <img src={Server} alt="Server Logo" />
                      <img
                        src={
                          camera.health.device === "A"
                            ? A
                            : camera.health.device === "B"
                            ? B
                            : camera.health.device === "C"
                            ? C
                            : Null
                        }
                        alt="Device Health Rating"
                      />
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-5 whitespace-nowrap">{camera.location}</td>
              <td className="px-4 py-5 whitespace-nowrap">
                {camera.recorder || "N/A"}
              </td>
              <td className="px-4 py-5 text-center">{camera.tasks || "N/A"}</td>
              <td className="px-4 py-5 text-center">
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    camera.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-2 text-gray-5"
                  } cursor-pointer`}
                  onClick={() =>
                    handleStatusUpdate(
                      camera.id,
                      camera.status === "Active" ? "Inactive" : "Active"
                    )
                  }
                >
                  {camera.status}
                </span>
              </td>
              <td className="px-4 py-5 flex justify-center items-center">
                <FaTrash
                  onClick={() => handleDelete(camera.id)}
                  className="text-gray-5 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
