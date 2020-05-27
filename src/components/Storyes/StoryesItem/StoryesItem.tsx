import React from 'react';
import PoetryItem from '../../Poetry/PoetryItem/PoetryItem';

let StoryItem: React.FC<{ name: string, author: string, year: string, book: string, url: string, key: string }> = (props) => {
    return (<PoetryItem 
        name={props.name} 
        author={props.author} 
        year={props.year} 
        book={props.book} 
        url={props.url} 
        key={props.key}/>)
}

export default StoryItem;