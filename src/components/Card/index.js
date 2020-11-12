import {StyledCardWrapper, StyledText} from "./Card.style"

export const Card = ({title}) => {
    return (
        <StyledCardWrapper>
            <StyledText>{title}</StyledText>
        </StyledCardWrapper>
    )
}