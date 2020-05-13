import React, { useState } from 'react';

type Props = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    // onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    // handleSubmit: (e: React.FormEvent<HTMLInputElement>) => void,
}


const Form: React.FC<Props> = ({ value, setValue }) => {
    const handleSubmit: React.FormEventHandler<HTMLInputElement> = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (value === '') {
            alert('入力されていません')
        } else if (value.length > 10) {
            alert('文字が多すぎます')
        } else {
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='add todo'
                onChange={e => {
                    setValue(e.target.value)
                }}
                value={value}
            />
        </form>
    )
}

export default Form;

