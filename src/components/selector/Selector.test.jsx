import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Selector from './Selector'

const mockOptions = [
  { code: 1, name: 'Black/Silver' },
  { code: 2, name: 'White' },
]

function renderSelector(props = {}) {
  return render(
    <Selector
      className="selector-color"
      label="Color"
      options={mockOptions}
      value={1}
      onChange={props.onChange}
    />
  )
}

describe('Selector', () => {
  it('renders selector', () => {
    renderSelector()

    expect(screen.getByTestId('selector-color')).toBeInTheDocument()
  })

  it('renders label', () => {
    renderSelector()

    expect(screen.getByTestId('selector-label')).toBeInTheDocument()
  })

  it('renders select', () => {
    renderSelector()

    expect(screen.getByTestId('selector-color-select')).toBeInTheDocument()
  })

  it('renders all options', () => {
    renderSelector()

    expect(screen.getByText('Black/Silver')).toBeInTheDocument()
    expect(screen.getByText('White')).toBeInTheDocument()
  })

  it('renders default selected value', () => {
    renderSelector()

    expect(screen.getByTestId('selector-color-select')).toHaveValue('1')
  })

  it('calls onChange when selection changes', () => {
    const onChange = vi.fn()
    renderSelector({ onChange })

    fireEvent.change(screen.getByTestId('selector-color-select'), { target: { value: '2' } })

    expect(onChange).toHaveBeenCalledWith('2')
  })
})
