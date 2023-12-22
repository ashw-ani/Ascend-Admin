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
      "https://ascend-server.onrender.com/api/admin/teams/fetch",
      requestOptions
    );
    const data = await Teams.json();
    console.log("hello from FetchTeams", data);
    return data;
  };
  export default FetchTeams;
  