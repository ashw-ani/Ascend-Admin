const UpdateHabit = async (UpdatedHabit) => {
    var myHeaders = new Headers();
    myHeaders.append("api-key", "123456");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(UpdatedHabit);
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/admin/habits/editHabit`, requestOptions);
    const data = await response.json();
    return data;

}
export default UpdateHabit;