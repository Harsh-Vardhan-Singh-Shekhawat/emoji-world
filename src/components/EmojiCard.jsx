import React from "react";
import emoji from "./emoji";
export default function EmojiCard(props){
    return <div className="Card">
                
                <div className="symbol">{props.symbol}</div>
                <h2>{props.name}</h2>
                <p>{props.meaning}</p>
               
           </div>;
}