import React, {FC, useState,useEffect} from 'react';
import axios from "axios";
import {ICategories} from "./Components/Types/Type";
import * as Styled from "./App.style";
import Categories from "./Components/Categories/Categories";
import Images from "./Components/Images/Images";
import {Route} from "react-router-dom";

const App:FC=() =>{

    const [items,setItems]=useState<ICategories[]>([]);

    useEffect(()=>{
        setItems([]);
        (async function (){
            try{
                const res=await axios.get<ICategories[]>('https://api.thecatapi.com/v1/categories')
                setItems(res.data)
            } catch (e){
                alert(e)
            }
        })()

        return ()=> setItems([])}, [])


  return (
      <Styled.Container>

          <Categories items={items} />
          <Styled.ContainerDiv>
              {items.map(item=> {
                      return  (
                          <Route
                              path={`/${item.id}`}
                              render={()=> <Images link={item.id} /> }
                              key={item.id+Math.random()}/>
                      )
                  }
              )}
          </Styled.ContainerDiv>

      </Styled.Container>
  )
}

export default App;
