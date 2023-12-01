const GetUsers = async (page) => {
    const Users = await fetch(
        `https://ascend-server.onrender.com/api/admin/contacts/list?page=${page}&limit=10`,{
        }
    );
    const UsersData = await Users.json();
    console.log(UsersData);
    return UsersData;

}
export default GetUsers;