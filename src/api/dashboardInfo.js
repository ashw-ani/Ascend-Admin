const DashboardInfo = async () => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
  
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    console.log(process.env.REACT_APP_SERVER_URL);
    const Users = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/admin/dashboard`,
      requestOptions
    );
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    const data = await Users.json();
    return data.data;
  };
  export default DashboardInfo;
  