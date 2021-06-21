import React from 'react'

const Users = ({ userData, loading }) => {
    if(loading){
        return (
        <tr>
            <td>Loading...</td>
            <td>Loading...</td>
            <td>Loading...</td>
        </tr>
        );
    }
    console.log("Rendering Table");
    return (
        <tbody>
            {userData.map(user=>(
                <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                </tr> 
            ))}
        </tbody>
    )
}

export default Users;
