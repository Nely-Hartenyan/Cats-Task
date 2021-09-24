import {useState} from "react";
import axios, {AxiosResponse} from "axios";
import {IImage} from "./Types/Type";

interface IStatus{
    loading?:boolean;
    data:IImage[]  ;
    error?:string;
}

const useFetch = (url:string) =>{
    const [status, setStatus] = useState<IStatus>({
        loading:false,
        data:[],
        error:'',
    });

    const [categories, setCategories] = useState<[]>([])

    function fetchImages(url:string) {
         setStatus({loading: true,data:[]})
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                console.log(result)
                setStatus({loading: false, data: result})

            })

            .catch((error) => {
                setStatus({loading: false, error,data:[]})
                console.log('error', error)
            })

    }

    function fetchCategories(url:string){
        axios.get(url)
            .then((res) => {
                setCategories(res.data)
            })
    }

    const more = () => {
        axios.get(url)
            .then((res:AxiosResponse<[]>) => {
                setStatus({data:[...status.data, ...res.data]})
            })
    }

    return { ...status, categories, fetchImages ,more,fetchCategories}
}

export default useFetch;