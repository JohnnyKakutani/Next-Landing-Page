const Individual = ({
    image,
    linkedinURL,
    name,
    position
}: {
    image: string;
    linkedinURL: string;
    name: string;
    position: string;
}) => {
    return (
        <div className="flex flex-col justify-center w-[216px]">
            <img src={image} className="bg-pink-200 rounded-3xl h-[218px] mx-auto"/>
            <div className="w-[216px] items-end flex mt-4">
                <div>
                    <p className="text-[#62697A]">{position}</p>
                    <p className="text-[15px] font-semibold">{name}</p>
                </div>
                <a href={linkedinURL} className="ml-auto"><img src="./linkedinRectangle.png" width={32} height={32}/></a>
            </div>
        </div>
    );
}

export default Individual;
