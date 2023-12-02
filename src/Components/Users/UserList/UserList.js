import React, { useEffect, useState } from 'react'
import styles from './UserList.module.css'
import GetUsers from '../../../api/getUsers';
import { ReactComponent as Loader } from "../../../assets/signInButton.svg";

export default function UserList({searchData, setpageEndHandler, page }) {
  const [UsersData, setUsersData] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const collectData = async () => {
      if(searchData){

      }
      else{
        setLoader(true);
        const Data = await GetUsers(page);
        console.log(Data);
        setUsersData(Data.contacts);
        if (Data?.dataEnd) {
          setpageEndHandler();
        }
      }
      setLoader(false);
    };
    collectData();

  }, [page]);
  if (loader) {
    return (
      <div className={styles.spinnerDiv}>
        <Loader className={styles.spinner} />
      </div>
    );
  }
  return (
    <div className={styles.users}>
      <table className={styles.customers} width="100%">
        <thead>
          <tr>
            <th>Email</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Joining Date</th>
          </tr>
        </thead>
        <tbody>
          {UsersData?.map((item) => (
            <tr key={item.id}>
              <td className={styles.tableColumn}>{item.email}</td>
              <td className={styles.tableColumn}>{item.fullName}</td>
              <td className={styles.tableColumn}>{item.phone}</td>
              <td className={styles.tableColumn}>{item.joiningDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
