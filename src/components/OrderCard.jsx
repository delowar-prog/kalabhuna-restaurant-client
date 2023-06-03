import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart'

const OrderCard = ({ item }) => {
    const { _id, image, name, recipe, price } = item
    const { user } = useContext(AuthContext)
    const [,refetch]=useCart()
    const navigate=useNavigate()
    const location=useLocation()
    const handleCart = ()=> {
        if (user && user.email) {
            const cartItem = { itemId: _id, name, image, price, email: user.email }
            fetch(`http://localhost:5000/carts`, {
                method: "POST",
                headers: {
                    'content-type': 'Application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added to cart successfully',
                            showConfirmButton: false,
                            timer: 1000
                          })
                    }
                })
        }else{
            Swal.fire({
                text: "Please Login",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from:location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleCart} className="btn btn-outline border-0 border-b-4 border-orange-500 hover:bg-orange-500 text-slate-800">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default OrderCard