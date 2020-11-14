import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"

export const Card = ({title, imgSrc}) => {
    return (
        <StyledCardWrapper>
            <StyledMovieImage src={imgSrc}/>
            <StyledText>{title}</StyledText>
        </StyledCardWrapper>
    )
}