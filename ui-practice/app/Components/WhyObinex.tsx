const WhyObinex = () => {
    return (
        <div className="w-[402px] h-[499px] mt-16 relative md:w-[861px] md:h-[500px] md:my-10">
            <div className="text-center text-[#415162] text-[20px] font-medium md:text-[32px] 2xl:text-[43px] md:font-bold">
                Why Obinex?
            </div>
            <div className="w-[209px] h-[195px] rounded-2xl bg-white text-center px-4 mx-auto mt-8 z-10 relative 
                            md:w-[307px] md:h-[373px] md:absolute md:bottom-16 md:left-[280px] md:translate-y-8">
                <p className="font-medium text-[16px] pt-6 pb-2 md:text-[24px] md:pt-12 md:pb-6">Transparent</p>
                <p className="text-[14px] md:text-[16px]">Have the opportunity to pay less fees with our new transaction volume fee reduction system.</p>
                <img src="./why1.png" className="w-[134px] h-[134px] absolute bottom-0 left-6 translate-y-20 
                                                md:w-[279px] md:h-[279px] md:translate-y-28 md:left-4"/>
            </div>
            <div className="absolute bottom-0 left-0 w-fit h-fit md:bottom-16">
                <div className="w-[189px] h-[207px] rounded-2xl bg-[#0E87F8]/20 text-center px-2 relative md:w-[306px] md:h-[315px] md:px-8">
                    <p className="font-medium text-[16px] pt-4 pb-2 md:text-[24px] md:pt-8 md:pb-8">Secure</p>
                    <p className="text-[14px] md:text-[16px]">AI enhances transaction security by spotting suspicious patterns boosting user trust.</p>
                    <img src="./why2.png" className="w-[65px] h-[70px] absolute bottom-0 left-16 translate-y-6 md:w-[100px] md:h-[105px] md:left-24 md:translate-y-8"/>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-fit h-fit md:bottom-16">
                <div className="w-[191px] h-[207px] rounded-2xl bg-[#FF32F7]/20 text-center px-2 relative md:w-[306px] md:h-[315px] md:px-8">
                    <p className="font-medium text-[16px] pt-4 pb-2 md:text-[20px] md:pt-8 md:pb-8">Tailored</p>
                    <p className="text-[14px] md:text-[16px]">Are you experiencing any issue? Our dedicated expert support team is here to prioritize your peace of mind.</p>
                    <img src="./why3.png" className="w-[106px] h-[87px] absolute bottom-0 left-10 translate-y-8 md:w-[142px] md:h-[116px] md:left-20 md:translate-y-10"/>
                </div>
            </div>
        </div>
    );
}

export default WhyObinex;
