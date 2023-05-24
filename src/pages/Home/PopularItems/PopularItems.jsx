import SectionTitle from '../../../components/SectionTitle'
import MenuItem from '../../../shared/MenuItem'
import useMenu from '../../../hooks/useMenu'

const PopularItems = () => {
   const [menu]=useMenu()
   const popular=menu.filter(item=>item.category==='popular')
  return (
    <section className='mx-14 my-20'>
        <SectionTitle
        subHeading={"Check it out"}
        heading={"OUR POPULAR ITEMS"}
        >
        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-5 space-y-3'>
            {
                popular.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
            }
        </div>
    </section>
  )
}

export default PopularItems