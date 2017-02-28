import React, { Component } from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import selectedSelector from "../selector/selectedSelector";

class SelectedList extends Component {

    renderLi(items){
        return items.map(item => {
            return (
                <ListItem 
                    key={item.id}
                    isSelected={false}
                    item={item}
                />
            )
        })
    }

    render(){
        return (
            <div>
                <h3>Selected Item List</h3>
                <ul className="list-group">
                    {this.renderLi(this.props.items)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        items: selectedSelector(state)
    }
}

export default connect(mapStateToProps)(SelectedList);