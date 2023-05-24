import SectionTitle from "../../../components/SectionTitle"
import featureImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featureBgStyle bg-fixed relative h-[90vh]">
            <div className="px-14 py-16 bg-black bg-opacity-70 h-[100%] absolute text-white">
                <SectionTitle
                    heading="OUR FEATURED ITEM"
                    subHeading="Check it out"
                ></SectionTitle>
                <div className="flex space-x-8 items-center">
                    <img src={featureImg} className="w-[40%]"></img>
                    <div className="space-y-2 text-white">
                        <p>March 20, 2023</p>
                        <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 border-white text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured