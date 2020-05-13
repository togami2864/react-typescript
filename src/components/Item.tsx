import React from 'react';

const Item = ({ content }) => {
    return (
        <>

            <li>
                <input
                    type='checkbox'
                />
                {content}
            </li>
        </>
    )
}

export default Item;