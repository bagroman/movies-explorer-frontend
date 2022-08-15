import logoPath from '../../images/logo.svg';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='register'>
            <img src={logoPath} alt="Лого" className="register__img" />
            <h2 className='register__title'>Рады видеть!</h2>
            <form className="register__form" name="register__form">
                <label className='register__label'>E-mail</label>
                <input
                    type="email"
                    className="register__input"
                    name="email"
                    id="email-input"
                    required
                />
                <label className='register__label'>Пароль</label>
                <input
                    type="password"
                    className="register__input"
                    name="passwor"
                    id="password-input"
                    required
                />
                <button className="register__button" type="submit">Войти</button>
            </form>
            <Link to='signup' className='register__login-link'>Еще не зарегистрированы? Регистрация</Link>
        </div>
    )
}

export default Login;