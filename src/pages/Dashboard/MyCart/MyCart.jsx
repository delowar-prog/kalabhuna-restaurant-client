import { Fragment } from "react"
import useCart from "../../../hooks/useCart"
import SectionTitle from "../../../components/SectionTitle"
import { Helmet } from "react-helmet"
import CartItem from "./CartItem"
import Swal from "sweetalert2"

const MyCart = () => {
  const [cart, refetch] = useCart()
  const total = cart.reduce((sum, item) => item.price + sum, 0)
  const handleDeleteCart=item=>{
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
        fetch(`http://localhost:5000/carts/${item._id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){
            Swal.fire(
              'Deleted!',
              'Cart Item deleted.',
              'success'
            )
            refetch()
          }
        })
      }
    })

  }
  return (
    <Fragment>
    <Helmet>
        <title>Kalabhuna || My cart</title>
    </Helmet>
    <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"}></SectionTitle>
      <div className="uppercase flex justify-between w-[80%]">
        <h2 className="text-3xl">Total Items : {cart.length}</h2>
        <h2 className="text-3xl">Total Price : ${total}</h2>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div className="overflow-x-auto w-[80%] mx-auto my-8">
        <table className="table w-full">
          {/* head */}
          <thead className="z-10 sticky top-0">
            <tr>
              <th>
                Sl
              </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              cart.map((item, index)=><CartItem key={item._id} item={item} index={index} handleDeleteCart={handleDeleteCart}></CartItem>)
            }
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default MyCart