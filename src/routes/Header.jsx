import { NavLink } from "react-router-dom"
import githubLogo from '../assets/github-mark.svg';

export default function Header() {
    return (
        <header>
            <h1>Shop Capitalism!</h1>
            <nav>
                <NavLink to={'/'} className={({isActive, isPending}) => (isActive ? 'active' : isPending ? 'pending' : '')}>Home</NavLink>
                <NavLink to={'/shopping'} className={({isActive, isPending}) => (isActive ? 'active' : isPending ? 'pending' : '')}>Shop</NavLink>
                <a><img src={githubLogo} alt="Github Logo"/></a>
            </nav>
        </header>
    )
}