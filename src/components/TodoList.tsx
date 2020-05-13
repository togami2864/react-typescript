import React from 'react';

import Item from './Item';
const TodoList = ({ todos }) => {
    return (
        <ul>{
            todos.map(todo => {
                return (
                    <Item
                        content={todo.content}
                    />
                )
            })
        }
        </ul>
    )
}

export default TodoList