const AddHabits = async (habbitData) => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      ...habbitData,
    });
  
    console.log(habbitData);
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/admin/habits/addHabit`,
      requestOptions
    );
    
    const data = await response.json();
    console.log("hello from addhabbits", data);
    return data;
  };
  export default AddHabits;
  