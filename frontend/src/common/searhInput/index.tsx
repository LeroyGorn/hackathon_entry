import React from 'react'
import { SearchInputWrapper, SearchInputElement } from '../../styles/search-input.styled'

interface IProps {
  label: string;
}

const SearchInput = ({ label }: IProps) => {
  return (
     <SearchInputWrapper>
      <SearchInputElement type='text' placeholder={label} />
    </SearchInputWrapper>
  )
}

export default SearchInput