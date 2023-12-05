import { useState } from 'react';
import styles from './ProfileCard.module.css';
import UpdateUser from '../../../api/UpdateUser';
import noimage from "../../../assets/no-image.svg";
import { ReactComponent as Loader } from "../../../assets/signInButton.svg";
import { useEffect } from 'react';


export default function ProfileCard({updateDataInProfile,setupdateDataInProfile,profileData,setprofileData,setLoader,setShowCard}) {
    

    const profileUpdateHandler = async () => {
        setLoader(true);
        if (profileData.firstName && profileData.lastName)
            profileData.fullName = profileData.firstName + " " + profileData.lastName;
        else if (profileData.firstName)
            profileData.fullName = profileData.firstName;
        else if (profileData.lastName)
            profileData.fullName = profileData.lastName;
        else
            profileData.fullName = "";

        const Data = await UpdateUser(profileData);
        console.log('====================================');
        console.log(Data);
        console.log('====================================');
        setupdateDataInProfile(!updateDataInProfile);
        setprofileData(Data);
        const updatedUser = {
            email:profileData.email,
            fullName:profileData.fullName,
            phone:profileData.phone,
            joiningDate:profileData.joiningDate
        };
        setLoader(false);
    }
    const formChangeHandler = (event) => {
        setprofileData((prevData) => {
            return { ...prevData, [event.target.name]: event.target.value };
        })
    }

    const closeButtonHandler = () => {
        setShowCard(false);
        setupdateDataInProfile(!updateDataInProfile);
        window.location.reload();
    }
    return (<div className={styles.profileWrapper}>
        <div className={styles.userCard}>
            <div className={styles.profileHeader}>
                <h3 className={styles.profileEdit}>Profile Edit</h3>
                <button onClick={closeButtonHandler} className={styles.closeButton}>X</button>
            </div>
            <div className={styles.profileBody}>
                <div className={styles.profileBodyDiv}>
                    <div className={styles.profileDataImage}>
                        <img className={styles.profileImage} alt='Profile Pic' src={profileData.imgUrl ? profileData.imgUrl : noimage}></img>
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
                        <input disabled='true' name='fullName' onChange={formChangeHandler} value={profileData.fullName}></input>
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
    </div>)
}