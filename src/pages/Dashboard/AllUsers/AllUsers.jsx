import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet"
import SectionTitle from "../../../components/SectionTitle"
import User from "./User"
import Swal from "sweetalert2"

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:5000/users`)
        return res.json()
    })
    const handleMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                refetch()
                Swal.fire(
                    'Updated!',
                    `${user.name} is an admin now`,
                    'success'
                  )
            }
        })
    }
    const handleDeleteUser=(user)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/users/${user._id}`,{
                method:"DELETE"
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                  Swal.fire(
                    'Deleted!',
                    'User deleted successfully',
                    'success'
                  )
                  refetch()
                }
              })
            }
          })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Kalabhuna || alluser</title>
            </Helmet>
            <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How many??"}></SectionTitle>
            <div className="w-[80%] mx-auto">
                <h2 className="text-3xl">Total User: {users.length}</h2>
                <div className="overflow-x-auto w-full mx-auto my-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="z-10 sticky top-0">
                            <tr>
                                <th>
                                    Sl
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                               users.map((user, index)=><User key={user._id} user={user} index={index} handleMakeAdmin={handleMakeAdmin} handleDeleteUser={handleDeleteUser}></User>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllUsers


// const {data: users=[]} = useQuery(['users'], async()=>{
//     const res=await fetch(`http://localhost:5000/users`)
//     return res.json()
// })