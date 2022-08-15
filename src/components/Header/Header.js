import logoPath from '../../images/logo.svg';
import accountIconPath from '../../images/account_icon.svg';
import { useState, useEffect } from 'react';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import './Header.css';

function Header() {
    const { pathname } = useLocation();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    if (width > 768) {
        return (
            <div className={`header ${pathname === '/' ? 'header_blue' : 'header_black'}`}>
                <div className='header__container'>
                    <Link to="/">
                        <img src={logoPath} alt="Лого" className="header__img" />
                    </Link>
                    <div className='header__links'>
                        <Switch>
                            <Route exact path="/">
                                <Link to="/signup" className="header__link header__link_default">
                                    Регистрация
                                </Link>
                                <Link to="/signin" className="header__link header__link_green">
                                    Войти
                                </Link>
                            </Route>
                            <Route exact path="/movies">
                                <Link to="/movies" className="header__link header__link_default">
                                    Фильмы
                                </Link>
                                <Link to="/saved-movies" className="header__link header__link_default">
                                    Сохраненные фильмы
                                </Link>
                                <Link to="/profile" className="header__link header__link_default">
                                    Аккаунт
                                    <img className='header__link-account' src={accountIconPath} alt='Профиль'></img>
                                </Link>
                            </Route>
                            <Route exact path="/saved-movies">
                                <Link to="/movies" className="header__link header__link_default">
                                    Фильмы
                                </Link>
                                <Link to="/saved-movies" className="header__link header__link_default">
                                    Сохраненные фильмы
                                </Link>
                                <Link to="/profile" className="header__link header__link_default">
                                    Аккаунт
                                    <img className='header__link-account' src={accountIconPath} alt='Профиль'></img>
                                </Link>
                            </Route>
                            <Route exact path="/profile">
                                <Link to="/movies" className="header__link header__link_default">
                                    Фильмы
                                </Link>
                                <Link to="/saved-movies" className="header__link header__link_default">
                                    Сохраненные фильмы
                                </Link>
                                <Link to="/profile" className="header__link header__link_default">
                                    Аккаунт
                                    <img className='header__link-account' src={accountIconPath} alt='Профиль'></img>
                                </Link>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
    else if (width <= 768) {
        return (
            <div className={`header ${pathname === '/' ? 'header_blue' : 'header_black'}`}>
                <div className='header__container'>
                    <Link to="/">
                        <img src={logoPath} alt="Лого" className="header__img" />
                    </Link>
                    <div className='header__links'>
                        <Switch>
                            <Route exact path="/">
                                <Link to="/signup" className="header__link header__link_default">
                                    Регистрация
                                </Link>
                                <Link to="/signin" className="header__link header__link_green">
                                    Войти
                                </Link>
                            </Route>
                            <Route exact path="/movies">
                                <Sidebar />
                            </Route>
                            <Route exact path="/saved-movies">
                                <Sidebar />
                            </Route>
                            <Route exact path="/profile">
                                <Sidebar />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;