import React, {ChangeEvent} from "react";
import s from './Setting.module.css';
import Button from "../Button/Button";

type SettingPropsType = {
    startValue: number
    maxValue: number
    count: number
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setResults: (startValue: number) => void
}

const Setting: React.FC<SettingPropsType> = (props) => {

    let active = true;
    const setResultValue = () => {
        props.setResults(props.startValue)
        active = !active;
    }

    return (
            <div className={s.rectangularBox}>
                <div className={s.upperField}>
                    <div>
                        <span className={s.letterStyle}>max value: </span>
                        <input type="number" value={props.maxValue} onChange={props.onChangeMaxValue} />
                    </div>
                    <div>
                        <span className={s.letterStyle}>start value: </span>
                        <input type="number" value={props.startValue} onChange={props.onChangeStartValue} />
                    </div>
                </div>
                <div className={s.lowerField}>
                    <Button count={props.count} name={"Set"} btnOnClickFunc={setResultValue} />
                </div>
            </div>
    )
};

export default React.memo(Setting);