const DeleteCourse = async (_id) => {
  var myHeaders = new Headers();
  myHeaders.append("api-key", "123456");
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    _id: _id,
  });

  console.log(_id);

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const Users = await fetch(
    "https://ascend-server.onrender.com/api/admin/course/delete",
    requestOptions
  );
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  const data = await Users.json();
  console.log("hello from deleteCourse", data);
  return data;
};
export default DeleteCourse;
