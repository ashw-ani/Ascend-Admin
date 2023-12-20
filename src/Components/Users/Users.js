import SearchBar from "../UI/Search Bar/SearchBar";
import styles from "./Users.module.css";
import Button from "../UI/Search Bar/button";
import { useEffect, useState } from "react";
import UserList from "./UserList/UserList";
import FetchUsers from "../../api/FetchUsers";
import NewUserCard from "../Users/addNewUser/NewUserCard";

function Users(props) {
  const [findUser, setFindUser] = useState();
  const [page, setPage] = useState(1);
  const [editCard, setEditCard] = useState(false);
  const [pageEnd, setpageEnd] = useState(false);
  const [searchData, setSearchData] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [selectPage, setSelectPage] = useState();
  const [validation, setValidation] = useState({
    searchItem: false,
    dropdown: false,
  });

  useEffect(() => {
    if (!selectedValue) setValidation({ searchItem: false, dropdown: false });
    if (findUser && selectedValue)
      setValidation({ searchItem: true, dropdown: true });
    console.log(validation);
  }, [findUser, selectedValue, selectPage]);
  const onSubmitHandler = async () => {
    const type = selectedValue;
    const Data = await FetchUsers(findUser, type, selectPage);
    console.log(Data);
    setpageEnd(true);
    setLoader(false);
    setSearchData(Data);
  };
  const newUserHandler = () => {
    setEditCard(true);
  };
  const nextButtonHandler = () => {
    const nextVal = page + 1;
    setPage(nextVal);
  };
  const prevButtonHandler = () => {
    if (page > 1) {
      const prevVal = page - 1;
      setPage(prevVal);
      setpageEnd(false);
    }
  };
  const setpageEndHandler = () => {
    setpageEnd(true);
  };
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSelectPageChange = (event) => {
    setSelectPage(event.target.value);
    console.log(selectPage);
  };
  return (
    <div className={styles.container}>
      {editCard && (
        <div className={styles.card}>
          <NewUserCard title="New User" type="users" />
        </div>
      )}
      <div className={styles.userBody}>
        <SearchBar
          setFindUser={setFindUser}
          placeholderText="Search for the user"
        />
        <div className={styles.searchButtonWrapper}>
          <div className={styles.dropdown}>
            <label htmlFor="myDropdown"></label>
            <select
              required="true"
              id="myDropdown"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">Search By</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="name">Name</option>
              <option value="team">Team Name</option>
            </select>
          </div>
          <div className={styles.submitSearchButton}>
            <button
              onClick={onSubmitHandler}
              className={
                validation.searchItem && validation.dropdown
                  ? styles.searchButton
                  : styles.searchButtonDisabled
              }
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className={styles.pageButtonDiv}>
        <button onClick={newUserHandler} className={styles.addUsersButton}>
          Add User
        </button>
        <div className={styles.buttonWrapper}>
          <div className={styles.addUsersButtonDiv}>
            <div className={styles.dropdown}>
              {/* Dropdown select */}
              <select value={selectPage} onChange={handleSelectPageChange}>
                <option value="">Select number of Entries</option>
                <option value="10">10 Entries</option>
                <option value="25">25 Entries</option>
                <option value="50">50 Entries</option>
                <option value="100">100 Entries</option>
              </select>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.pageChangeButtons}>
              <button
                className={styles.pageButtons}
                onClick={prevButtonHandler}
              >
                {"<"}
              </button>
              <span>{page}</span>
              {!pageEnd ? (
                <button
                  className={styles.pageButtons}
                  onClick={nextButtonHandler}
                >
                  {">"}
                </button>
              ) : (
                <button disabled className={styles.pageButtonsDisabled}>
                  {">"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.userList}>
        <UserList
          findUser={findUser}
          searchData={searchData}
          setSearchData={setSearchData}
          setpageEndHandler={setpageEndHandler}
          page={page}
          limit={selectPage}
        />
      </div>
    </div>
  );
}

export default Users;
