import Individual from "./Individual";

const TeamView = () => {
    return (
        <div className="mt-8">
            <p className="text-center font-bold sm:text-[20px] md:text-[32px] 2xl:text-[43px] text-[#415162]">The Team Behind Obinex</p>
            <div className="grid justify-center md:grid-cols-2 2xl:grid-cols-4 gap-8 mt-8">
                <Individual image='./person1.png' position="CEO | Founder" name="Alejandro Grande" linkedinURL="https://linkedin.in"/>
                <Individual image='./person1.png' position="CEO | Founder" name="Alejandro Grande" linkedinURL="https://linkedin.in"/>
                <Individual image='./person1.png' position="CEO | Founder" name="Alejandro Grande" linkedinURL="https://linkedin.in"/>
                <Individual image='./person1.png' position="CEO | Founder" name="Alejandro Grande" linkedinURL="https://linkedin.in"/>
            </div>
            <div className="flex justify-center mt-8 items-center">
                <button className="w-[351px] h-[64px] font-bold text-white bg-gradient-to-r from-[#FF89B4] to-[#E064FF] rounded-full">
                    MEET MORE EMPLOYEES
                </button>
            </div>
        </div>
        
    );
}

export default TeamView;
