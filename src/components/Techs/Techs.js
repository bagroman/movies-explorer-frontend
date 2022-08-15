import './Techs.css';

function Techs() {
    return (
        <div className='techs'>
            <div className='techs__container'>
                <h2 className='techs__title'>Технологии</h2>
                <h3 className='techs__second-title'>7 технологий</h3>
                <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className='techs__list'>
                    <div className='techs__list-item'>HTML</div>
                    <div className='techs__list-item'>CSS</div>
                    <div className='techs__list-item'>JS</div>
                    <div className='techs__list-item'>React</div>
                    <div className='techs__list-item'>Git</div>
                    <div className='techs__list-item'>Express.js</div>
                    <div className='techs__list-item'>mongoDB</div>
                </div>
            </div>
        </div>
    )
}

export default Techs;