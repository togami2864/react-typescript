import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

import Form from '../components/Form';
import TodoList from '../components/TodoList';

const Room = () => {

    const [value, setValue] = useState('')
    const todos = [
        {
            content: 'ピアノ'
        }
    ];

    return (
        <div>
            <Form value={value} setValue={setValue} />
            <TodoList todos={todos} />
            <Link to='/'>戻る</Link>
        </div>
    )
}

export default Room
