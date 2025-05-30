import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="bg-primary mb-4 fw-bold">
            <div className="container my-4">
                <nav className="d-flex justify-content-around align-items-center">
                    <h1>Blog Pages</h1>
                    <NavLink className={({isActive}) => (isActive ? `nav-link active` : `nav-link`)} to="/">Homepage</NavLink>
                    <NavLink className={({isActive}) => (isActive ? `nav-link active` : `nav-link`)} to="/about">About</NavLink>
                    <NavLink className={({isActive}) => (isActive ? `nav-link active` : `nav-link`)} to="/posts">Posts</NavLink>
                </nav>
            </div>
        </header>
    )
}