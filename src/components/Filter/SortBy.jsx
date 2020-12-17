const sortTypes = [
  {
    value: "popularity_asc",
    label: "Popularity ASC",
  },
  {
    value: "popularity_desc",
    label: "popularity DESC",
  },
  {
    value: "reliability_asc",
    label: "reliability ASC",
  },
  {
    value: "reliability_desc",
    label: "reliability DESC",
  },
];

function SortBy({ setFilter }) {
  return (
    <div className="input-group col-md-6 mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="sortBySelect">
          Sort By
        </label>
      </div>
      <select
        className="custom-select"
        id="sortBySelect"
        onChange={({ target }) => setFilter(target.value)}
      >
        <option value="">Select</option>
        {sortTypes.map((sorter) => {
          return (
            <option value={sorter.value} key={sorter.value}>
              {sorter.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SortBy;
