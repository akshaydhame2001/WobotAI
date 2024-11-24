import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Location, Feed } from "../assets";
import { useCamera } from "../context/CameraContext";

export const Filters = () => {
  const {
    cameras,
    filterLocation,
    setFilterLocation,
    filterStatus,
    setFilterStatus,
  } = useCamera();

  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const locations = [...new Set(cameras.map((camera) => camera.location))];
  const statuses = ["Active", "Inactive"];

  const handleLocationSelect = (value) => {
    setFilterLocation(value);
    setLocationDropdownOpen(false);
  };

  const handleStatusSelect = (value) => {
    setFilterStatus(value);
    setStatusDropdownOpen(false);
  };

  return (
    <div className="flex flex-wrap mb-1 gap-4 bg-white">
      {/* Location Filter */}
      <div className="relative">
        <div
          className="flex w-auto md:w-52 m-2 justify-between items-center border rounded-sm p-2 space-x-2 bg-white shadow-sm cursor-pointer"
          onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
        >
          <div className="flex items-center gap-2">
            <img src={Location} alt="location logo" />
            <span className="text-gray-500 text-sm">
              {filterLocation || "Location"}
            </span>
          </div>
          <FaChevronDown
            className={`text-gray-500 transition-transform ${
              locationDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {/* Location Dropdown */}
        {locationDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-10 max-h-40 overflow-y-auto">
            <ul className="py-1">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect("")}
              >
                All Locations
              </li>
              {locations.map((location) => (
                <li
                  key={location}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLocationSelect(location)}
                >
                  {location}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Status Filter */}
      <div className="relative">
        <div
          className="flex w-auto md:w-40 m-2 justify-between items-center border rounded-sm p-2 space-x-2 bg-white shadow-sm cursor-pointer"
          onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
        >
          <div className="flex items-center gap-2">
            <img src={Feed} alt="Feed logo" />
            <span className="text-gray-500 text-sm">
              {filterStatus || "Status"}
            </span>
          </div>
          <FaChevronDown
            className={`text-gray-500 transition-transform ${
              statusDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {/* Status Dropdown */}
        {statusDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-10">
            <ul className="py-1">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleStatusSelect("")}
              >
                All Statuses
              </li>
              {statuses.map((status) => (
                <li
                  key={status}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleStatusSelect(status)}
                >
                  {status}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
