import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SearchBar from './SearchBar'

function renderSearchBar(props = {}) {
    return render(
        <SearchBar 
            onSearch={props.onSearch} 
            placeholder={props.placeholder}
        />
    )
}

describe('SearchBar', () => {
    it('renders search container', () => {
        renderSearchBar()

        expect(screen.getByTestId('search-bar-container')).toBeInTheDocument()
    })

    it('renders search input', () => {
        renderSearchBar()

        expect(screen.getByTestId('search-bar')).toBeInTheDocument()
    })

    it('renders search icon', () => {
        renderSearchBar()

        expect(screen.getByTestId('search-bar-icon')).toBeInTheDocument()
    })

    it('renders placeholder when provided', () => {
        renderSearchBar({ placeholder: 'Search by brand or model' })

        expect(screen.getByPlaceholderText('Search by brand or model')).toBeInTheDocument()
    })

    it('calls onSearch when input changes', async () => {
        const onSearch = vi.fn()
        renderSearchBar({ onSearch })

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'acer' } })
        // await userEvent.type(screen.getByRole('textbox'), 'acer')

        expect(onSearch).toHaveBeenCalledWith('acer')
    })
})