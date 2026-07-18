import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 'ok', timestamp: '2026-01-01T00:00:00.000Z' }),
      }),
    )
  })

  it('renderiza o título e o status do backend', async () => {
    render(<App />)

    expect(screen.getByText('HomeLab')).toBeInTheDocument()
    expect(await screen.findByText('ok')).toBeInTheDocument()
  })
})
