import style from "./future.module.css"

function Future(){
    
    function back(){
        history.back()
    }

    return(
        <section className={style.future}>
            <h1>This page is still under development and will be available in the future</h1>
            <button onClick={back}>Back</button>
        </section>
    )
}

export default Future;