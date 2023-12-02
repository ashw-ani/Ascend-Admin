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
    const [selectedValue, setSelectedValue] = useState('');

    const onSubmitHandler = async () => {
        const type = selectedValue;
        console.log('====================================');
        console.log("here from submit handler",findUser,selectedValue);
        console.log('====================================');
        const Data = await FetchUsers(findUser,type);
        console.log('====================================');
        console.log("given data",Data);
        console.log('====================================');
        setSearchData(Data[0]);
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
    const setpageEndHandler = () => {
        setpageEnd(true);
    }
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (<div className={styles.container}>
        <div className={styles.userBody}>
            <SearchBar setFindUser={setFindUser} placeholderText="Search for the user" />
            <div className={styles.dropdown}>
                <label htmlFor="myDropdown">Search By :</label>
                <select id="myDropdown" value={selectedValue} onChange={handleSelectChange}>
                    <option value="">Select an option</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <Button onClick={onSubmitHandler} text="Search" />
        </div>
        <div className={styles.pageButtonDiv}>
            <span>Page {page}</span>
            <button className={styles.pageButtons} onClick={prevButtonHandler}>{'<'}</button>
            {!pageEnd ? <button className={styles.pageButtons} onClick={nextButtonHandler}>{'>'}</button> : <button disabled className={styles.pageButtonsDisabled} >{'>'}</button>}
        </div>
        <div className={styles.userList}>
            <UserList searchData={searchData} setpageEndHandler={setpageEndHandler} page={page} />
        </div>
    </div>);
}


export default Users;