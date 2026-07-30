import style from "./signup.module.css"
import { supabase } from "../../supabase"
import { useState } from "react";
import { emailPattern } from "../../validation.js"
import logo from "../../assets/mug-saucer-svg.svg"


function Main(){
    const [status,setStatus] = useState("idle");
    const [isProperEmail,setProperEmail] = useState("unconfirmed");
    const [isProperPassword,setProperPassword] = useState("unconfirmed");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");

        const emailValidation = emailPattern.test(email) ? "valid" : "invalid";
        const passwordValidation = password.length >= 8 ? "valid" : "invalid";
        
        setProperEmail(emailValidation)
        setProperPassword(passwordValidation)
        
        if(emailValidation !== "valid" || passwordValidation !== "valid"){
            setStatus("idle")
            return;
        }

        setStatus("sending");
            
        const { data,error } = await supabase.auth.signInWithPassword({email,password});
            
        if (error) {
            console.log(error.message);
            setStatus("error");
        } else {
            setStatus("success");
            console.log("you have been signed in successfully")
        }
    };

    return(
        <form className={style.form} onSubmit={handleSubmit}>

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
                        <input type="email" name="email" id="email" autoComplete="true" placeholder="someone@example.com"/>
                        {isProperEmail !== "valid" && isProperEmail !== "unconfirmed" && <p className={style.error}>this is invalid email!</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" autoComplete="true" placeholder="make sure the password is 8 or more characters"/>
                        {isProperPassword !== "valid" && isProperPassword !== "unconfirmed" && <p className={style.error}>the password cant be less then 8 characters</p>}
                    </div>
                    {status === "error" && <p className={style.error}>Either your email or password is wrong please check them and try again and if the problem continue click "Forgot your password?" link</p>}
                </section>
                <div className={style.btngroup}>
                    <a href="/" onClick={(e) => {if(status === "sending"){e.preventDefault()}}}>Back</a>
                    <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Submitting" : "Submit"}</button>
                </div>
            </section>

        </form>
    )
}

export default Main;