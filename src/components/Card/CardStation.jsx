import { Link } from "react-router-dom";

function CardStation({ station }) {
  return (
    <div className="card col-4 mb-2">
      <img className="card-img-top" src={station.imgUrl} alt={station.name} />
      <div className="card-body">
        <h5 className="card-title">{station.name}</h5>
        <p className="card-text">
          {station.tags &&
            station.tags.map((tag) => {
              return (
                <Link
                  className="badge badge-info"
                  key={tag}
                  to={{
                    pathname: "/",
                    search: `tag=${tag}`,
                  }}
                >
                  {tag}
                </Link>
              );
            })}
        </p>
        <p className="d-flex justify-content-between">
          <button type="button" class="btn btn-primary">
            reliability
            <span class="badge badge-light">{station.reliability}</span>
          </button>

          <button type="button" class="btn btn-info">
            popularity
            <span class="badge badge-light">{station.popularity}</span>
          </button>
        </p>
        <Link to="#" className="btn btn-success">
          Play
        </Link>
      </div>
    </div>
  );
}

export default CardStation;
