import './Portfolio.css';
import arrowPath from '../../images/arrow.svg'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__links'>
                <div className='portfolio__site'>
                    <a href='https://github.com' className='portfolio__link' rel="noreferrer" target="_blank">Статичный сайт</a>
                    <img src={arrowPath} alt='Стрелка'></img>
                </div>
                <div className='portfolio__site'>
                    <a href='https://github.com' className='portfolio__link' rel="noreferrer" target="_blank">Адаптивный сайт</a>
                    <img src={arrowPath} alt='Стрелка'></img>
                </div>
                <div className='portfolio__site'>
                    <a href='https://github.com' className='portfolio__link' rel="noreferrer" target="_blank">Одностраничное приложение</a>
                    <img src={arrowPath} alt='Стрелка'></img>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;