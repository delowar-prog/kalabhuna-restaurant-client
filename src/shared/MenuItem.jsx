const MenuItem = ({item}) => {
    const {image,name,recipe,price}=item
  return (
    <div className='flex space-x-5'>
        <img src={image} className='w-[100px]' style={{borderRadius:"200px 200px 0px 200px"}}></img>
        <div>
            <h3 className='font-bold text-lg'>{name}</h3>
            <p>{recipe}</p>
        </div>
        <p className='text-yellow-600'>{price}</p>
    </div>
  )
}

export default MenuItem