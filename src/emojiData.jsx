import React from "react";
import emojiArray from "./emojiArray";

 function CreateDataList(emojiArrayData) {
 
  
  return (
    
    <div>
    <br/>
   {emojiArrayData.name}
   {emojiArrayData.value}
   <br/> 
    </div>
  );

}
emojiArray.forEach(CreateDataList);



export default CreateDataList;


