import React from "react";
import { useEffect, useState } from "react";
import Loader from "../components/Loader"; // Adjust the path as necessary

const useLoading = (dependencies) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if all dependencies are defined and not empty
    const allLoaded = dependencies.every(
      (dep) => dep !== undefined && (Array.isArray(dep) ? dep.length > 0 : true)
    );

    if (allLoaded) {
      setIsLoading(false);
    }
  }, [dependencies]); // Depend on changes in dependencies

  return [isLoading, <Loader />]; // Return loading state and loader component
};

export default useLoading;
