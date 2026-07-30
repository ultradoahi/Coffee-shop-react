
import topCoffeeCup from "../../../assets/transparent_coffee_cup_from_above_edited.png"
import upRightArrow from "../../../assets/arrow-up-right-from-square.svg"

function About(){
    return(
        <section id="about">
            <img src={topCoffeeCup} id="about-title" alt="coffee cup from above" />
            <div className="about-text">
                <p>We opened our doors with a simple mission: to create a space where the neighborhood could slow down, connect, and enjoy a truly great cup of coffee.</p>
                <p>To us, coffee is more than just a morning jolt—it's an invitation to take a breath and catch up with a friend. Whether you’re settling in with a book, meeting a colleague, or grabbing your daily latte to go, our doors are always open. Come on in, pull up a chair, and make yourself at home.</p>
            </div>
            
            <a href=""><button>Know more <img src={upRightArrow} id="up-right-arrow-about"/></button></a>
        </section>
    )
}

export default About;