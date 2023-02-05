import React from 'react'
import { SearchInputWrapper, SearchInputElement } from '../../styles/search-input.styled'

interface IProps {
  label: string;
  search: string;
  setSearch: (value: string) => void
}

const SearchInput = ({ label, setSearch }: IProps) => {
  return (
     <SearchInputWrapper>
      <SearchInputElement type='text' placeholder={label} onChange={(e) => setSearch(e.target.value)} />
    </SearchInputWrapper>
  )
}

export default SearchInput