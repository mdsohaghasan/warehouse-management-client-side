import React from 'react'
import { Link } from 'react-router-dom'
import ItemHooks from '../itemHooks/ItemHooks'

function Inventory() {
    // const { name, description, price, img } = inventory;

    return (
        <div>
            <div>Inventory manage</div>
            {/* <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <img src={''} alt="item-pic" />
                            <h5 class="card-title">Name : { }</h5>
                            <h5 class="card-title">price : { }</h5>
                            <p class="card-text">shortDes : { }</p>
                            <Link to={`/ItemDelete/${''}`} class="btn btn-primary">Delete Item</Link>
                        </div>
                    </div>
                </div>
            </div> */}

            <ItemHooks></ItemHooks>

            <Link to={`/additem/${''}`} class="btn btn-primary">Add Item</Link>

        </div>
    )
}

export default Inventory
