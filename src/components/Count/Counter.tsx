import React, {ChangeEvent, MouseEvent, useState} from "react";
import s from './Counter.module.css';
import Button from "../Button/Button";

type CounterPropsType = {
    counter: number
    increment: () => void
    reset: () => void
    setResults: (startValue: number, maxValue:number) => void
}

const Counter: React.FC<CounterPropsType> = ({counter, increment, reset, setResults}) => {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+(e.currentTarget.value));
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+(e.currentTarget.value));
    }

    const incrementFunc =(e: MouseEvent<HTMLButtonElement>) => {
        return increment();
    }
    const resetFunction = (e: MouseEvent<HTMLButtonElement>) => {
        return reset();
    }

    /*const setResultValues = (e: MouseEvent<HTMLButtonElement>) => {
        setResults()
    }*/

    return (
        <div className={s.container}>

            <div className={s.rectangularBox}>
                <div className={s.upperField}>
                    <div>
                        <span className={s.letterStyle}>max value: </span>
                        <input type="number" onChange={onChangeStartValue} />
                    </div>
                    <div>
                        <span className={s.letterStyle}>start value: </span>
                        <input type="number" onChange={onChangeMaxValue} value={counter} />
                    </div>
                </div>
                <div className={s.lowerField}>
                    <Button name={"Set"} btnOnClickFunc={incrementFunc} active={true}/>
                </div>
            </div>
            <div className={s.rectangularBox}>
                <div className={s.upperField}>
                    <div className={counter < 5? s.counterNumber : s.counterMax}>
                        {/*{counter ? counter :
                        <p className={s.pStyle}>enter values and press "Set"</p>}*/}
                    </div>

                </div>
                <div className={s.lowerField}>

                       <Button
                           name={"Inc"}
                           btnOnClickFunc={incrementFunc}
                           active={true}
                       />
                        <Button
                            name={"Reset"}
                            btnOnClickFunc={resetFunction}
                            active={false}
                        />
                </div>
            </div>

        </div>
    )
};

export default React.memo(Counter);