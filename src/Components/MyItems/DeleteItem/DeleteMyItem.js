import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function DeleteMyItem() {

    // const { id } = useParams();
    const [Items, setItem] = useState({});
    useEffect(() => {
        // const url = `http://localhost:5000/MyItems/${id}`;
        fetch('http://localhost:5000/MyItems/')
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, []);
    //  DELETE FUNTION
    const handleDelete = id => {
        console.log(id)
        // const proceed = window.confirm('are you sure deleteing');
        // if (proceed) {
        //     console.log(id);
        //     const url = `http://localhost:5000/MyItems/${id}`;
        //     fetch(url, {
        //         method: 'DELETE',
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.deletedCount > 0) {
        //                 console.log(data);
        //                 // const remaining = product.filter(item => item._id !== id);
        //                 // setItemes(remaining)
        //             }
        //         })
        // }
    }

    return (
        <div>
            <button onClick={''}></button>

        </div>
    )
}

export default DeleteMyItem