import './SearchForm.css';
import searchIconPath from '../../images/search.svg';

function SearchForm() {
    return (
        <div className='search-form'>
            <form className='search-form__container'>
                <img className='search_form__icon' src={searchIconPath} alt='Лупа'></img>
                <input className='search-form__input' type='text' id='search-form' placeholder="Фильм" />
                <button className='search-form__button' type="submit">Найти</button>
                <div className="search-form__toggle">
                    <input type="checkbox" className="search-form__chekbox" name="toggleSwitch" id="search-toggle" />
                    <label className="search-form__label" htmlFor="search-toggle">
                        Короткометражки
                    </label>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;