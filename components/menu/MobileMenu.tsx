import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import { DiCode } from "react-icons/di"
import { GrTwitter } from "react-icons/gr"
import { Dispatch, SetStateAction, useEffect } from "react"; 
import rippleEffect from '../utils/RippleEffect';

interface Props {
    showMenu: boolean 
    setShowMenu: Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({ showMenu, setShowMenu }: Props) => {
    useEffect(() =>{
        rippleEffect();
    }, [])
 
    return (
        <div className={`fixed z-[100] transform h-full w-screen md:hidden
            ${!showMenu && '-translate-x-full'} ${showMenu && 'bg-black/60'} 
            transition-all duration-300 ease-in`} 
            onClick={() => setShowMenu(false)}>

            <div className={`absolute bg-lightBg/80 left-0 top-0 h-full pb-10 overflow-y-auto flex flex-col w-48`}
                onClick={(ev) => ev.stopPropagation()}>

                {/* logo */}
                <div className="bg-darkBg/60 px-7 py-7 text-center">
                    <Link onClick={() => setShowMenu(false)} className="text-[18px] mt-1 font-[600]" href='/'>
                        <span className="text-theme">Dorji</span> <span>Tshering</span>
                    </Link>
                    <p className="text-lightGray text-xs mt-1 font-[mali]">web developer</p>
                    <DiCode className="mx-auto" size={28} color="#989797"/>
                </div>
                {/* menu */}
                <div className="flex-1">
                    <div className="flex flex-col text-center my-16">
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple !border-t !border-t-lightBorder" href="/">Home</Link>
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple" href="/about">About</Link>
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple" href="/projects">Projects</Link>
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple" href="/skills">Skills</Link>
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple" href="/contact">Contact</Link>
                    </div>
                    {/* social */}
                    <div className="flex justify-center">
                        <Link className="socialLink mx-3" target="_blank" href="https://twitter.com/dorjidev">
                            <GrTwitter size={24}/>
                        </Link>
                        <Link className="socialLink mx-3" target="_blank" href="https://github.com/dorji-tshering">
                            <BsGithub size={24}/>
                        </Link>
                    </div>
                    <Link 
                        className="mx-auto block w-fit my-10 text-gray-400" 
                        target="_blank" 
                        href="https://nextjs.org/">
                        Made with NextJs
                    </Link>
                </div>
            </div>
       </div>
    )
}

export default MobileMenu