import './NotFound.css';

function NotFound() {
    return (
        <div className='notfound'>
            <h2 className='notfound__title'>404</h2>
            <h3 className='notfound__subtitle'>Страница не найдена</h3>
            <button className='notfound__button'>Назад</button>
        </div>
    )
}

export default NotFound;