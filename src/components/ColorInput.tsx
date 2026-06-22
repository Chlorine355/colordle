import { useState } from "react";
import { validateColor } from "../lib/validateColor";

export const ColorInput = ({ onSubmit, disabled }: {
    onSubmit: (value: string) => void,
    disabled?: boolean;
}) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const submitHandler = () => {
        const result = validateColor(value);
        if (result.isValid) {
            onSubmit(value);
            setError(null);
            setValue('');
        } else {
            setError(result.message)
        }
    }
    return <div className='controls'>
        <div className="inputs">
            <input value={value} onChange={(event) => { setValue(event.target.value) }} maxLength={6}/>
            <button onClick={submitHandler} disabled={disabled}>Подтвердить</button>
        </div>
        {error && <div className='error'>{error}</div>}
    </div>
}