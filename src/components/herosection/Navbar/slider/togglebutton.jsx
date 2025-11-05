import "./Slider.scss"
import {motion} from "framer-motion"

function Togglebutton({setopen}){
    return(
        <button className="togglebuttons" onClick={()=>setopen((prev)=>(!prev))}>
            <svg width="70%" height="70%" viewBox="0 0 23 23">
                <motion.path
               
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                variants={{
                    open:{d:"M 3 16.5 L 17 2.5"},
                    close:{d:"M 2 2.5 L 20 2.5"}
                }}/>
                <motion.path
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                    open:{opacity:0},
                    close:{opacity:1}
                }}
                    
                />
                <motion.path
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                variants={{
                    open:{d:"M 2 3.5 L 17 16.346"},
                    close:{d:"M 3 16.346 L 20 16.346"}
                }}/>

            </svg>
           
        </button>

      
    )
}
export default Togglebutton