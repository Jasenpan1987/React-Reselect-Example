import React from "react";

const ListItem = ({item, isSelected, handleToggleSelected}) => {
    function renderSelected(){
        if(isSelected){
            return (
                <label>
                    <input type="checkbox" id="checkbox" 
                        onChange={(e) => handleToggleSelected(item.id, e.target.checked)}
                    />
                    {item.text}
                </label>
            )
        }else{
            return (
                item.text
            )
        }
    }
    
    return (
        <li className="list-group-item">
            {renderSelected()}
        </li>
    )
}

export default ListItem;