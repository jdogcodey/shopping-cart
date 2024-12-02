import { NavLink, Link } from "react-router-dom"
import githubLogo from '../assets/github-mark.svg';

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center p-3 h-16 bg-[#4a90a4] text-[#f5f9f7]">
            <Link to='/'><h1 className="sm:text-2xl lg:text-3xl items-center">Shop Capitalism!</h1></Link>
            <nav className="flex flex-row items-center h-10">
                <NavLink to={'/'} className={({isActive, isPending}) => `mr-2 border-solid border-[#f5f9f7] border-2 p-1 rounded-3xl pl-2 pr-2 hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6] ${isActive ? 'active' : isPending ? 'pending' : ''}`}>Home</NavLink>
                <NavLink to={'/shopping'} className={({isActive, isPending}) => `mr-2 border-solid border-[#f5f9f7] border-2 p-1 rounded-3xl pl-2 pr-2 hover:border-[#7cb6c6] hover:bg-[#dcefe7] hover:text-[#7cb6c6] ${isActive ? 'active' : isPending ? 'pending' : ''}`}>Shop</NavLink>
                <a className="h-10 flex items-center align-middle" href="https://github.com/jdogcodey"><img className="h-8" src={githubLogo} alt="Github Logo"/></a>
            </nav>
        </header>
    )
}