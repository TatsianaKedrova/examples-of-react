import React, {useCallback} from "react";
import Counter from "./components/Count/Counter";

const App = () => {
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)

    const increaseCounter1 = useCallback(() => {
        setCount1(count1 => count1 + 1)
    }, []);

    const increaseCounter2 = useCallback(() => {
        setCount1(count2 => count1 + 1)
    }, []);

    return (
        <>
            <Counter value={count1} onClick={increaseCounter1}>Counter 1</Counter>
        </>
    )
};

export default App;