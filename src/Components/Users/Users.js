import SearchBar from '../UI/Search Bar/SearchBar';
import styles from './Users.module.css'
import Button from '../UI/Search Bar/button';
import { useState } from 'react';


function Users(props){
    const [findUser,setFindUser] = useState();
    const onSubmitHandler = () => {
        console.log(findUser);
    }
    return (<>
    <div className={styles.userBody}>
        <SearchBar setFindUser={setFindUser}  placeholderText="Search for the user"/>
        <Button onClick={onSubmitHandler} text="Search"/>
    </div>
    <div className={styles.userList}></div>
    </>);   
}


export default Users;