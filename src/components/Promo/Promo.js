import promoLabel from '../../images/promo_label.svg';
import './Promo.css';

function Promo() {
    return (
        <div className='promo'>
            <div className='promo__container'>
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <img src={promoLabel} alt="Подпись" className="promo__img" />
            </div>
        </div>
    )
}

export default Promo;
