import React, {MouseEvent} from "react";
import s from './Button.module.css';

type ButtonPropsType = {
    count: number
    name: string
    btnOnClickFunc: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = (props:ButtonPropsType ) => {


    return (
        <div className={s.buttonStyle}>

                <button className={ props.active ? s.btnStyle : s.btnInactive }
                onClick={props.btnOnClickFunc}
                >{props.name}</button>

        </div>
    )
}

export default Button;