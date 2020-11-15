import {Card} from "../Card";
import {StyledCardList} from "./CardList.style"

export const CardList = ({movieList, baseImageUrl}) => {
  
    return (
        <StyledCardList>
           {movieList?.map(
               (movie, index) => (
               <Card 
                key={index} 
                title={movie.title}
                imgSrc={movie.poster_path ? baseImageUrl + movie.poster_path : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}
                />)
            )}
        </StyledCardList>
    )
}
