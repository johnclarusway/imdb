import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"

export const Card = ({title, imgSrc}) => {
    return (
        <StyledCardWrapper>
            <StyledMovieImage src={imgSrc} alt={"Movie Poster"}/>
            <StyledText>{title}</StyledText>
        </StyledCardWrapper>
    )
}