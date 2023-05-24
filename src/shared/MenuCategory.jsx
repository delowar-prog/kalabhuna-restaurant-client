import { Link } from "react-router-dom"
import Cover from "./Cover"
import MenuItem from "./MenuItem"

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="my-20">
            {
                title && <Cover title={title} img={img}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-5 space-y-3 my-20 mx-14'>
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className="w-[50%] mx-auto text-center">
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 border-slate text-slate-800">Order Now</button></Link>
            </div>
        </div>
    )
}

export default MenuCategory