import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { itemId } = useParams();
    const splittedId = itemId.split('-');
    const id = splittedId[0];

    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setlunch] = useState([]);
    const [dinner, setDinner] = useState([]);

    useEffect(() => {
        if (id === 'bf') {
            fetch('/breakfast.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBreakfast(data)
                })
        }
        else if (id === 'ln') {
            fetch('/lunch.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setlunch(data)
                })
        }
        else if (id === 'dn') {
            fetch('/dinner.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setDinner(data)
                })
        }
    }, [])


    const findFood = (f) => {
        if (f.id === itemId)
            return f;
    }

    let item = {};
    if (id === 'bf') {
        item = breakfast.find(findFood);
    } else if (id === 'ln') {
        item = lunch.find(findFood);
    } else if (id === 'dn') {
        item = dinner.find(findFood);
    }

    console.log(item);

    const { img } = item;


    return (
        <div>
            <h1>This is checkout</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Checkout;