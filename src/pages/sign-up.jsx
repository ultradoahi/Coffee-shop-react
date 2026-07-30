import Main from "../components/sign-up/main";
import style from "../components/sign-in/signup.module.css"

function SignUp(){
    return(
        <section className={style["sign-up"]}>
            <Main></Main>
        </section>
    )
}

export default SignUp