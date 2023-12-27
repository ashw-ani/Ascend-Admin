const UpdateUser = async (user) => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(user);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const Users = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/admin/contacts/updateDetails`, requestOptions);
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    const data = await Users.json();
    return data;

}
export default UpdateUser;