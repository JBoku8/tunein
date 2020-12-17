import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/CardStation";

import useStations from "../../hooks/useStations";

function Stations(props) {
  // const { routes } = props;
  const { stations, filterByTag } = useStations();
  const location = useLocation();

  useEffect(() => {}, [stations]);

  useEffect(() => {
    const d = new URLSearchParams();
  }, [location]);

  return (
    <div className="row w-100">
      {stations &&
        stations.map((station) => {
          return <Card key={station.id} station={station} />;
        })}
    </div>
  );
}

export default Stations;
