import { Button } from "../Button";
import "../Header/index.css"

function Header() {
    return (

        <header>

            <div className='logo'>

                <a href="#">
                    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="Logo"/>
                </a>

                <a href="#">
                    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="List"/>
                </a>

            </div>

            <div className='title'>

                <h1>
                    Say hello to <br />ReactJs
                </h1>

                <p>
                    You will learn how to use <br/> the most popular fronted library, <br /> and become a super Ninja developer.
                </p>

            </div>

            <Button />
            
        </header>
    );
}
export {Header}
