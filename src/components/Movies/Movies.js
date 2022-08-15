import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
    return (
        <>
            <SearchForm />
            <MoviesCardList cards={props.cards} isSavedPage={false} />
        </>
    );
}

export default Movies;