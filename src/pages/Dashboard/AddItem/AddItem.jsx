import { FaUtensils } from "react-icons/fa"
import SectionTitle from "../../../components/SectionTitle"
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItem = () => {
    const [axiosSecure]=useAxiosSecure()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_upload_token = import.meta.env.VITE_image_upload_key
    const img_upload_url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_upload_token}`
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_upload_url, {
            method:"POST",
            body: formData				//no need stringify 
        })
        .then(res => res.json())
        .then(imgRes => {
          if(imgRes.success){
            const {name,price,category,recipe}=data
            const imgUrl=imgRes.data.display_url
            const newItem={name,price:parseFloat(price),category,recipe,image:imgUrl}
            console.log(newItem)
            axiosSecure.post(`/menus`, newItem)
            .then(data=>{
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      }) 
                }
            })
          }
        })

    };
    
    return (
        <div className="w-full">
            <SectionTitle subHeading={"What's new?"} heading={'ADD AN ITEM'}></SectionTitle>
            <form className="mx-auto w-[80%]" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-5">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="flex gap-5 my-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Select Category*</span>
                        </label>
                        <select defaultValue='Select One' {...register("category", { required: true })} className="select select-bordered">
                            <option disabled selected>Select One</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soups</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("price", { required: true })} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control my-5">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="Recipe Details" />
                </div>
                <div className="my-5">
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-error w-full " />
                </div>
                <button className="btn btn-active flex gap-2 bg-yellow-600 hover:bg-yellow-700 border-0">Add Item <FaUtensils></FaUtensils></button>
            </form>
        </div>
    )
}

export default AddItem