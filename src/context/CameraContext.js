import React, { createContext, useContext, useState, useEffect } from "react";
import { data } from "../db/db";

// const API_URL = "https://api-app-staging.wobot.ai/app/v1/fetch/cameras";
// const API_TOKEN = "process.env.REACT_APP_BEARER_TOKEN";

const CameraContext = createContext();

export const CameraProvider = ({ children }) => {
  const [cameras, setCameras] = useState([]);
  const [filteredCameras, setFilteredCameras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterLocation, setFilterLocation] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCamera, setFilterCamera] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // API Call
  //   useEffect(() => {
  //     fetchCameras();
  //   }, []);

  //   const fetchCameras = async () => {
  //     try {
  //       const response = await axios.get(API_URL, {
  //         headers: { Authorization: `Bearer ${API_TOKEN}` },
  //       });
  //       setCameras(response.data.data);
  //       setFilteredCameras(response.data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching cameras:", error);
  //       setLoading(false);
  //     }
  //   };

  //   const handleStatusUpdate = async (id, newStatus) => {
  //     try {
  //       await axios.post(
  //         "https://api-app-staging.wobot.ai/app/v1/update/camera/status",
  //         { id, status: newStatus },
  //         { headers: { Authorization: `Bearer ${API_TOKEN}` } }
  //       );

  //       const updatedCameras = filteredCameras.map((camera) =>
  //         camera.id === id ? { ...camera, status: newStatus } : camera
  //       );

  //       setFilteredCameras(updatedCameras);
  //     } catch (error) {
  //       console.error("Error updating camera status:", error);
  //     }
  //   };

  useEffect(() => {
    setTimeout(() => {
      setCameras(data);
      setFilteredCameras(data);
      setLoading(false);
    }, 0);
  }, []);

  useEffect(() => {
    setFilteredCameras(
      cameras.filter(
        (camera) =>
          (filterLocation === "" || camera.location === filterLocation) &&
          (filterStatus === "" || camera.status === filterStatus) &&
          (filterCamera === "" ||
            camera.name.toLowerCase().includes(filterCamera.toLowerCase()))
      )
    );
    setCurrentPage(1);
  }, [cameras, filterLocation, filterStatus, filterCamera]);

  const handleStatusUpdate = (id, newStatus) => {
    const updatedCameras = filteredCameras.map((camera) =>
      camera.id === id ? { ...camera, status: newStatus } : camera
    );
    setFilteredCameras(updatedCameras);
  };

  const handleDelete = (id) => {
    const updatedCameras = filteredCameras.filter((camera) => camera.id !== id);
    setFilteredCameras(updatedCameras);
  };

  return (
    <CameraContext.Provider
      value={{
        cameras,
        filteredCameras,
        loading,
        currentPage,
        setCurrentPage,
        filterLocation,
        setFilterLocation,
        filterStatus,
        setFilterStatus,
        filterCamera,
        setFilterCamera,
        itemsPerPage,
        setItemsPerPage,
        handleStatusUpdate,
        handleDelete,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};

export const useCamera = () => useContext(CameraContext);
