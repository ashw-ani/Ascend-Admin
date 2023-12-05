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
    const [loader, setLoader] = useState(false);
    const [validation, setValidation] = useState({ searchItem: false, dropdown: false });

    useEffect(() => {
        if (!selectedValue)
            setValidation({ searchItem: false, dropdown: false })
        if (findUser && selectedValue)
            setValidation({ searchItem: true, dropdown: true });
        console.log(validation);
    }, [findUser, selectedValue]);
    const onSubmitHandler = async () => {
        const type = selectedValue;
        const Data = await FetchUsers(findUser, type);
        setpageEnd(true);
        setLoader(false);
        setSearchData(Data);
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
    }
    return (<div className={styles.container}>
        <div className={styles.userBody}>
            <SearchBar setFindUser={setFindUser} placeholderText="Search for the user" />
            <div className={styles.dropdown}>
                <label htmlFor="myDropdown">Search By :</label>
                <select required='true' id="myDropdown" value={selectedValue} onChange={handleSelectChange}>
                    <option value="">Select an option</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div className={styles.submitSearchButton}>
                <button onClick={onSubmitHandler} className={(validation.searchItem && validation.dropdown) ? styles.searchButton : styles.searchButtonDisabled}>Search</button>
            </div>
        </div>
        <div className={styles.pageButtonDiv}>
            <span>Page {page} [Max 10 entries]</span>
            <button className={styles.pageButtons} onClick={prevButtonHandler}>{'<'}</button>
            {!pageEnd ? <button className={styles.pageButtons} onClick={nextButtonHandler}>{'>'}</button> : <button disabled className={styles.pageButtonsDisabled} >{'>'}</button>}
        </div>
        <div className={styles.userList}>
            <UserList searchData={searchData} setSearchData={setSearchData} setpageEndHandler={setpageEndHandler} page={page} />
        </div>
    </div>);
}


export default Users;