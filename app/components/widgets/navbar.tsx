import '../../css/navbar.css'
import { NavLink } from 'react-router-dom'

type NavLinkItem = {
    label: string
    path: string
}

const NAV_ITEMS: NavLinkItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/productos' },
    { label: 'Contactanos', path: '/mensajes' },
]

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="avatar-badge">TP</div>
                <button className="add-badge" aria-label="Agregar">
                    +
                </button>
            </div>

            <div className="navbar-menu">
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        end={item.path === '/'}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>

            <div className="navbar-right">
                <button className="btn btn-outline">Log in</button>
                <button className="btn btn-filled">Sign up</button>
            </div>
        </nav>
    )
}