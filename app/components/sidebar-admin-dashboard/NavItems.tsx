import "./navitems.scss";
import icon from "/assets/icons/logo.svg";
import { Link } from "react-router-dom";
import {NavLink} from "react-router";
import {useAuth} from "../../../src/context/AuthContext";
import * as React from "react";

const NavItems = ({ handleClick }: { handleClick?: () => void}) => {

    const {user, role} = useAuth();

    const sidebarItems = [
        {
            id: 1,
            label: "OverView",
            href: "/dashboard",
            end: true,
        },
        {
            id: 2,
            label: "Users",
            href: "/dashboard/users",
        },
        {
            id: 3,
            label: "Contact Messages",
            href: "/dashboard/messages",
        },
        {
            id: 4,
            label: "Consultation Requests",
            href: "/dashboard/consulting",
        }

    ]

    return (
        <section className="nav-items">
            <Link to="/dashboard">
                <div className="nav-item-logo" >
                    <img src={icon} alt="icon" />
                    <h3>Engineering <br/> Consulting</h3>
                </div>
            </Link>

            <div className="container-sidebar">
               <nav className="sidebar">
                   {sidebarItems.map((item) => (
                       <NavLink
                           to={item.href}
                           key={item.id}
                           end={item.end}
                           className={({ isActive }) =>
                           `nav-item ${isActive ? "active" : ""}`
                       } onClick={handleClick}>
                           <h1>{item.label}</h1>
                       </NavLink>
                   ))}
               </nav>

                <footer className="nav-footer">
                    {user.photoURL ? (
                        <img src={user.photoURL} alt="user" />
                    ) : (
                        <span>{user.email[0].toUpperCase()}</span>
                    )}

                    <article>
                        <h2>Admin</h2>
                        <p>{user.email}</p>
                    </article>
                </footer>
            </div>

        </section>
    )
}
export default NavItems
