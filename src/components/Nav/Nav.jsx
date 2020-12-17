import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item" aria-current="page">
          <NavLink to="/" activeClassName="active">
            Stations
          </NavLink>
        </li>
      </ol>
      <div className="filters">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="sortBySelect">
              Sort By
            </label>
          </div>
          <select className="custom-select" id="sortBySelect">
            <option value="popularity">popularity</option>
            <option value="reliability">reliability</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
