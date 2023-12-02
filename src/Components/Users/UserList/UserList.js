import React, { useEffect, useState } from 'react'
import styles from './UserList.module.css'
import GetUsers from '../../../api/getUsers';
import { ReactComponent as Loader } from "../../../assets/signInButton.svg";
import noimage from "../../../assets/no-image.svg";
import UpdateUser from '../../../api/UpdateUser';


export default function UserList({ searchData, setpageEndHandler, page }) {
  const [UsersData, setUsersData] = useState();
  const [loader, setLoader] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [profileData, setprofileData] = useState();
  const [updateDataInProfile,setupdateDataInProfile] = useState(false);


  const profileUpdateHandler = async ()=>{
    const Data = await UpdateUser(profileData);
    console.log('====================================');
    console.log(Data);
    console.log('====================================');
    setupdateDataInProfile(!updateDataInProfile);
    setprofileData(Data);
  }
  useEffect(() => {
    
    const collectData = async () => {
      if (searchData) {
        setUsersData(searchData);
      }
      else {
        setLoader(true);
        const Data = await GetUsers(page);
        setUsersData(Data.contacts);
        if (Data?.dataEnd) {
          setpageEndHandler();
        }
      }
      setLoader(false);
    };
    collectData();

  }, [page,updateDataInProfile]);

  const onEditHandler = (user) => {
    setprofileData(user);
    setShowCard(true);
  }
  const formChangeHandler = (event) => {
    setprofileData((prevData)=>{
      return { ...prevData, [event.target.name]: event.target.value };
    })
  }
  

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
            {searchData === undefined ? UsersData?.map((item) => (
              <tr key={item.id}>
                <td className={styles.tableColumn}>{item.email}</td>
                <td className={styles.tableColumn}>{item.fullName}</td>
                <td className={styles.tableColumn}>{item.phone}</td>
                <td className={styles.tableColumn}>{item.joiningDate}</td>
                <td><button onClick={() => { onEditHandler(item) }} className={styles.editButton}>Edit</button></td>
              </tr>
            )) : (<tr key={searchData.id}>
              <td className={styles.tableColumn}>{searchData.email}</td>
              <td className={styles.tableColumn}>{searchData.fullName}</td>
              <td className={styles.tableColumn}>{searchData.phone}</td>
              <td className={styles.tableColumn}>{searchData.joiningDate}</td>
              <td><button onClick={() => { onEditHandler(searchData) }} className={styles.editButton}>Edit</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {showCard && <div className={styles.profileWrapper}>
        <div className={styles.userCard}>
          <div className={styles.profileHeader}>
            <h3 className={styles.profileEdit}>Profile Edit</h3>
            <button onClick={() => setShowCard(false)} className={styles.closeButton}>X</button>
          </div>
          <div className={styles.profileBody}>
            <div className={styles.profileBodyDiv}>
            <div className={styles.profileDataImage}>
                <img className={styles.profileImage} alt='Profile Pic' src={profileData.imgUrl?profileData.imgUrl:noimage}></img>
              </div>
              <div className={styles.userDetails}>
                <span>First Name</span>
                <input name='firstName' onChange={formChangeHandler} value={profileData.firstName}></input>
              </div>
              <div className={styles.userDetails}>
                <span>Last Name</span>
                <input name='lastName' onChange={formChangeHandler} value={profileData.lastName}></input>
              </div>
              <div className={styles.userDetails}>
                <span>Full Name</span>
                <input name='fullName' onChange={formChangeHandler} value={profileData.fullName}></input>
              </div>
              <div className={styles.userDetails}>
                <span>Email</span>
                <input name='email' onChange={formChangeHandler} value={profileData.email}></input>
              </div>
              <div className={styles.userDetails}>
                <span>Phone</span>
                <input name='phone' onChange={formChangeHandler} value={profileData.phone}></input>
              </div>
              
            </div>
            <div className={styles.profileBodyDiv}>

              <div className={styles.userDetails}>
                <span>Achievement Level</span>
                <input name='achievementLevel' onChange={formChangeHandler} value={profileData.achievementLevel}></input>
              </div>

              <div className={styles.userDetails}>
                <span>Team Name</span>
                <input name='teamName' onChange={formChangeHandler} value={profileData.teamName}></input>
              </div>
              <div className={styles.userDetails}>
                <span>Tier</span>
                <input name='tier' onChange={formChangeHandler} value={profileData.tier}></input>
              </div>
              <div className={styles.userDetails}>
                <span>Image URL</span>
                <input name='imgUrl' onChange={formChangeHandler} value={profileData.imgUrl}></input>
              </div>
              <div className={styles.userDetails}>
                <span>Joining Date</span>
                <input name='joiningDate' onChange={formChangeHandler} value={profileData.joiningDate}></input>
              </div>
              <div className={styles.userDetails}>
                <span>End Date</span>
                <input name='endDate' onChange={formChangeHandler} value={profileData.endDate}></input>
              </div>
              <div className={styles.userDetails}>
                <span>City</span>
                <input name='city' onChange={formChangeHandler} value={profileData.city}></input>
              </div>
              <div className={styles.userDetails}>
                <span>Niche</span>
                <input name='niche' onChange={formChangeHandler} value={profileData.niche}></input>
              </div>
              <div className={styles.updateButtonDiv}>
              <button onClick={profileUpdateHandler} className={styles.updateButton}>Update</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}
