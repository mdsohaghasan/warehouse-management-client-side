import React from "react";
import { useState, useEffect } from "react";
import Items from "../Items/Items";
import './Items.css';

const ItemHooks = () => {
    const [Itemes, setItemes] = useState([]);
    useEffect(() => {
        fetch("https://thawing-harbor-02230.herokuapp.com/Items/")
            .then((res) => res.json())
            .then((data) => setItemes(data));
    }, []);
    return (
        <div>
            <h1 className="services-title">Our item</h1>
            <div className="Itmes-container container">
                {Itemes.map((item) => (
                    <Items key={item._id} item={item}></Items>

                ))}
            </div>
        </div>
    );
};

export default ItemHooks;
