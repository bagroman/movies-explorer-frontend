import './MoviesCard.css';
import saveIconPath from '../../images/saved_icon.svg';
import deleteIconPath from '../../images/delete_icon.svg';

function MoviesCard(props) {
    return (
        <>
            <div className='movies-card'>
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>{props.card.nameRU}</h2>
                    <p className='movies-card__duration'>{props.card.duration} минут</p>
                </div>
                <img className='movies-card__img' src={props.card.image} alt='Постер'></img>
                <button type='button' className={`movies-card__button ${!props.isSavedPage&&props.card.owner ===1 ? 'movies-card__button_saved' : null}`}>
                    {props.isSavedPage
                        ? <img src={deleteIconPath} alt='Крестик'></img> : props.card.owner === 1
                        ? <img src={saveIconPath} alt='Галка'></img>
                        : 'Сохранить'}
                </button>
            </div>
        </>
    );
}

export default MoviesCard;