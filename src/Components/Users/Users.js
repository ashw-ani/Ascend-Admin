import SearchBar from '../UI/Search Bar/SearchBar';
import styles from './Users.module.css'
import Button from '../UI/Search Bar/button';
import { useEffect, useState } from 'react';
import UserList from './UserList/UserList';


function Users(props){
    const [findUser,setFindUser] = useState();
    const onSubmitHandler = () => {
    }
    return (<div className={styles.container}>
    <div className={styles.userBody}>
        <SearchBar setFindUser={setFindUser}  placeholderText="Search for the user"/>
        <Button onClick={onSubmitHandler} text="Search"/>
    </div>
    <div className={styles.userList}>
        <UserList />
    </div>
    </div>);   
}


export default Users;