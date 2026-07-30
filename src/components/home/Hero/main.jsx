import mainPhoto from "../../../assets/barista_serving_coffee.jpg";
import upRightArrow from "../../../assets/arrow-up-right-from-square.svg"

function Main_Hero(){
    return(
        <main>
            <div>
                <h1>The best way to start your day is a hot cup of <span style={{color:"var(--light-brown)"}}>coffee</span></h1>
                <p>Enjoy the taste of brewed and fresh coffee in the morning</p>
                <a href=""><button>Place an order <img src={upRightArrow} alt="up right arrow" id="up-right-arrow-hero"/></button></a>
            </div>
            <img src={mainPhoto} alt="Barista serving coffee"/>
        </main>
    )
}

export default Main_Hero;