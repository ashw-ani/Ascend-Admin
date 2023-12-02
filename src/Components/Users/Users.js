import SearchBar from '../UI/Search Bar/SearchBar';
import styles from './Users.module.css'
import Button from '../UI/Search Bar/button';
import { useEffect, useState } from 'react';
import UserList from './UserList/UserList'
import FetchUsers from '../../api/FetchUsers';


function Users(props) {
    const [findUser, setFindUser] = useState();
    const [page, setPage] = useState(1);
    const [pageEnd, setpageEnd] = useState(false);
    const [searchData, setSearchData] = useState();

    const onSubmitHandler = (event) => {
       const Data = FetchUsers(event.target.value);
        setSearchData(searchData);
    }
    const nextButtonHandler = () => {
        const nextVal = page + 1;
        setPage(nextVal);
    }
    const prevButtonHandler = () => {
        if (page > 1) {
            const prevVal = page - 1;
            setPage(prevVal);
            setpageEnd(false);
        }
    }
    const setpageEndHandler = () =>{
        setpageEnd(true);
    }
    return (<div className={styles.container}>
        <div className={styles.userBody}>
            <SearchBar setFindUser={setFindUser} placeholderText="Search for the user" />
            <Button onClick={onSubmitHandler} text="Search" />
        </div>
        <div className={styles.pageButtonDiv}>
            <span>Page {page}</span>
            <button className={styles.pageButtons} onClick={prevButtonHandler}>{'<'}</button>
            {!pageEnd ? <button className={styles.pageButtons} onClick={nextButtonHandler}>{'>'}</button> : <button disabled className={styles.pageButtonsDisabled} >{'>'}</button>}
        </div>
        <div className={styles.userList}>
            <UserList searchData={searchData}  setpageEndHandler={setpageEndHandler} page={page} />
        </div>
    </div>);
}


export default Users;