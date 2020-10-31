import React, { useState } from 'react';
import './Card.scss';

export default function CardComponent(props){
 const[showOptions,toggleOptions] = useState(false);
    return(
        <section className="card-container" onClick={()=> toggleOptions(!showOptions)}>
            {
            (showOptions)?
            (
                <ul className="card-list">
                    {
                        props.category.options.map((option)=>{
                        return <li key={option}>{option}</li>
                        })
                    }

                </ul>
            ):
            (
                <>
                <section className="top-card">
                    <img className="card-img" src={props.category.img} alt={props.category.name}></img>
                </section>
                <section className="top-bottom">
                {props.category.name}
                </section>
                </>

            )
            }
            {props.category.name}
        </section>
    )
}