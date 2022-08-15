import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    const {cards} = props;
    const savedCards = cards.filter((item) => item.owner === 1)
    return (
        <>
            <SearchForm />
            <MoviesCardList cards={savedCards} isSavedPage={true} />
        </>
    );
}

export default SavedMovies;