import { NavLink } from "react-router-dom"
import githubLogo from '../assets/github-mark.svg';

export default function Header() {
    return (
        <header className="flex flex-row justify-between p-3 h-10 mb-5">
            <h1 className="text-3xl items-center">Shop Capitalism!</h1>
            <nav className="flex flex-row items-center h-10">
                <NavLink to={'/'} className={({isActive, isPending}) => `mr-2 ${isActive ? 'active' : isPending ? 'pending' : ''}`}>Home</NavLink>
                <NavLink to={'/shopping'} className={({isActive, isPending}) => `mr-2 ${isActive ? 'active' : isPending ? 'pending' : ''}`}>Shop</NavLink>
                <a className="h-10 flex items-center align-middle" href="https://github.com/jdogcodey"><img className="h-8" src={githubLogo} alt="Github Logo"/></a>
            </nav>
        </header>
    )
}