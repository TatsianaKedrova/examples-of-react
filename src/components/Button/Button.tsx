import React, { MouseEvent } from "react";
import s from './Button.module.css';

type ButtonPropsType = {
    increment: () => void
    count: number
    reset: () => void
}

const Button = (props:ButtonPropsType ) => {

const incrementFunc =(e: MouseEvent<HTMLButtonElement>) => {
    return props.increment();
}
const resetFunction = (e: MouseEvent<HTMLButtonElement>) => {
    return props.reset();
}

    return (
        <div className={s.buttonStyle}>
            <span>
                <button className={props.count < 5 ? s.btnStyle : s.btnInactive}
                onClick={incrementFunc}
                >Inc</button>
            </span>
            <span>
                <button className={props.count > 0 ? s.btnStyle : s.btnInactive}
                        onClick={resetFunction}
                >Reset</button>

            </span>
        </div>
    )
}

export default Button;