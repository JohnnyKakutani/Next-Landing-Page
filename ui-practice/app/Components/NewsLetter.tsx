"use client"
import { use, useState } from "react";

const NewsLetter = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);

    const changeFirstName = (event: any) => {
        setFirstName(event.target.value);
    }
    
    const changeLastName = (event: any) => {
        setLastName(event.target.value);
    }

    const changeEmail = (event: any) => {
        setEmail(event.target.value);
    }

    const changeChecked = (event: any) => {
        setChecked(!checked);
    }

    return (
        <div className="flex flex-col 2xl:flex-row-reverse items-center">
            <img src="./emailnotification.png" className="w-[363px] h-[272px] md:w-[551px] md:h-[414px]" />
            <div className="flex flex-col gap-y-4">
                <p className="bg-clip-text text-[20px] text-center text-transparent bg-gradient-to-r from-[#FF61F9] to-[#FF00F5] font-semibold md:text-[36px]">Newsletter</p>
                <input className="ps-4 h-[40px] text-[16px] w-[329px] md:w-[464px] rounded-full border-2 border-black/10 active:border-black/10" type='text' placeholder="First Name" value={firstName} onChange={changeFirstName}/>
                <input className="ps-4 h-[40px] text-[16px] w-[329px] md:w-[464px] rounded-full border-2 border-black/10 active:border-black/10" type='text' placeholder="Last Name" value={lastName} onChange={changeLastName}/>
                <input className="ps-4 h-[40px] text-[16px] w-[329px] md:w-[464px] rounded-full border-2 border-black/10 active:border-black/10" type='email' placeholder="Email" value={email} onChange={changeEmail}/>
                <button className="w-[289px] h-[29px] md:w-[385px] md:h-[40px] rounded-full bg-gradient-to-r from-[#E587E7] to-[#5c6cF6] text-white text-[16px] font-bold mx-auto">Subscribe</button>
                <div className="mx-auto flex w-[289px] md:w-[385px] justify-center items-start">
                    <input type='checkbox' checked={checked} onChange={changeChecked}/>
                    <span className="ms-2 font-light me-2 text-[9px]">I agree with the storage and handling of any data by the website.</span>
                    <a className="text-[#4388DD] text-[9px] underline hidden 2xl:inline">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;