const FetchUsers = async (email) => {
    const Users = await fetch(
        `https://ascend-server.onrender.com/`,{
            body: JSON.stringify(email),
        }
    );
    const UsersData = await Users.json();
    console.log(UsersData);
    return UsersData;
}
export default FetchUsers;