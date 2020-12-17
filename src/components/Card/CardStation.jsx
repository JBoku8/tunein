import { Link } from "react-router-dom";
import Tags from "./Tags";

function CardStation({ station, className }) {
  return (
    <div className={`card mb-2 ${className}`}>
      <Link to={`/station/${station.id}`}>
        <img
          className="card-img-top img-thumbnail"
          src={station.imgUrl}
          alt={station.name}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{station.name}</h5>
        <p className="card-text">
          <Tags tags={station.tags} path="/" />
        </p>
        <p className="d-flex justify-content-between">
          <button type="button" className="btn btn-primary">
            <span className="font-weight-bold">reliability </span>
            <span className="badge badge-light">{station.reliability}</span>
          </button>

          <button type="button" className="btn btn-info">
            <span className="font-weight-bold">popularity </span>
            <span className="badge badge-light">{station.popularity}</span>
          </button>
        </p>
        <Link to={`/station/${station.id}`} className="btn btn-success">
          Play
        </Link>
      </div>
    </div>
  );
}

export default CardStation;
