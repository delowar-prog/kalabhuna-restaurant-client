import { FaTrashAlt, FaUserShield } from 'react-icons/fa'

const User = ({ user, index, handleDeleteUser, handleMakeAdmin }) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button className="btn btn-warning btn-sm" onClick={()=>handleMakeAdmin(user)}><FaUserShield className="text-red-500 text-lg"></FaUserShield></button></td>
            <td><button className="btn btn-error btn-sm" onClick={()=>handleDeleteUser(user)}><FaTrashAlt className="text-red-500 text-lg"></FaTrashAlt></button></td>
        </tr>
    )
}

export default User