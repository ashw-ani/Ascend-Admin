const FetchUsers = async (findUser,type) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "search": findUser,
    "type": type
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch("https://ascend-server.onrender.com/api/admin/contacts/getDetails", requestOptions)
    
  const data = await response.json();
  return data;


 

}
export default FetchUsers;