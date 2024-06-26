import React from 'react';
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type='text'
          placeholder='Search a song of your choice'
        />
        <button className={styles.searchButton}>
          <SearchIcon className={styles.searchIcon} />
        </button>
      </div>
    </div>
  );
}

export default Search;
