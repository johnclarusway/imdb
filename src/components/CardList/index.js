import {useContext} from 'react';
import {Card} from "../Card";
import {MovieContext} from "../../Movie";
import {StyledCardList} from "./CardList.style"

export const CardList = () => {
  const {movieList, baseImageUrl} = useContext(MovieContext);
    return (
        <StyledCardList>
           {movieList?.map(
               (movie, index) => (
               <Card 
                key={index} 
                title={movie.title}
                id={movie.id}
                imgSrc={baseImageUrl}
                poster_path = {movie.poster_path}
                />)
            )}
        </StyledCardList>
    )
}
