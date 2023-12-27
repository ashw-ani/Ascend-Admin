const getCourses = async (type, search) => {
  const data = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/admin/course/all?tier=${type}&search=${search}`
  );

  const result = await data.json();
  console.log(result);
  return result;
};
export default getCourses;
