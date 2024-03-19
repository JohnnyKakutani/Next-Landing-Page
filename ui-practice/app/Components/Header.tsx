
const Header = () => {
    return (
        <div className="h-[70px] justify-center w-full bg-pink-400 px-8">
            <div className="h-[60px] w-[395px] px-6 sm:w-full 2xl:w-[1258px] mx-auto mt-[10px] bg-white items-center flex rounded-full">
                <div className="lg:w-[130px] xl:flex-1">
                    <img src="./ObinexLogo.png" alt="ObinexLogo" width={32} height={32} />
                </div>
                <div className="hidden rounded-full lg:flex justify-center">
                    <a className="px-4 py-2 rounded-full bg-white hover:bg-slate-200 active:bg-slate-200">
                        About Us
                    </a>
                    <a className="px-4 py-2 rounded-full hover:bg-slate-200">
                        Ecosystem
                    </a>
                    <a className="px-4 py-2 rounded-full hover:bg-slate-200">
                        Tokennomics
                    </a>
                    <a className="px-4 py-2 rounded-full hover:bg-slate-200">
                        Roadmap
                    </a>
                    <a className="px-4 py-2 rounded-full hover:bg-slate-200">
                        Team
                    </a>
                    <a className="px-4 py-2 rounded-full hover:bg-slate-200">
                        Litepaper
                    </a>
                </div>
                <div className="ml-auto lg:w-[150px] xl:flex-1 xl:flex">
                    <button className="bg-[#00ADEE] rounded-full py-2 px-4 text-white text-bold text-[16px] ml-auto">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;