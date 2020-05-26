import React from 'react';
import './paginationItem.css';
const shortid = require('shortid');

type PropsType = {    
    currentPage: number
    sizePage: number
    arrayItems: Array<{}>
    setCurrentPage: (currentPage: number) => void
}
class PagintaionItem extends React.Component<PropsType> {

    render() {
        let arrButtons: any = [];
        let sizeArr: number = this.props.arrayItems.length;
        let totalPage: number = Math.ceil(sizeArr / this.props.sizePage);

        for (let i = 1; i <= totalPage; i++) {
            if (i === this.props.currentPage) {
                arrButtons.push(<div className='pagination__item pagination__item-active' id={`${i}`} key={shortid.generate()} >{`${i}`}</div>)
            } else {                
                arrButtons.push(<div className='pagination__item' id={`${i}`} key={shortid.generate()} onClick={() => { this.props.setCurrentPage(+`${i}`) }} >{`${i}`}</div>)
            }
        }
        return arrButtons;
    }
}

export default PagintaionItem;