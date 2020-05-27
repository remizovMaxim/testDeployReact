import React from 'react';
import './filterBlock.css';
import { poetryItemType } from '../../../redux/poetryPageReducer';

const SORT_NAME = 'SORT_NAME';
const SORT_AUTHOR = 'SORT_AUTHOR';
const SORT_YEAR = 'SORT_YEAR';
const SORT_BOOK = 'SORT_BOOK';

type ConditionSortType =
    typeof SORT_NAME |
    typeof SORT_AUTHOR |
    typeof SORT_YEAR |
    typeof SORT_BOOK;

type PropsType = {
    arrayItems: Array<poetryItemType>
    setSortArray(arr: Array<poetryItemType>): void
}

const FilterBlock: React.FC<PropsType> = (props) => {

    const sortArray = (conditionSort: ConditionSortType) => {
        let resultSort: Array<poetryItemType>;                
        switch (conditionSort) {
            case SORT_NAME:
                resultSort = props.arrayItems.sort((a: poetryItemType, b: poetryItemType) => {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                    if (nameA < nameB)
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0;
                })

                return props.setSortArray(resultSort);

            case SORT_AUTHOR:
                resultSort = props.arrayItems.sort((a: poetryItemType, b: poetryItemType) => {
                    let nameA = a.author.toLowerCase(), nameB = b.author.toLowerCase();
                    if (nameA < nameB)
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0;
                })

                return props.setSortArray(resultSort);

            case SORT_YEAR:
                resultSort = props.arrayItems.sort((a: poetryItemType, b: poetryItemType) => {
                    return +a.year - +b.year;                    
                })
                
                return props.setSortArray(resultSort);

            case SORT_BOOK:
                resultSort = props.arrayItems.sort((a: poetryItemType, b: poetryItemType) => {
                    let nameA = a.book.toLowerCase(), nameB = b.book.toLowerCase();
                    if (nameA < nameB)
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0;
                })

                return props.setSortArray(resultSort);

            default: return;
        }           
    }

    return (<>
        <div className='filter__block'>
            <div className="filter__item_column filter__item_column_name"><button onClick={()=>sortArray(SORT_NAME)}>Название</button></div>
            <div className="filter__item_column filter__item_column_author"><button onClick={()=>sortArray(SORT_AUTHOR)}>Автор</button></div>
            <div className="filter__item_column filter__item_column_year"><button onClick={()=>sortArray(SORT_YEAR)}>Год</button></div>
            <div className="filter__item_column filter__item_column_book"><button onClick={()=>sortArray(SORT_BOOK)}>Книга</button></div>
        </div>
    </>)
}

export default FilterBlock;