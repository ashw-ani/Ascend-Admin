import SearchBar from '../UI/Search Bar/SearchBar';
import styles from './Users.module.css'
import Button from '../UI/Search Bar/button';
import { useState } from 'react';


function Users(props){
    const [findUser,setFindUser] = useState('');
    return (<>
    <div className={styles.userBody}>
        <SearchBar  placeholderText="Search for the user"/>
        <Button text="Search"/>
    </div>
    </>);   
}


export default Users;