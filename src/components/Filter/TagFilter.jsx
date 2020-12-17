function TagFilter({ tags, setTag }) {
  return (
    <div className="input-group col-md-6 mb-3">
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
  );
}

export default TagFilter;
