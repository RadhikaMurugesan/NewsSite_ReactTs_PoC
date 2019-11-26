import React from 'react';
import './styles.css';
import SourceCardObject from '../../modals/SourceCardInterface';

interface SourceCardProps {
sourceCardData: SourceCardObject;
}
export default function SourceCard(Props:SourceCardProps) {
   console.log('SourceCardProps', Props.sourceCardData);
   
   
        return(
            <div >
                <div className="nameDiv">
        <h4 className="nameText">{Props.sourceCardData.name}</h4>
                </div>
                <div className="descDiv">
        <p className="descText">{Props.sourceCardData.description}</p>
                </div>
                <div className="linkDiv">
        <span>{Props.sourceCardData.category}</span>
        <span>{}</span>
                </div>
            </div>
        );
  
        
}  

