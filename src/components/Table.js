import React from 'react';
import Tablerow from './TableRow';

let data = [
    {
        title: "Billy Elliot",
        length: 123,
        rating: 5,
        genres: ["Drama", "Comedia"],
        awards: 2
    },
    {
        title: "Alicia en el pais de las maravillas",
        length: 142,
        rating: 4.8,
        genres: ["Drama", "accion", "Comedia"],
        awards: 3
    },
]

const Table = () => {
    return (
        <div className="container">


            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Premios</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return <Tablerow
                                key={item.title + index}
                                title={item.title}
                                length={item.length}
                                rating={item.rating}
                                genres={item.genres}
                                awards={item.awards}
                            />
                        })

                    }


                </tbody>
            </table>

        </div>
    );
}

export default Table;
