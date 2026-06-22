import { useState } from "react";
import { validateColor } from "../lib/validateColor";

export const ColorInput = ({ onSubmit, disabled }: {
    onSubmit: (value: string) => void,
    disabled?: boolean;
}) => {
    const [value, setValue] = useState<string>('');
    const submitHandler = () => {
        if (validateColor(value)) {
            onSubmit(value)
            setValue('');
        }
    }
    return <div className='inputs'>
        <input value={value} onChange={(event) => { setValue(event.target.value) }} />
        <button onClick={submitHandler} disabled={disabled}>Подтвердить</button>
    </div>
}