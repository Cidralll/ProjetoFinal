import './style-home.scss';
import { ImgLogo } from "./img/img-logo";
import Temperature from "./temperature/temperature";
import Time from "./time/time";
import { ImgBall } from './img/ball';
import Text from './text/text';
import FooterHome from './footer/footer';

export default function Home() {
    return (
        <section>
            <header className='header-home'>
            <ImgLogo />

            <Time />

            <Temperature />

            </header>

            <main className='main-home'>
                <ImgBall />

                <Text />
            </main>

            <FooterHome />
        </section>
    )
}