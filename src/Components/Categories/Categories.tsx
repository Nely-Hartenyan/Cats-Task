import React,{FC} from "react";
import {Link,} from "react-router-dom";
import * as Styled from "./Categories.style";
import {ICategories} from "../Types/Type";

interface CategoriesProps{
    items:ICategories[]
}

const Categories:FC<CategoriesProps> = ({items}) => {

    return (
        <Styled.Container>
            <Styled.Ul >
                {items.map(item => {
                        return (
                            <Styled.Li key = {item.id+Math.random()}>
                                <Link to = {`/${item.id}`}>
                                    {item.name}
                                </Link>
                            </Styled.Li>
                        )
                    }
                )}
            </Styled.Ul>
        </Styled.Container>

    )
}
export default Categories;