import React, {ChangeEvent, useState} from "react";
import Counter from "./components/Count/Counter";
import Setting from "./components/Setting/Setting";
import s from "./App.module.css";

const App = () => {
    const [count, setCount] = useState<number>(0);
    const [isError, setIsError] = useState<boolean>(false);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value);
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber);
    }

    const increment = () => {
        setCount(prev => prev + 1)
    }
    const resetFunc = () => {
        count &&
        setCount(0)
    }
    const setResults = (startValue: number) => {
        setCount(startValue);
    }

    return (
        <div className={s.container}>
            <Setting startValue={startValue} maxValue={maxValue} count={count} onChangeStartValue={onChangeStartValue} onChangeMaxValue={onChangeMaxValue} setResults={setResults} />
            <Counter counter={count} increment={increment} reset={resetFunc} />
        </div>

    )













    /*const increaseCounter1 = useCallback(() => {
        setCount1(count1 => count1 + 1)
    }, []);

    const increaseCounter2 = useCallback(() => {
        setCount1(count2 => count1 + 1)
    }, []);

    return (
        <>
            <Counter value={count1} onClick={increaseCounter1}>Counter 1</Counter>
        </>
    )*/
};

export default App;