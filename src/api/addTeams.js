const AddTeams = async (teamData) => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      ...teamData,
    });
  
    console.log(teamData);
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const Teams = await fetch(
      "https://ascend-server.onrender.com/api/admin/teams/add",
      requestOptions
    );
    const data = await Teams.json();
    console.log("hello from AddTeams", data);
    return data;
  };
  export default AddTeams;
  