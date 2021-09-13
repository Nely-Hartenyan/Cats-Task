export interface ICategories{
    id:number,
    name:string,
}

export interface IImage{
    categories:ICategories,
    id:string,
    url:string,
    width:number,
    height:number
}