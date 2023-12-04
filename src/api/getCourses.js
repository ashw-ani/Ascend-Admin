const getCourses = async (type, search) => {
  const data = await fetch(
    `https://ascend-server.onrender.com/api/admin/course/all?tier=${type}&search=${search}`
  );

  const result = await data.json();
  console.log(result);
  return result;
};
export default getCourses;
