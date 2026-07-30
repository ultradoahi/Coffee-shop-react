import { useState } from "react";

function Review(){
    let review = 4.3;
    let arr = [];

    (function reviewCalculate(rev){
        let val = rev;
        for(let i = 0;i < 5;i++){
            if(val > 1){
                val = (val*10 - 10)/10;
                arr.push(1)
            } else {
                arr.push(val)
                val = 0
            }
        }
    })(review)

    let [stars,setStars] = useState([0,0,0,0,0]);

    return(
        <section className="review-section">
            <div className="evaluation">
                <div className="result">
                    <p>4.3</p>
                    <div>
                        {arr.map((num,ind) => {
                            let final = `${num * 100}%`;
                            return <span key={ind} style={{"--start":final}}></span>
                        })}
                    </div>
                </div>
                <div className="review-details">
                    <div><p>1</p><div className="review-bar"><span></span></div></div>
                    <div><p>2</p><div className="review-bar"><span></span></div></div>
                    <div><p>3</p><div className="review-bar"><span></span></div></div>
                    <div><p>4</p><div className="review-bar"><span></span></div></div>
                    <div><p>5</p><div className="review-bar"><span></span></div></div>
                </div>
            </div>
            <div className="review">
                <h1>How was your Experiece?</h1>
                <div className="wrapper">
                    <div className="stars">
                        {stars.map((star,ind) => {
                            return <div id={ind+1} onClick={(e) => {
                                let newArr =[0,0,0,0,0];
                                for(let i = e.target.id-1;i >= 0;i--){
                                    newArr[i] = 1
                                }
                                setStars(newArr)
                            }} className={stars[ind] === 1 ? "gold" : ""} key={ind}></div>
                        })}
                    </div>
                    <button onClick={(e) => {location.reload()}}>Send</button>
                </div>
            </div>
        </section>
    )
}

export default Review;