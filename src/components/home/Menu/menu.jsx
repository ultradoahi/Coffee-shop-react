import backgroundCup from "../../../assets/background-coffee-cup.png"
import backgroundCoffeeBeans from "../../../assets/background-coffee-beans.png"
import machiato from "../../../assets/transparent_machiato_with_background.png"
import latte from "../../../assets/transparent_latte_with_background.png"
import cappuccino from "../../../assets/transparent_cappuccino_with_background.png"
import espresso from "../../../assets/transparent_espresso_with_background.png"
import caramelFrappuccino from "../../../assets/transparent_caramel_frappuccino_with_background.png"
import rightArrow from "../../../assets/right-arrow.png"


function Menu(){
    return(
        <section id="menu">
            
                <img id="background-cup" src={backgroundCup} alt="background white cup of coffee"/>
            
            
                <img id="background-beans" src={backgroundCoffeeBeans} alt="background spilled coffee beans at the bottom"/>
            

            <h1>Menu:</h1>

            <div className="grid">
                    <a className="col" href="">
                        <img src={machiato}/>
                        <div className="details">
                            <h3>Machiato</h3>
                            <p>8.99$</p>
                        </div>
                    </a>
                    <a className="col" href="">
                        <img src={latte}/>
                        <div className="details">
                            <h3>Latte</h3>
                            <p>12.99$</p>
                        </div>
                    </a>
                    <a className="col" href="">
                        <img src={cappuccino}/>
                        <div className="details">
                            <h3>Cappuccino</h3>
                            <p>15.89$</p>
                        </div>
                    </a>
                    <a className="col" href="">
                        <img src={espresso}/>
                        <div className="details">
                            <h3>Espresso<br/>duoble shot</h3>
                            <p>6.50$</p>
                        </div>
                    </a>
                    <a className="col" href="">
                        <img src={caramelFrappuccino}/>
                        <div className="details">
                            <h3>Caramel<br/>Frappuccino</h3>
                            <p>25.50$</p>
                        </div>
                    </a>
                    <a className="col" href="">
                        <img src={rightArrow}/>
                    </a>
            </div>

            
        </section>
    )
}

export default Menu;