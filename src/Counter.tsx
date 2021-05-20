import React from "react";

const Counter = (props: any) => {
    console.log('Render: ', props.children)

    return (
        <div>
            <button onClick={props.onClick}>{props.children}: {props.value}</button>



        </div>
    )
};

export default React.memo(Counter);