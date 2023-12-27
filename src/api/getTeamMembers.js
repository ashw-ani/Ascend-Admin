const FetchTeamMembers = async (teamName) => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    const TeamMembers = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/admin/teams/getTeamMembers?name=${teamName}`,
      requestOptions
    );
    const data = await TeamMembers.json();
    console.log("hello from members", data);
    return data;
  };
  export default FetchTeamMembers;
  