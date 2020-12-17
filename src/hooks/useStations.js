import Axios from "axios";
import { useEffect, useState } from "react";

function useStations() {
  const [stations, setStations] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await Axios.get("/stations.json");
        setStations(result.data.data);
      } catch (er) {}
    })();
  }, []);

  const filterByTag = (tag) => {
    return stations.filter((station) => {
      if (station.tags) {
        return station.tags.includes(tag);
      }
      return false;
    });
  };

  return {
    stations,
    filterByTag,
  };
}

export default useStations;
