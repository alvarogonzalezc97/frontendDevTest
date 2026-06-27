import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Loader from './Loader'

function renderLoader(props = {}) {
  return render(
    <Loader {...props} />
  )
}

describe('Loader', () => {
  it('renders loader container', () => {
    renderLoader()

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('renders message when provided', () => {
    renderLoader({ message: 'Loading products...' })

    expect(screen.getByText('Loading products...')).toBeInTheDocument()
  })
})