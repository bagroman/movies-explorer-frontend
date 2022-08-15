import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <form className="profile__form" name="profile__form">
                <input
                    type="text"
                    className="profile__input"
                    name="name"
                    id="name-input"
                    placeholder="Имя"
                    value="test"
                    required
                />
                <input
                    type="email"
                    className="profile__input"
                    name="email"
                    id="email-input"
                    placeholder="E-mail"
                    value="test@email.ru"
                    required
                />
                <button className="profile__button" type="submit">Редактировать</button>
                <button className="profile__button profile__button_red" type="button">Выйти из аккаунта</button>
            </form>
        </div>
    )
}

export default Profile;