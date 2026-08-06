import style from "../sign-in/signup.module.css"
import { useState, useRef, createRef, useEffect } from "react";
import { emailPattern } from "../../validation.js"
import logo from "../../assets/mug-saucer-svg.svg"

function Main(){
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    function test(){
        name.current.value = ''
        email.current.value = ''
        password.current.value = ''
    }
    
        return(
            <form className={style.form}>
    
                <section className={style.right}>
                    <header className={style.header}>
                        <h1 className={style.brand}>
                            <img src={logo} />
                            <p>Coffee</p>
                        </h1>
                    </header>
                    <h1>Sign up</h1>
                    <p>already have an account? <a href="/sign-in">Sign in</a></p>
                </section>
                <section className={style.left}>
                    <section className={style.inputs}>
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" ref={name} name="name" id="name" placeholder="Optional"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" ref={email} name="email" id="email" autoComplete="true" placeholder="someone@example.com" />
                            
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" ref={password} name="password" id="password" autoComplete="true" placeholder="make sure the password is 8 or more characters" />
                            
                        </div>
                        <p>you will not create an account since this for review only but you can try</p>
                    </section>
                    <div className={style.btngroup}>
                        <a href="/" onClick={(e) => {if(status === "sending"){e.preventDefault()}}}>Back</a>
                        <button type="button" onClick={test}>Submit</button>
                    </div>
                </section>
    
            </form>
        )
}

export default Main