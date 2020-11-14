import styled from "styled-components";

export const StyledCardWrapper = styled.div`
    width: 9.375rem;
    height: 12.5rem;
    border: 0.0625rem solid rgba(0,0,0,0.2);
    border-radius: 5px;
    box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0.3rem 0.3rem 0.9rem rgba(0,0,0,0.1);
    }
`;

export const StyledText = styled.p`
    color: red;
    font-size: 0.5rem;
    margin: 0;
`;

export const StyledMovieImage = styled.img`
    width: auto;
    height: 85%;
`