const AddEvents = async (eventData) => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      ...eventData,
    });
  
    console.log(eventData);
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}api/admin/events/addEvent`,
      requestOptions
    );
    
    const data = await response.json();
    console.log("hello from AddEvents", data);
    return data;
  };
  export default AddEvents;
  