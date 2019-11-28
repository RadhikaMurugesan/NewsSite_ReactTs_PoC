import React from 'react';
import './styles.css';
import SourceCardObject from '../../modals/SourceCardInterface';
import { FaGlobe, FaBusinessTime, FaApple, FaAirFreshener, FaMedapps, FaTablet, FaBasketballBall, FaTrello } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


interface SourceCardProps {
        sourceCardData: SourceCardObject;
}
function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      return bgColor;
       
        }

        

export default function SourceCard(Props: SourceCardProps) {
        let bgColor = random_bg_color();
        console.log('bgcolor', bgColor);
        
            

        return (
                <div className="mainDiv" style={{backgroundColor:bgColor}}>
                        <div className="nameDiv">
                                <h4 className="nameText">{Props.sourceCardData.name}</h4>
                        </div>
                        <div className="descDiv">
                                <p className="descText">{Props.sourceCardData.description}</p>
                        </div>
                        <div className="linkDiv">
                                <span>{Props.sourceCardData.category}
                                        {
                                                Props.sourceCardData.category == 'business' ? <FaBusinessTime />
                                                        :
                                                        Props.sourceCardData.category == 'general' ? <FaApple />
                                                                :
                                                                Props.sourceCardData.category == 'entertainment' ? <FaAirFreshener />
                                                                        :
                                                                        Props.sourceCardData.category == 'health' ? <FaMedapps />
                                                                                :
                                                                                Props.sourceCardData.category == 'science' ? <FaTablet />
                                                                                        :
                                                                                        Props.sourceCardData.category == 'sports' ? <FaBasketballBall />
                                                                                                :
                                                                                                Props.sourceCardData.category == 'technology' ? <FaTrello />
                                                                                                        :
                                                                                                        null
                                        }
                                </span>
                                <span><a href={Props.sourceCardData.url}><FaGlobe /></a></span>
                        </div>
                </div>
        );


}

