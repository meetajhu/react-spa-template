import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "./style.css";
import img1 from "./img/b1.jpg";
import img2 from "./img/b2.jpg";
import img3 from "./img/b3.jpg";
import img4 from "./img/court.jpg";

class Home extends Component {
  constructor(props) {
        super(props);   

        this.state = {
            options: {
                loop: true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            },

            items: [
                <div className="item" key={1}><img src={img1} className='owl-image' /></div>,
                <div className="item" key={2}><img src={img2} className='owl-image' /></div>,
                <div className="item" key={3}><img src={img3} className='owl-image' /></div>,
                <div className="item" key={4}><img src={img4} className='owl-image' /></div>,
            ],

        };
    }

    render() {
        return (
            <div>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>

                <div>
                  <h2>Initialized Owl carousel with React wrapper</h2>
                  <p>Hot reloading works</p>
                </div>
            </div>
        );
    }
}

export default Home;