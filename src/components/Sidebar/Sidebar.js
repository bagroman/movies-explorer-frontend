import { React, useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import './Sidebar.css'

function Sidebar() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    if (width > 520) {
        return (
            <Menu right width={520}>
                <Link className="menu-item" to="/">
                    Главная
                </Link>
                <Link className="menu-item" to="/movies">
                    Фильмы
                </Link>
                <Link className="menu-item" to="/saved-movies">
                    Сохраненные фильмы
                </Link>
                <Link className="menu-item" to="/profile">
                    Аккаунт
                </Link>
            </Menu>
        )
    }
    else {
        return (
            <Menu right width={ '100%' }>
                <Link className="menu-item" to="/">
                    Главная
                </Link>
                <Link className="menu-item" to="/movies">
                    Фильмы
                </Link>
                <Link className="menu-item" to="/saved-movies">
                    Сохраненные фильмы
                </Link>
                <Link className="menu-item" to="/profile">
                    Аккаунт
                </Link>
            </Menu>
        )
    }
}

export default Sidebar;