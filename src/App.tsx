import React, {FC, useState,useEffect} from 'react';
import axios from "axios";
import {ICategories} from "./Components/Types/Type";
import * as Styled from "./App.style";
import Categories from "./Components/Categories/Categories";
import Images from "./Components/Images/Images";
import {Route} from "react-router-dom";
import useFetch from "./Components/useFetch";

const App:FC=() =>{

    const url = 'https://api.thecatapi.com/v1/categories'
    const {categories,fetchCategories} = useFetch(url)

    useEffect( () => {
        if (url){
            fetchCategories(url);
        }
    }, [url] )
  return (
      <Styled.Container>
          <Categories items = {categories} />
          <Styled.ContainerDiv>
                          <Route
                              path = {`/:itemId`}
                             component={Images}
                          />

          </Styled.ContainerDiv>

      </Styled.Container>
  )
}

export default App;
