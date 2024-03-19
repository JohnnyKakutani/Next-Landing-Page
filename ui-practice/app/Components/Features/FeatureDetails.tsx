const FeatureDetails = ({ 
    isVertical,
    image,
    content,
    title,
} : { 
    isVertical: boolean,
    image: string,
    content: string,
    title: string,
}) => {
    if (isVertical) {
        return (
            <div className="w-[274px] md:w-[302px] rounded-xl text-center md:text-left bg-white/40 p-6 leading-none">
                <p className="mb-4 font-bold">{title}</p>
                <p className="text-[14px]">{content}</p>
                <img src={image} className="mx-auto object-none"/>
            </div>
        );
    }

    return (
        <div className="w-[274px] md:w-[343px] rounded-xl text-center md:text-left bg-white/40 p-6 md:flex leading-none mb-auto">
            <div className="md:flex-1">
                <p className="mb-4 md:mb-0 font-bold">{title}</p>
                <p className="text-[14px]">{content}</p>
            </div>
            <div className="md:w-[100px] items-center">
                <img src={image} className="mx-auto object-none"/>
            </div>
        </div>
    );
}

export default FeatureDetails;