import React from "react";
import emoji from "./Emoji.jsx";

function DataList(data){
   console.log(data.key);
    return(
       
        <datalist id="emojiNames">
            <option> {data.key}</option>
        </datalist>
    );
}
 emoji.map(DataList);


export default DataList;