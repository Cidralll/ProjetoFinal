import './check-radio.scss';

export default function CheckPassword() {
    return (
        <section className="section-radio">
            <div className="div-radio1">
                <input type='radio' id='sixCharacters' disabled checked></input>Mínimo: 6 caracteres
                <input type='radio' id='oneNumber' disabled></input>Mínimo: 1 número
            </div>
            <div className="div-radio2">
                <input type='radio' id='lowercase' disabled></input>Mínimo: 1 letra minúscula
                <input type='radio' id='uppercase' disabled></input>Mínimo: 1 letra maiúscula
            </div>
        </section>
    );
}