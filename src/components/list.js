import React from 'react';


export default props => {
    const listElement = props.data.map((item, index) => {
        // normally will use ID form database for key
        return <li className="collection-item center" key={index}>{item.title}</li>
    });
    return (
        <ul className="collection">
            {listElement}
        </ul>
    )
};