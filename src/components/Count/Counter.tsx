import React from "react";
import s from './Counter.module.css';
import Button from "../Button/Button";

const Counter = (props: any) => {
    console.log('Render: ', props.children)

    return (
        <div className={s.container}>
            {/*<button onClick={props.onClick}>{props.children}: {props.value}</button>*/}

            <div className={s.rectangularBox}>
                <div className={s.upperField}>
                </div>
                <div className={s.lowerField}></div>
            </div>
            <div className={s.rectangularBox}>
                <div className={s.upperField}>
                    state
                </div>
                <div className={s.lowerField}>
                    <Button />
                    <Button />
                </div>
            </div>

        </div>
    )
};

export default React.memo(Counter);