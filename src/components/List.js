import React, { Component } from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { selectAct, deSelectAct } from "../actions";

class List extends Component {
    constructor(props){
        super(props);
        this.handleToggleSelected.bind(this);
    }

    handleToggleSelected(id, value){
        if(value){
            this.props.select(id);
        }else{
            this.props.deselect(id);
        }
    }

    renderLi(items){
        return items.map(item => {
            return (
               <ListItem 
                key={item.id}
                item={item}
                isSelected={true}
                handleToggleSelected={(id, value) => this.handleToggleSelected(id, value)}
               />
            )
        })
    }

    render(){
        return (
            <div>
                <h3>Item list</h3>
                <ul className="list-group">
                    {this.renderLi(this.props.items)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        items: state.items,
        selectedItems: state.selectedItems
    }
}

function mapDispatchToProps(dispatch){
    return {
        select: (id, value) => dispatch(selectAct(id, value)),
        deselect: (id, value) => dispatch(deSelectAct(id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)