import React,{Component} from 'react';
import './Container.scss';
import beer from '../../Assets/Icons/Beer.png';
import burger from '../../Assets/Icons/Burger.png';
import cereal from '../../Assets/Icons/Cereal.png';
import eggs from '../../Assets/Icons/Eggs.png';
import hotdog from '../../Assets/Icons/Hotdog.png';
import meat from '../../Assets/Icons/Meat.png';
import pizza from '../../Assets/Icons/Pizza.png';
import sandwich from '../../Assets/Icons/Sandwich.png';

import CardComponent from './Card/Card';


class ContainerComopnent extends Component {

     state ={
         categories:[
            {
                name: "Beer",
                img: beer,
                options: ["IPA", "Brown Ale", "Porter", "Stout"]
            },
            {
                name: "Burger",
                img: burger,
                options: ["Cheese", "Tex-Mex", "Aloha", "Portobello"]
            },
            {
                name: "Cereal",
                img: cereal,
                options: ["Oats", "Wheat", "Rice", "Maize"]
            },
            {
                name: "Eggs",
                img: eggs,
                options: ["Boiled", "Scrambled", "Omelet", "Over"]
            },
            {
                name: "Hotdog",
                img: hotdog,
                options: ["Chicago", "Corney", "Polish", "Italian"]
            },
            {
                name: "Meat",
                img: meat,
                options: ["Duck", "Rabbit", "Goose", "Turkey"]
            },
            {
                name: "Pizza",
                img: pizza,
                options: ["Sicilian", "Neapolitan", "Greek", "California"]
            },
            {
                name: "Sandwich",
                img: sandwich,
                options: ["French", "Cheese", "Croque", "Club"]
            },
         ]
     }
    render(){
        return(
            <section className="menu-container">
                <div className="bars"></div>
                <section className="top">
                  <h7>Food menu by</h7>
                   <img src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.0-9/84139624_2270754376358253_2327275724949422080_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=y4VpcZk6lx0AX8HEdaU&_nc_ht=scontent.fbwa1-1.fna&oh=11c975dafe077ba23a3c99ff62f663ea&oe=5FC504EC"  />
                </section>
                <section className= "bottom">
                    {
                        this.state.categories.map((category) =>{
                        return <CardComponent category={category}></CardComponent>
                        })
                    }

                </section>
            </section>
        )
    }
}

export default ContainerComopnent;