import style from "./signup.module.css"
import { useState, useRef, createRef } from "react";
import { emailPattern } from "../../validation.js"
import logo from "../../assets/mug-saucer-svg.svg"


function Main(){
    const email = useRef(null);
    const password = useRef(null);
    
    function test(){
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
                <h1>Sign in</h1>
                <p>Dont have an account? <a href="/sign-up">Create an account</a></p>
                <a href="/forgot-password">Forgot Your Password?</a>
            </section>
            <section className={style.left}>
                <section className={style.inputs}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={email} name="email" id="email" autoComplete="true" placeholder="someone@example.com"/>
                        
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={password} name="password" id="password" autoComplete="true" placeholder="make sure the password is 8 or more characters"/>
                        
                    </div>
                    <p>I dont check if you have an account but it worth seeing how good this design is</p>
                </section>
                <div className={style.btngroup}>
                    <a href="/">Back</a>
                    <button type="button" onClick={test}>Submit</button>
                </div>
            </section>

        </form>
    )
}

export default Main;