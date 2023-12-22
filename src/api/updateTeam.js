const UpdateTeam = async (Team) => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(Team);
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const response = await fetch("https://ascend-server.onrender.com/api/admin/teams/update", requestOptions);
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    const data = await response.json();
    return data;

}
export default UpdateTeam;