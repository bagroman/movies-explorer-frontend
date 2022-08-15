import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <p className='footer__text'>Учебный проект Яндекс Практикум x BeatFilm.</p>
            <div className='footer__info'>
                <p className='footer__copyright'>&copy; 2022</p>
                <div className='footer__links'>
                    <a href='https://practicum.yandex.ru/' className='footer__link' rel="noreferrer" target="_blank">Яндекс.Практикум</a>
                    <a href='https://github.com/' className='footer__link' rel="noreferrer" target="_blank">Github</a>
                    <a href='https://facebook.com/' className='footer__link' rel="noreferrer" target="_blank">Facebook</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;