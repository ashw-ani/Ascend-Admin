const GetUsers = async (page,limit) => {
    var pageLimit;
    page = page - 1;
    if(limit)
        pageLimit = limit;
    else
        pageLimit = 10;

    
    const Users = await fetch(
        `https://ascend-server.onrender.com/api/admin/contacts/list?page=${page}&limit=${pageLimit}`,{
        }
    );
    const UsersData = await Users.json();
    console.log(UsersData);
    return UsersData;

}
export default GetUsers;