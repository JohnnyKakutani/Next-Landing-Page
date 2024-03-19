const hoverColor = "#000000"
const Footer = () => {
    return (
        <div className="pb-16 md:pb-0 px-4 md:flex md:h-[390px] w-full">
            <div className="md:flex-1">
                <div className="md:content-around w-fit h-full flex flex-col md:ms-16 xl:mx-auto ">
                    <div className="md:flex-1 items-center">
                        <img src="./footerlogo.png" width={192} height={57} className="mt-8"/>
                    </div>
                    <div className="md:flex-1">
                        <div className="flex gap-x-[22px] mt-2 md:mt-8 items-center">
                            <img src="./X.png" width={16} height={16}/>
                            <img src="./linkedin.png" width={13.5} height={13.5}/>
                            <img src="./facebook.png" width={16} height={16}/>
                            <img src="./Discord.png" width={16} height={17}/>
                            <img src="./Instagram.png" width={14} height={14}/>
                        </div>
                        <p className="text-[11px] text-[#4A4A4E] leading-8">Join the future of finance</p>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 flex pt-8">
                <div className="flex flex-col gap-y-2 text-[14px] text-[#4A4A4E]">
                    <p className="text-[#1C1725] text-[16px] mb-2 font-semibold">Company</p>
                    <a className={`hover:text-black`}>About Us</a>
                    <a className={`hover:text-black`}>Our Services</a>
                    <a className={`hover:text-black`}>Blog</a>
                    <a className={`hover:text-black`}>Careers</a>
                    <a className={`hover:text-black`}>Ambassadors Program</a>
                    <a className={`hover:text-black`}>Contact the Team</a>
                    <a className={`hover:text-black`}>Request a Feature</a>
                </div>
                <div className="flex flex-col gap-y-2 text-[14px] text-[#4A4A4E] ms-24">
                    <p className="text-[#1C1725] text-[16px] mb-2 font-semibold">Legal</p>
                    <a className={`hover:text-black`}>Privacy Policy</a>
                    <a className={`hover:text-black`}>Terms of Use</a>
                    <a className={`hover:text-black`}>Cookies Policy</a>
                    <a className={`hover:text-black`}>Disclamier</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;