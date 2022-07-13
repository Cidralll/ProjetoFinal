import './temperature.scss'

export default function Temperature() {

    return(
        <div className="div-temperature">
            <div className="div-city">
                <p>Passo Fundo -RS</p>
            </div>

            <div className="div-img-temp">
                <div style={{
                    backgroundImage: `url(${"/img/cloudy.png"})`,
                }}
                    className='img-cloudy'
                >
                </div>
                <div className="div-temp">
                    <p>22°</p>
                </div>
            </div>
        </div>
    )
}