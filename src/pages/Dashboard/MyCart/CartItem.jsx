import { FaTrashAlt } from "react-icons/fa"

const CartItem = ({item, index, handleDeleteCart}) => {
    const {name,image,price}=item
  return (
    <tr>
    <td>
      {index+1}
    </td>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </div>
    </td>
    <td>
        {name}
    </td>
    <td>${price}</td>
    <td>
      <button className="btn btn-warning btn-sm" onClick={()=>handleDeleteCart(item)}><FaTrashAlt className="text-red-500 text-lg"></FaTrashAlt></button>
    </td>
  </tr>
  )
}

export default CartItem