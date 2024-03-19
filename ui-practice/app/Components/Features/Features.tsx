import FeatureDetails from "./FeatureDetails";
const contents = [
    "Experience the dynamism, variety, and profitability of a DEX platform with Obinex. Discover crypto investment opportunities and convenient solutions for daily activities like bill payments and service hiring.",
    "Enlarge the reach of your business by offering flexibility, safety, and convenience to your customers with crypto as a payment method with the coolest UX.",
    "Enjoy a revolutionary gaming experience that empowers users and content creators with unique rewards and features.",
];
const titles = [
    "Finance",
    "e-Commerce",
    "Gaming"
]
const Features = () => {
    return (
        <div className="w-fit">
            <p className="text-[#415162] tex-[20px] md:text-[32px] 2xl:text-[43px] font-bold text-center mb-8">Convenience <br className="md:hidden"/>and Profitability</p>
            <div className="flex gap-4 flex-wrap mx-auto px-auto w-[274px] md:w-[676px] 2xl:w-fit justify-between">
                <div>
                    <FeatureDetails isVertical={true} image={'./team.png'} content={contents[0]} title={titles[0]}/>
                </div>
                <div className="flex flex-col gap-y-4 md:content-between">
                    <FeatureDetails isVertical={false} image={'./ticket.png'} content={contents[1]} title={titles[1]}/>
                    <FeatureDetails isVertical={false} image={'./team.png'} content={contents[2]} title={titles[2]}/>
                </div>
                <div className="flex flex-col gap-y-4 md:content-between">
                    <FeatureDetails isVertical={false} image={'./chat.png'} content={contents[1]} title={titles[1]}/>
                    <FeatureDetails isVertical={false} image={'./team.png'} content={contents[2]} title={titles[2]}/>
                </div>
                <div>
                    <FeatureDetails isVertical={true} image={'./team.png'} content={contents[0]} title={titles[0]}/>
                </div>
            </div>
        </div>
    );
}

export default Features;