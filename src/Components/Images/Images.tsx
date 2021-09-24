import React, {useEffect, useState, FC} from "react";
import axios from "axios";
import {Button, Container, Image, ImagesDiv, ImgContainer} from "./Images.style";
import {IImage} from "../Types/Type";
import {useHistory} from "react-router-dom";
import {path} from "../Config";
import useFetch from "../useFetch";

const Images: FC = () => {

    const history = useHistory()
    const link = history.location.pathname.replace("/",'')
    const url = `${path}&category_ids=${link}&limit=10`
    console.log('url',url)

    const {data, loading, error,more,fetchImages} = useFetch(url)

    let images = data


    useEffect( () => {
        if (url){
            fetchImages(url);
        }

    }, [url] )


    if(error) {
        console.log('error', error);
        return null;
    }


    return (
        <Container>
            { loading ? <h1> Loading ... </h1> :
                <ImgContainer>
                    {images && images.map(item => {
                            return (
                                <ImagesDiv key={item.id + Math.random()}>

                                    <Image
                                        src={item.url}
                                        alt=''
                                    />
                                </ImagesDiv>
                            )
                        }
                    )}
                </ImgContainer>
            }

            <Button onClick = {more} >
                More
            </Button >

        </Container>
    )
}
export default Images;