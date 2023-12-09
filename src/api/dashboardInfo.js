const DashboardInfo = async () => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
  
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    const Users = await fetch(
      "https://ascend-server.onrender.com/api/admin/dashboard",
      requestOptions
    );
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    const data = await Users.json();
    return data.data;
  };
  export default DashboardInfo;
  