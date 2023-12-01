import React, { useEffect, useState } from 'react'
import styles from './UserList.module.css'
import GetUsers from '../../../api/getUsers';

export default function UserList() {
  const [UsersData,setUsersData] = useState();
  const [page,setPage] = useState(1);

  useEffect(()=>{
    const collectData = async () => {
    const Data = await GetUsers(page);
    console.log(Data);
    setUsersData(Data);
    };
    collectData();

  },[page]);
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
