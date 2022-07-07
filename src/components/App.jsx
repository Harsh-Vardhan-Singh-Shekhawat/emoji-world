import React from "react";
import "./style.css";
import emoji from "./emoji";
import EmojiCard from "./EmojiCard";

// function Entry(term){
//     return <EmojiCard 
//     symbol = {term.symbol}
//     name= {term.name}
//     meaning = {term.desc}
//     />
// }

export default function App(){
    return <div className="container">
        <h1 className="heading">Emoji World</h1>
        <div >
            <EmojiCard 
            name = {emoji[0].name}
            symbol = {emoji[0].symbol}
            meaning = {emoji[0].desc}
            />
             <EmojiCard 
            name = {emoji[1].name}
            symbol = {emoji[1].symbol}
            meaning = {emoji[1].desc}
            />
             <EmojiCard 
            name = {emoji[2].name}
            symbol = {emoji[2].symbol}
            meaning = {emoji[2].desc}
            />
             <EmojiCard 
            name = {emoji[3].name}
            symbol = {emoji[3].symbol}
            meaning = {emoji[3].desc}
            />
             <EmojiCard 
            name = {emoji[4].name}
            symbol = {emoji[4].symbol}
            meaning = {emoji[4].desc}
            />
           
        </div>
    </div>
}