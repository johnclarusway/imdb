import {useRef} from 'react';
import {StyledSearchBox, StyledSearchInput, StyledSearchButton} from "./SearchBox.style"

export const SearchBox = ({setSearchKeyword}) => {
    const inputRef = useRef();

    return (
        <StyledSearchBox>
           <StyledSearchInput ref={inputRef} isColored={false}/>
           <StyledSearchButton onClick={()=>setSearchKeyword(inputRef?.current?.value)}>Search</StyledSearchButton> 
        </StyledSearchBox>
    )
}
