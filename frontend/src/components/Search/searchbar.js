import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import './search.css';

export function SearchBar() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const path = useLocation();

  const onSubmit = async (e) => {
    e.preventDefault();
    history.push(`/search?q=${search}`);
    setSearch("");
  };

  if ((path.pathname == "/")) {
    return (   
        <div id="splash_searchbar">
          <form onSubmit={onSubmit} className="search-div">
            <div className="search-input-bar">
              <input
                type="text"
                value={search}
                placeholder="Search for artists, tracks, games"
                onChange={(e) => setSearch(e.target.value)}
                id="search-input"
              />
            </div>
            <button className="search-btn">
                <i className="fas fa-search"></i>
            </button>
          </form>
          <h3 id="splash-or">
            or
          </h3>
          <button id="splash-upload">
            Upload your Own
          </button>
        </div>
    );
  } else {
    return (
      <div id="searchbar">
        <form onSubmit={onSubmit} className="search-div">
          <div className="search-input-bar">
            <input
              type="text"
              value={search}
              placeholder="Search for artists, tracks, games"
              onChange={(e) => setSearch(e.target.value)}
              className="searchbar-input"
            />
          </div>
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass fa-large fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}
