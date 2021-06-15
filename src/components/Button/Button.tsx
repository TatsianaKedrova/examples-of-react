import React, {MouseEvent} from "react";
import s from './Button.module.css';

type ButtonPropsType = {
    name: string
    btnOnClickFunc: (e: MouseEvent<HTMLButtonElement>) => void
    active: boolean
}

const Button = (props:ButtonPropsType ) => {


    return (
        <div className={s.buttonStyle}>

                <button className={ props.active ? s.btnStyle : s.btnInactive }
                onClick={props.btnOnClickFunc}
                >{props.name}</button>
            {/*<span>
                <button className={props.count > 0 ? s.btnStyle : s.btnInactive}
                        onClick={resetFunction}
                >Reset</button>

            </span>*/}
        </div>
    )
}

export default Button;