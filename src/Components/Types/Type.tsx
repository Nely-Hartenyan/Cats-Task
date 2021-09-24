export interface ICategories{
    id:number,
    name:string,
}

export interface IImage {
    categories:ICategories,
    id:string,
    url:string,
    width:number,
    height:number
}


export interface IStatus {
    loading: boolean,
    data:IImage,
    error:string
}
interface Base {
    name:string
}

interface Age {
    age: number
}

type WithBase<T = void> = Base & T

const obj:unknown = {
    name: "asdas"
}
