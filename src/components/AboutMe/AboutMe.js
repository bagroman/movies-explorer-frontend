import './AboutMe.css';
import photoPath from '../../images/photo.png';

function AboutMe() {
    return (
        <div className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about-me__content'>
                    <div className='about-me__info'>
                        <h3 className='about-me__name'>Виталий</h3>
                        <h4 className='about-me__position'>Фронтенд-разработчик, 30 лет</h4>
                        <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <div className='about-me__links'>
                        <a href='https://facebook.com' className='about-me__link' rel="noreferrer" target="_blank">Facebook</a>
                        <a href='https://github.com' className='about-me__link' rel="noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                <img src={photoPath} className='about-me__photo' alt='Фото'></img>
            </div>
        </div>
    )
}

export default AboutMe;