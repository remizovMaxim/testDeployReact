import { ConditionSortType, SORT_NAME, SORT_AUTHOR, SORT_YEAR, SORT_BOOK } from './../../../redux/filterReducer';
import { poetryItemType } from '../../../redux/poetryPageReducer';

export function sortArray<T extends Array<poetryItemType>>(originArr: T, conditionSort: ConditionSortType, cb: (a: T) => void): void | T {
    let arr: T = JSON.parse(JSON.stringify(originArr));
    let resultSort: T = arr;
    switch (conditionSort) {
        case SORT_NAME:
            resultSort = arr.sort((a: poetryItemType, b: poetryItemType) => {
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            })

            return cb(resultSort);

        case SORT_AUTHOR:
            resultSort = arr.sort((a: poetryItemType, b: poetryItemType) => {
                let nameA = a.author.toLowerCase(), nameB = b.author.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            })

            return cb(resultSort);

        case SORT_YEAR:
            resultSort = arr.sort((a: poetryItemType, b: poetryItemType) => {
                return +a.year - +b.year;
            })

            return cb(resultSort);

        case SORT_BOOK:
            resultSort = arr.sort((a: poetryItemType, b: poetryItemType) => {
                let nameA = a.book.toLowerCase(), nameB = b.book.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            })

            return cb(resultSort);

        default: return resultSort;
    }
}