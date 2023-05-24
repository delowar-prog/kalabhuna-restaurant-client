
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-[40%] mx-auto my-14 text-center'>
            <p className='text-yellow-600 text-lg italic'>---{subHeading}---</p>
            <h2 className='text-4xl font-semibold uppercase border-y-2 py-3 my-2'>{heading}</h2>
        </div>
    )
}

export default SectionTitle