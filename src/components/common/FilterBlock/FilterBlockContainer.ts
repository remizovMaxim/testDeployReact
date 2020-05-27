import { State } from '../../../redux/store';
import { setPoetryItemsAC, poetryItemType, Dispatch } from '../../../redux/poetryPageReducer';
import { connect } from 'react-redux';
import FilterBlock from './FilterBlock';

const mapState = (state: State) => ({
    arrayItems: state.poetryPage.poetryItemsArray
})

const mapDispatch = (dispatch: Dispatch) => ({
    setSortArray: (arr: Array<poetryItemType>): void => {
        dispatch(setPoetryItemsAC(arr))
    },
})

const FilterBlockContainer = connect(mapState, mapDispatch)(FilterBlock);

export default FilterBlockContainer;