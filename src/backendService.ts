import axios from 'axios';
import { poetryItemType } from './redux/poetryPageReducer';

type modeType = 'story' | 'poetry' | 'favorite';

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
                            
                const myStorage = localStorage.getItem('favoriteStorage');
                
                let arrFavorite: Array<poetryItemType> = [];
                requestArr.forEach((i)=>{
                    if(i.name === '***') i.name = i.text[0];                                        
                    if(myStorage !== null && myStorage.split(',').includes(String(i.id))){
                        i.isFavorite = true;
                    }
                    if(responseMode === 'favorite' && i.isFavorite){
                        console.log('favorite push')
                        arrFavorite.push(i)                
                    }
                });

                requestArr = (responseMode === 'favorite') ? arrFavorite : requestArr;
                
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
    },
    backendFavorite: (setItems: (arr: Array<poetryItemType>) => void) => {
        backendService.requestToServer(setItems, 'favorite')        
    }
}

export default backendService;