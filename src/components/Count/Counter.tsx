import React from "react";
import s from './Counter.module.css';
import Button from "../Button/Button";

type CounterPropsType = {
    counter: number
    increment: () => void
    reset: () => void
}

const Counter: React.FC<CounterPropsType> = ({counter, increment, reset}) => {

    const incrementFunc =() => {
        increment();
    }
    const resetFunction = () => {
        reset();
    }

    return (
            <div className={s.rectangularBox}>
                <div className={s.upperField}>
                    <div className={s.counterNumber}>
                        {counter ? counter :
                        <p className={s.pStyle}>enter values and press "Set"</p>}
                    </div>

                </div>
                <div className={s.lowerField}>

                       <Button
                           count={counter}
                           name={"Inc"}
                           btnOnClickFunc={incrementFunc}
                       />
                        <Button
                            count={counter}
                            name={"Reset"}
                            btnOnClickFunc={resetFunction}
                        />
                </div>
            </div>
    )
};

export default React.memo(Counter);