import "../Cards/index.css"
import declarative from "../../Assets/Images/declarative-logo.png"
import components from "../../Assets/Images/components-logo.png"
import singleWay from "../../Assets/Images/singleWay-logo.png"
import jsx from "../../Assets/Images/jsx-logo.png"

function Cards() {

    return (

        <section className="footer">
            <div className="display">
                <a href="#">
                    <img src={declarative} alt="declarative-logo"/>
                </a>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive Uis.</p>
            </div>

            <div className="display">
                <a href="#">
                    <img src={components} alt="components-logo"/>
                </a>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state</p>
            </div>

            <div className="display">
                <a href="#">
                    <img src={singleWay} alt="singleWay-logo"/>
                </a>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed t the component's</p>
            </div>

            <div className="display">
                <a href="#">
                    <img src={jsx} alt="jsx-logo"/>
                </a>
                <h3>JSX</h3>
                <p>Statically-typed designed to run o modern browsers.</p>
            </div>

        </section>
    );
}
export {Cards}
