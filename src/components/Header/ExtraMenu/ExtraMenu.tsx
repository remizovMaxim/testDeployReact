import React from 'react';
import s from './extraMenu.module.css';
import { NavLink } from 'react-router-dom';


const ExtraMenu: React.FC<{}> = () => {
    return (<>
        <aside className={s.extra__wrapper}>
            <div className={s.extra__button}>
                <div className={s.extra__button_dot}></div>
                <div className={s.extra__button_dot}></div>
                <div className={s.extra__button_dot}></div>                
            </div>
            <div className={s.extra__menu}>
                <div className={s.extra__menu_item}>
                    <NavLink to='/favorite'>♥</NavLink>
                </div>
            </div>
        </aside>
    </>);
}

export default ExtraMenu;