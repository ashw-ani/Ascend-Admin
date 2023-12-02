const getCourses = async (type) => {
  const data = await fetch(
    `https://ascend-server.onrender.com/api/admin/course/all?tier=${type}`
  );

  const result = await data.json();
  console.log(result);
  return result.courses;
};
export default getCourses;
