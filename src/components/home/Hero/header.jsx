import hotMuh from "../../../assets/mug-saucer-svg.svg"
import { useEffect } from "react";

function Header(){

    useEffect(() => {
        const a = document.querySelectorAll("a[href^='#']")

        a.forEach(link => {
            link.addEventListener("click",function(e){
                e.preventDefault()
                const target = document.querySelector(this.getAttribute("href"))
                if(target){
                    target.scrollIntoView({
                        behavior:"smooth",
                        block:"start"
                    })
                }
            })
        })
    },[])

    return (
        <header>
            <h1 className="brand-name">
                <img src={hotMuh}/>
                Coffee
            </h1>

            <nav>
                <a href="#about">
                    <p>About</p>
                </a>
                <a href="#menu">
                    <p>Menu</p>
                </a>
                <a href="#footer">
                    <p>Contacts</p>
                </a>
                <a href="/sign-in" className="contact-us">
                    <p>Sign in</p>
                </a>
            </nav>
        </header>
    )
}

export default Header;