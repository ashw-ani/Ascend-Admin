const GetEvents = async (type, search) => {
    const data = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/admin/events/getEvents`
    );
  
    const result = await data.json();
    console.log(result);
    return result;
  };
  export default GetEvents;
  