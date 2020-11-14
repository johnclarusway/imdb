import {useState} from 'react';
import {StyledSearchBox, StyledSearchInput, StyledSearchButton} from "./SearchBox.style"

export const SearchBox = ({setSearchKeyword}) => {
    const [inputValue, setInputValue] = useState("");
    
    return (
        <StyledSearchBox>
           <StyledSearchInput isColored={false} onChange={(e)=>setInputValue(e.target.value)}/>
           <StyledSearchButton onClick={()=>setSearchKeyword(inputValue)}>Search</StyledSearchButton> 
        </StyledSearchBox>
    )
}
