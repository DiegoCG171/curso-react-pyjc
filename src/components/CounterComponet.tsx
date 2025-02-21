import { Button } from "antd";
import { useState } from "react"

interface Props {
    initialValue: number;
    mas: number;
    menos: number;
}

export const CounterComponent = ({initialValue, mas, menos}: Props) => {

    const [counter, setCounter] = useState(initialValue)


    const handleCounter = (value: number) => {
        setCounter(counter + value)
    }
    const handleReset = () => {
        setCounter(initialValue)
    }

    return (
        <div>
            <h1>
                Counter: {counter}
            </h1>
            <Button style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}} onClick={() => handleCounter(menos)} >{menos}</Button>
            <Button style={{borderRadius: 0}} onClick={handleReset} >Reset</Button>
            <Button style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}} onClick={() => handleCounter(mas)}>+{mas}</Button>
        </div>
    )
}