import React from 'react';
import listData from '../data/list';


export default props => {
    const listElement = listData.map((item, index) => {
        // normally will use ID form database for key
        return <li className="collection-item center" key={item.id}>{item.title}</li>
    });
    return (
        <ul className="collection">
            {listElement}
        </ul>
    )
};