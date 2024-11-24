import { useState, useEffect } from "react";
import { useCamera } from "../context/CameraContext";
import { Filters } from "./Filters";
import { CameraTable } from "./CameraTable";
import { Pagination } from "./Pagination";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "../hooks/useDebounce";

const CameraTableData = () => {
  const { loading, setFilterCamera } = useCamera();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500); // 500ms delay

  // Update filter when debounced search changes
  useEffect(() => {
    setFilterCamera(debouncedSearch);
  }, [debouncedSearch, setFilterCamera]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between mb-4">
        <div className="mb-4">
          <h1 className="text-2xl font-medium mb-2">Cameras</h1>
          <p className="text-gray-500">Manage your cameras here.</p>
        </div>

        {/* Search */}
        <div className="flex h-10 items-center space-x-2 bg-gray-1 px-4 py-2 rounded-lg w-full sm:w-auto border-2 border-gray-2">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search"
            className="w-full outline-none bg-gray-1 text-gray-700 placeholder-gray-4"
          />
          <button
            type="button"
            className="p-2 focus:outline-none rounded-md"
            aria-label="Search"
          >
            <FaSearch className="text-gray-600" />
          </button>
        </div>
      </div>

      <Filters />

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div>
          <CameraTable />
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default CameraTableData;
