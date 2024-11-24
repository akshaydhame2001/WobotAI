import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useCamera } from "../context/CameraContext";

export const Pagination = () => {
  const {
    filteredCameras,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
  } = useCamera();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pageCount = Math.ceil(filteredCameras.length / itemsPerPage);

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setIsDropdownOpen(false);
    setCurrentPage(1);
  };

  return (
    <div className="flex justify-end items-center space-x-2 bg-white h-12">
      <div className="relative">
        {/* itemsPerPage */}
        <div
          className="flex items-center p-2 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-xs text-gray-700 mr-1">{itemsPerPage}</span>
          <FaChevronDown
            className={`text-xs text-gray-4 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {isDropdownOpen && (
          <ul className="absolute bottom-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-10">
            {[10, 20, 30, 50].map((value) => (
              <li
                key={value}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleItemsPerPageChange(value)}
              >
                {value}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Cameras out of Total */}
      <div className="text-xs text-gray-5">
        {indexOfFirstItem + 1}-
        {Math.min(indexOfLastItem, filteredCameras.length)} of{" "}
        {filteredCameras.length}
      </div>
      {/* Pagination Navigation */}
      <button
        onClick={() => setCurrentPage(1)}
        className="px-1 py-1 text-gray-4 hover:text-gray-700 focus:outline-none"
      >
        <MdKeyboardDoubleArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
        className="px-1 py-1 text-gray-4 hover:text-gray-700 focus:outline-none"
      >
        <MdKeyboardArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() =>
          setCurrentPage(currentPage < pageCount ? currentPage + 1 : pageCount)
        }
        className="px-1 py-1 text-gray-4 hover:text-gray-700 focus:outline-none"
      >
        <MdKeyboardArrowRight className="h-5 w-5" />
      </button>
      <button
        onClick={() => setCurrentPage(pageCount)}
        className="px-1 py-1 text-gray-4 hover:text-gray-700 focus:outline-none"
      >
        <MdKeyboardDoubleArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};
