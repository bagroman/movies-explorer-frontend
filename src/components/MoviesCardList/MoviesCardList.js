import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <>
            <div className='movies-card-list'>
                <div className='movies-card-list__container'>
                    {props.cards.map((item) => (
                        <MoviesCard
                            key={item.movieId}
                            card={item}
                            isSavedPage={props.isSavedPage}
                        />)
                    )}
                </div>
                <button className='movies-card-list__more-btn' type='button'>Ещё</button>
            </div>
        </>
    );
}

export default MoviesCardList;