import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props){
    const handleUserSearch = (event)=>{
        if(event.target.name==="user")
        {
            props.setFindUser(event.target.value);
        }
    }
    return (
        <div className={styles.searchInputDiv}>
            <input required name='user' onChange={handleUserSearch} className={styles.searchInput} placeholder={props.placeholderText}/>
        </div>
    );
};

export default SearchBar;