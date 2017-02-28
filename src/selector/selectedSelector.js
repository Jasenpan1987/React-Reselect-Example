import { createSelector } from "reselect";

const getItems = state => state.items;
const getSelected = state => state.selectedItems;

const getSelectedItems = createSelector(
    getItems, 
    getSelected,
    (items, selected) => {
        return items.filter(item => selected.indexOf(item.id) !== -1);
    }
);

export default getSelectedItems;