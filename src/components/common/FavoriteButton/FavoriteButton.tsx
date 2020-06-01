import React from 'react';
import unlike_icon from '../../../assets/img/unlike-icon.svg';
import like_icon from '../../../assets/img/like-icon.svg';
import s from './favoriteButton.module.css';
import { addIdToLocalStorage, getButton } from './favoriteButtonService';
import { poetryItemType } from '../../../redux/poetryPageReducer';

type PropsType = {
    idFavorite: string
    poetryPage: Array<poetryItemType>
    setPoetryItems: (arr: Array<poetryItemType>) => void
}

export const likeButton = <img src={like_icon} className={s.favButton_block_icon} alt='like' />;
export const unlikeButton = <img src={unlike_icon} className={s.favButton_block_icon} alt='unlike' />;

const FavoriteButton: React.FC<PropsType> = (props) => {
    return (<div className={s.favButton_block} onClick={(e) => {
        e.preventDefault();
        addIdToLocalStorage(props.idFavorite, props.poetryPage, props.setPoetryItems);                
    }}>
        {getButton(props.idFavorite)}
    </div>)
}

export default FavoriteButton;