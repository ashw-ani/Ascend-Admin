const FetchTeams = async () => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    const Teams = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/admin/teams/fetch`,
      requestOptions
    );
    const data = await Teams.json();
    return data;
  };
  export default FetchTeams;
  