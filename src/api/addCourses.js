const AddCourse = async (cardData) => {
  var myHeaders = new Headers();
  myHeaders.append("api-key", "123456");
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    ...cardData,
  });

  console.log(cardData);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const Users = await fetch(
    "https://ascend-server.onrender.com/api/admin/course/add",
    requestOptions
  );
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  const data = await Users.json();
  console.log("hello from AddCourses", data);
  return data;
};
export default AddCourse;
