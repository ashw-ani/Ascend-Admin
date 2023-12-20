import React, { useEffect, useState } from "react";
import styles from "./UserList.module.css";
import GetUsers from "../../../api/getUsers";
import { ReactComponent as Loader } from "../../../assets/signInButton.svg";
import ProfileCard from "../profileCard/ProfileCard";

export default function UserList({
  findUser,
  searchData,
  setSearchData,
  setpageEndHandler,
  page,
  limit
}) {
  const [UsersData, setUsersData] = useState();
  const [loader, setLoader] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [profileData, setprofileData] = useState();
  const [updateDataInProfile, setupdateDataInProfile] = useState(false);

  useEffect(() => {
    const collectData = async () => {
      if (searchData) {
        setUsersData(searchData);
      } else {
        setLoader(true);
        const Data = await GetUsers(page,limit);
        setUsersData(Data.contacts);
        if (Data?.dataEnd) {
          setpageEndHandler();
        }
      }
      setLoader(false);
    };
    collectData();
  }, [page,limit]);

  const onEditHandler = async (user) => {
    setprofileData(user);
    setShowCard(true);
  };

  if (loader) {
    return (
      <div className={styles.spinnerDiv}>
        <Loader className={styles.spinner} />
      </div>
    );
  }
  return (
    <>
      <div className={styles.users}>
        <table className={styles.customers} width="100%">
          <thead>
            <tr>
              <th>Email</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Joining Date</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {searchData === undefined
              ? UsersData?.map((item) => (
                <tr key={item.id}>
                  <td className={styles.tableColumn}>{item.email}</td>
                  <td className={styles.tableColumn}>{item.fullName}</td>
                  <td className={styles.tableColumn}>{item.phone}</td>
                  <td className={styles.tableColumn}>{item.joiningDate}</td>
                  <td>
                    <button
                      onClick={() => {
                        onEditHandler(item);
                      }}
                      className={styles.editButton}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
              : searchData?.map((item) => (
                <tr key={item.id}>
                  <td className={styles.tableColumn}>{item.email}</td>
                  <td className={styles.tableColumn}>{item.fullName}</td>
                  <td className={styles.tableColumn}>{item.phone}</td>
                  <td className={styles.tableColumn}>{item.joiningDate}</td>
                  <td>
                    <button
                      onClick={() => {
                        onEditHandler(item);
                      }}
                      className={styles.editButton}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {showCard && (
        <ProfileCard
          findUser={findUser}
          setSearchData={setSearchData}
          updateDataInProfile={updateDataInProfile}
          setupdateDataInProfile={setupdateDataInProfile}
          profileData={profileData}
          setprofileData={setprofileData}
          setLoader={setLoader}
          setShowCard={setShowCard}
        />
      )}
    </>
  );
}
