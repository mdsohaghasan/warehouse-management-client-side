import React from 'react'
import { Link } from 'react-router-dom'
import DeleteItem from './DeleteItem';
// import photo from "../../img/0.jpg";

function Items({ item }) {
    const { name, description, price, img, _id } = item;

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
        <div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <img src={''} alt="item-pic" />
                            <h5 class="card-title">Name : {name}</h5>
                            <h5 class="card-title">price : {price}</h5>
                            <p class="card-text">shortDes : {description}</p>
                            <button onClick={() => handleDelete(item._id)} class="btn btn-info">{_id}</button>
                            <Link to={`/ItemDetails/${item._id}`} class="btn btn-primary">Update btn</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Items