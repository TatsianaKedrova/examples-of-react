import React, { useState } from "react";
import Counter from "./components/Count/Counter";

const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        if(count < 5) {
            setCount(prev => prev + 1)
        }
    }

    const resetFunc = () => {
        count &&
        setCount(0)
    }

    const setResults = (startValue: number, maxValue:number) => {
        setCount(count);
    }

    return (
        <div>
            <Counter
            counter={count}
            increment={increment}
            reset={resetFunc}
            setResults={setResults}
            />
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