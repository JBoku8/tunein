import { useEffect, useState, useContext } from "react";
import _ from "lodash";

import CardStation from "../../components/Card/CardStation";
import StationFilter from "../../components/Filter/StationFilter";

import stationContext from "../../context/StationContext";

function Stations(props) {
  // const { routes } = props;
  const { tagsList, stationsList } = useContext(stationContext);

  const [stations, setStations] = useState(null);
  const [filter, setFilter] = useState(null);
  const [tag, setTag] = useState(null);

  useEffect(() => {
    setStations(stationsList);
  }, [stationsList, tagsList]);

  useEffect(() => {
    if (filter) {
      const [field, mode] = filter.split("_");
      const sorted = _.orderBy(stationsList, [field], [mode]);
      setStations(sorted);
    } else {
      setStations(stationsList);
    }
  }, [filter, stationsList]);

  useEffect(() => {
    if (tag) {
      const filtered = _.filter(stationsList, (station) =>
        station.tags.includes(tag)
      );
      setStations(filtered);
    } else {
      setStations(stationsList);
    }
  }, [tag, stationsList]);

  return (
    <div className="row w-100 m-0">
      <div className="col-12">
        <StationFilter setFilter={setFilter} setTag={setTag} tags={tagsList} />
      </div>
      <div className="row px-3">
        {stations &&
          stations.map((station) => {
            return (
              <CardStation
                key={station.id}
                station={station}
                className="col-4 mx-auto"
              />
            );
          })}
      </div>
    </div>
  );
}

export default Stations;
