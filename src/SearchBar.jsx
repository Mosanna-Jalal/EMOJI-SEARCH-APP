import React  from "react";
import "./App.css";
import DataList from "./datalist";

// console.log(DataList);

export function Act(){
    let sB=document.getElementById("searchBar");
     console.log(sB);
   
  }

function SearchBar(){
    return(
        <div>
            <input id="searchBar" placeholder="search emojis" ></input>
        </div>
    );
}

export default SearchBar;