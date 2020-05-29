import React from 'react';
import './filterBlock.css';
import { poetryItemType } from '../../../redux/poetryPageReducer';
import { sortArray } from './FilterBlockService';
import { ConditionSortType, SORT_NAME, SORT_AUTHOR, SORT_YEAR, SORT_BOOK } from '../../../redux/filterReducer';

type PropsType = {
    arrayItems: Array<poetryItemType>
    filterType: ConditionSortType
    setSortArray(arr: Array<poetryItemType>): void
    setFilterType(filterType: ConditionSortType): void
}

const FilterBlock: React.FC<PropsType> = (props) => {
    return (<>
        <div className='filter__block'>
            <div className="filter__item_column filter__item_column_name">
                <button className={props.filterType === SORT_NAME ? 'active' : 'disabled'} onClick={() => {
                    props.setFilterType(SORT_NAME);
                    sortArray<Array<poetryItemType>>(props.arrayItems, props.filterType, props.setSortArray);
                }}>Название</button>
            </div>
            <div className="filter__item_column filter__item_column_author">
                <button className={props.filterType === SORT_AUTHOR ? 'active' : 'disabled'} onClick={() => {
                    props.setFilterType(SORT_AUTHOR);
                    sortArray<Array<poetryItemType>>(props.arrayItems, props.filterType, props.setSortArray);
                }}>Автор</button>
            </div>
            <div className="filter__item_column filter__item_column_year">
                <button className={props.filterType === SORT_YEAR ? 'active' : 'disabled'} onClick={() => {
                    props.setFilterType(SORT_YEAR);
                    sortArray<Array<poetryItemType>>(props.arrayItems, props.filterType, props.setSortArray);
                }}>Год</button>
            </div>
            <div className="filter__item_column filter__item_column_book">
                <button className={props.filterType === SORT_BOOK ? 'active' : 'disabled'} onClick={() => {
                    props.setFilterType(SORT_BOOK);
                    sortArray<Array<poetryItemType>>(props.arrayItems, props.filterType, props.setSortArray);
                }}>Книга</button>
            </div>
        </div>
    </>)
}

export default FilterBlock;