import React from 'react';

const Item = (props) => {
    const { x, foo } = props

    return (
        <div>
            内容{x} - {foo}
        </div>
    )
}

export default Item

