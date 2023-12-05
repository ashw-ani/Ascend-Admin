const CreateUser = async () => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
    const joiningDate = Date.now("<YYYY-mm-ddTHH:MM:ssZ>");
    // const endDta = new Date('August 19, 1975 23:15:30');
    const user = {
        firstName:'happu',
        lastName:'dicosta',
        fullName:'happu dicosta',
        email:'happu@ghuskhor.com',
        phone:'998982112',
        achievementLevel:'high',
        teamName:'avengers',
        tier:'star',
        imgUrl:'fjdksajfklasjf',
        joiningDate:joiningDate,
        city:'noida',
        niche:'maid'
    }
    var raw = JSON.stringify({
      user:user
    });

    console.log(user);
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const Users = await fetch(
      "https://ascend-server.onrender.com/api/admin/contacts/addContact",
      requestOptions
    );
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    const data = await Users.json();
    console.log("hello from createUser",data);
    return data;
  };
  export default CreateUser;
  