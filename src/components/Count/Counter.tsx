import React from "react";
import s from './Counter.module.css';
import Button from "../Button/Button";

type CounterPropsType = {
    counter: number
    increment: () => void
    reset: () => void
}

const Counter: React.FC<CounterPropsType> = ({counter, increment, reset}) => {

    return (
        <div className={s.container}>

            <div className={s.rectangularBox}>
                <div className={s.upperField}>
                    <div>
                        <span className={s.letterStyle}>max value: </span>
                        <input type="number"/>
                    </div>
                    <div>
                        <span className={s.letterStyle}>start value: </span>
                        <input type="number"/>
                    </div>
                </div>
                <div className={s.lowerField}>
                    
                </div>
            </div>
            <div className={s.rectangularBox}>
                <div className={s.upperField}>
                    <div className={counter < 5? s.counterNumber : s.counterMax}>
                        {counter}
                    </div>

                </div>
                <div className={s.lowerField}>
                    <Button increment={increment}
                            count={counter}
                            reset={reset}
                    />
                </div>
            </div>

        </div>
    )
};

export default React.memo(Counter);