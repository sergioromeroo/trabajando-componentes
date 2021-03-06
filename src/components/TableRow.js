import React from 'react';

const Tablerow = ({title,length,rating,genres,awards}) => {
    return (
        <tr>
            <th>{title}</th>
            <td>{length}</td>
            <td>{rating}</td>
            <td><ul>
                {
                genres.map(genre => <li>{genre}</li>)
                }
                 
                 </ul>
                 </td>
            <td>{awards}</td> 
        </tr>
    );
}

export default Tablerow;
