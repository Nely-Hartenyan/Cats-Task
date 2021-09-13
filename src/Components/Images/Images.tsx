import React, {useEffect, useState, FC} from "react";

import axios from "axios";
import {Button, Container, Image, ImagesDiv, ImgContainer} from "./Images.style";
import {IImage} from "../Types/Type";

interface ImagesProps {
    link: number
}

const Images: FC<ImagesProps> = ({link}) => {

    const [images, setImages] = useState<IImage[]>([]);

    useEffect(() => {
        (async function () {
            try {
                const {data} = await axios.get<IImage[]>(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${link} `)
                const changedData = data.map((item) => {
                    return {
                        ...item,
                    }
                })
                setImages(changedData)
            } catch (e) {
                alert(e)
            }
        })()
        return () => setImages([])
    }, [])


    const add = () => {
        axios.get<IImage[]>(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${link} `)
            .then(res => {
                setImages(state => [...state, ...res.data])
            })
    }

    const onerror = (id: string) => {
        const index = images.findIndex(el => el.id === id)
        setImages(images.splice(index, 1))

    }

    if (!images) {
        return <h1> Loading... </h1>
    }

    return (
        <Container>

            <ImgContainer>
                {images.map((item: IImage) => {

                        return (
                            <ImagesDiv key={item.id + Math.random()}>

                                <Image
                                    onError={() => onerror(item.id)}
                                    src={item.url}
                                    alt=''
                                />


                            </ImagesDiv>
                        )
                    }
                )}
            </ImgContainer>

            <Button onClick={add}>
                More
            </Button>

        </Container>
    )
}
export default Images;