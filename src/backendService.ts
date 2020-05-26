import axios from 'axios';
import { poetryItemType } from './redux/poetryPageReducer';

type modeType = 'story' | 'poetry';

const errorMessage: Array<poetryItemType> = [
    {
        id: 0,
        name: "Ошибка сервера. Попробуйте перезагрузить страницу.",
        author: "",
        year: "",
        book: "",
        background: "",
        isFavorite: false,
        text: ["", ""]
    }
]

let backendService = {
    requestToServer: (setFunction: (arr: Array<poetryItemType>) => void, responseMode: modeType) => {
        axios.get('https://raw.githubusercontent.com/remizovMaxim/zorevaData/master/zorevaData.json')
            .then((response: any) => {
                let requestArr: Array<poetryItemType> = 
                (responseMode === 'story') ? response.data.storyesData.data : response.data.poetryData.data;
                requestArr.forEach((i)=>{
                    if(i.name === '***') i.name = i.text[0]
                })
                setFunction(requestArr);
            })
            .catch(error => {
                setFunction(errorMessage)
                console.log(error.response)
            });
    },
    backendStoryes: (setItems: (arr: Array<poetryItemType>) => void) => {
        backendService.requestToServer(setItems, 'story')        
    },
    backendPoetry: (setItems: (arr: Array<poetryItemType>) => void) => {
        backendService.requestToServer(setItems, 'poetry')        
    }
}

export default backendService;