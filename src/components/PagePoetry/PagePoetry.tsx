import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import { poetryItemType } from '../../redux/poetryPageReducer';
import './PagePoetry.css';
import backendService from '../../backendService';
import NavigationButtonsContainer from '../common/NavigationButtons/NavigationButtons';

type PathParamsType = {
    id: string,
}

type PropsType = RouteComponentProps<PathParamsType> & {
    poetryPage: Array<poetryItemType>,
    setPoetryItems(arr: Array<poetryItemType>): void
}

class PagePoetry extends React.Component<PropsType>{
    constructor(props: PropsType) {
        super(props);        
        if (!this.props.poetryPage[0].author) backendService.backendPoetry(this.props.setPoetryItems);
    }

    render() {
        let id = this.props.match.params.id;

        const itemCondition = (item: any) => {
            if (+item.id === +id) return item;
        }

        let page = this.props.poetryPage.find(itemCondition);

        let keyId: number = 0;
        let text = page ? page.text.map((i: string) => {
            return <p className='poetry-page__wrapper_row' key={keyId++}>{i}</p>
        }) : '';

        return (<div className='poetry__wrapper'>
            <div className='poetry-page__wrapper'>
                <p className='poetry-page__wrapper_name'>{page ? page.name : ''}</p>
                {text}
                <p className='poetry-page__wrapper_author'>{page ? page.author : ''}</p>
            </div>
            <NavigationButtonsContainer />
        </div>)
    }
}

const PagePoetryUrl = withRouter(PagePoetry);
export default PagePoetryUrl;