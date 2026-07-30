import scrollUp from "../../assets/arrow-up.svg"

function ScrollUp(props){

    function up(){
        scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }

    if(props.verScroll > 900){
        return(
            <div className="scroll-up" onClick={up}>
                <img src={scrollUp}/>
            </div>
        )
    }
}

export default ScrollUp;