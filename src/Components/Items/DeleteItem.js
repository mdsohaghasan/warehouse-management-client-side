import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function DeleteItem() {

    const { id } = useParams();
    const [Item, setItem] = useState({});
    useEffect(() => {
        const url = `https://thawing-harbor-02230.herokuapp.com/Items/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, [id]);
    //  DELETE FUNTION
    const handleDelete = id => {
        const proceed = window.confirm('are you sure deleteing');
        if (proceed) {
            console.log(id);
            const url = `https://thawing-harbor-02230.herokuapp.com/Items/${id}`;

            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        // const remaining = product.filter(item => item._id !== id);
                        // setItemes(remaining)
                    }
                })
        }
    }


    return (

        <button onClick={() => handleDelete(Item._id)} class="btn btn-info">delete btn</button>

    )
}

export default DeleteItem