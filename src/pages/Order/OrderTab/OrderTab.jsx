import OrderCard from '../../../components/OrderCard'

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-5 space-y-3 my-20 mx-14'>
            {
                items.map(item => <OrderCard item={item} key={item._id}></OrderCard>)
            }
        </div>
    )
}

export default OrderTab