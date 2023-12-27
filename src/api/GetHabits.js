const GetHabits = async (type, search) => {
    const data = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/admin/habits/getHabits`
    );
  
    const result = await data.json();
    console.log(result);
    return result;
  };
  export default GetHabits;
  