const GetHabits = async (type, search) => {
    const data = await fetch(
      `https://ascend-server.onrender.com/api/admin/habits/getHabits`
    );
  
    const result = await data.json();
    console.log(result);
    return result;
  };
  export default GetHabits;
  