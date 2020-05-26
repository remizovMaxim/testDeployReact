import React from 'react';
import './SearchBlock.css';
import backendService from '../../../backendService';
import { poetryItemType } from '../../../redux/poetryPageReducer';

type PropsType = {
    poetryArray: any
    searchWord: string
    setSearchWordInput(searchWord: string):void
    setPoetryItems(arr: Array<poetryItemType>):void
}

const SearchBlock: React.FC<PropsType> = (props) => {
    const sortPoetryArray = (nameSort: string): void => {
        props.setSearchWordInput(nameSort);
        if (nameSort !== '') {
            let resultSearch = props.poetryArray.filter((item: poetryItemType) => (item.name.toLowerCase().startsWith(nameSort.toLowerCase())));
            props.setPoetryItems(resultSearch);
        } else {
            backendService.backendPoetry(props.setPoetryItems);
        }
    }

    return (<form className="search">
        <input type='text' placeholder='Введите название' className='search__input' onChange={(e) => sortPoetryArray(e.target.value)} />
    </form>)
}

export default SearchBlock;