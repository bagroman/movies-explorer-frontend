import logoPath from '../../images/logo.svg';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className='register'>
            <img src={logoPath} alt="Лого" className="register__img" />
            <h2 className='register__title'>Добро пожаловать!</h2>
            <form className="register__form" name="register__form">
                <label className='register__label'>Имя</label>
                <input
                    type="text"
                    className="register__input"
                    name="name"
                    id="name-input"
                    required
                />
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
                <button className="register__button" type="submit">Зарегистрировать</button>
            </form>
            <Link to='signin' className='register__login-link'>Уже зарегестрированы? Войти</Link>
        </div>
    )
}

export default Register;