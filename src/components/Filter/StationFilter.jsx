function StationFilter({ setFilter, setTag, tags }) {
  return (
    <div className="filters">
      <div className="input-group mb-3">
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
          <option value="popularity_asc">popularity ASC</option>
          <option value="popularity_desc">popularity DESC</option>
          <option value="reliability_asc">reliability ASC</option>
          <option value="reliability_desc">reliability DESC</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="sortBySelect">
            Select Tag
          </label>
        </div>
        <select
          className="custom-select"
          id="sortBySelect"
          onChange={({ target }) => setTag(target.value)}
        >
          <option value="">Select</option>
          {tags &&
            tags.map((tag) => {
              return (
                <option value={tag} key={tag}>
                  {tag}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default StationFilter;
