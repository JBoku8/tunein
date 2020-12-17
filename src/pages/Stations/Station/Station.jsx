import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import stationContext from "../../../context/StationContext";
import Tags from "../../../components/Card/Tags";
import Audio from "../../../components/Media/Audio";

import styles from "./Station.module.css";

function Station(props) {
  const { stationsList } = useContext(stationContext);
  const [station, setStation] = useState(null);
  const { id: stationId } = useParams();

  useEffect(() => {
    if (stationsList) {
      const stat = stationsList.find((st) => st.id === stationId);
      setStation(stat);
    }
  }, [stationsList, stationId]);

  if (!station) {
    return (
      <div className="text-success">
        <h2>Station Loading...</h2>
      </div>
    );
  }
  return (
    <div className="row px-3">
      <div className="card w-100">
        <div className="card-header">
          <Link to="/">Back</Link>
        </div>
        <div className="card-body">
          <img
            className={`${styles["station--image"]} img-thumbnail`}
            src={station.imgUrl}
            alt={station.name}
          />
          <h5 className="card-title">{station.name}</h5>
          <p className="card-text">{station.description}</p>
          <p className="card-text">
            <Tags tags={station.tags} path="/" />
          </p>
          <Audio src={station.streamUrl} controls={true} />
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Station;
