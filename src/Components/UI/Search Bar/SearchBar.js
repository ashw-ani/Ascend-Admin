import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props){
    return (
        <div className={styles.searchInputDiv}>
            <input className={styles.searchInput} placeholder={props.placeholderText}/>
        </div>
    );
};

export default SearchBar;