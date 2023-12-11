import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Button } from './button'

/**
 * - should render with custom class and id and style
 * - should render with children and disabled and block
 * - should render icon left and right
 * - should render all variants and colors
 * - should render all sizes
 */

describe('Button', () => {
  const testId = 'ams-button'

  it('should render with custom class and id', () => {
    render(<Button data-testid={testId} className='custom-class' id='custom-id' style={{ color: 'red' }} />)
    const button = screen.getByTestId(testId)

    expect(button).not.toBeNull()
    expect(button).toHaveClass('custom-class')
    expect(button).toHaveStyle('color: red')
  })

  it('should render with children and disabled and block', () => {
    render(
      <div>
        <Button data-testid={testId}>Button</Button>
        <Button data-testid={testId} disabled>
          Button
        </Button>
        <Button data-testid={testId} block>
          Button
        </Button>
      </div>,
    )
    const button = screen.getAllByTestId(testId)

    // button 1
    expect(button[0]).not.toBeNull()
    expect(button[0]).toHaveTextContent('Button')
    // button 2
    expect(button[1]).not.toBeNull()
    expect(button[1]).toHaveTextContent('Button')
    expect(button[1]).toHaveAttribute('disabled')
    // button 3
    expect(button[2]).not.toBeNull()
    expect(button[2]).toHaveTextContent('Button')
    expect(button[2]).toHaveClass('ams-button--block')
  })

  it('should render icon left and right', () => {
    render(
      <div>
        <Button data-testid={testId} iconLeft={<span>iconLeft</span>}>
          Button
        </Button>
        <Button data-testid={testId} iconRight={<span>iconRight</span>}>
          Button
        </Button>
        <Button data-testid={testId} iconLeft={<span>iconLeft</span>} iconRight={<span>iconRight</span>}>
          Button
        </Button>
        <Button data-testid={testId}>Button</Button>
      </div>,
    )
    const button = screen.getAllByTestId(testId)

    // button 1
    expect(button[0]).not.toBeNull()
    expect(button[0]).toContainHTML('<span>iconLeft</span>')
    // button 2
    expect(button[1]).not.toBeNull()
    expect(button[1]).toContainHTML('<span>iconRight</span>')
    // button 3
    expect(button[2]).not.toBeNull()
    expect(button[2]).toContainHTML('<span>iconLeft</span>')
    expect(button[2]).toContainHTML('<span>iconRight</span>')

    // button 4 -> default
    expect(button[3]).not.toBeNull()
    expect(button[3]).not.toContainHTML('<span>icon</span>')
    expect(button[3]).not.toContainHTML('<span>icon</span>')
  })

  it('should render all variants and color', () => {
    render(
      <div>
        <Button data-testid={testId}>Button</Button>
        <Button data-testid={testId} color='primary' variant='solid'>
          Button
        </Button>
        <Button data-testid={testId} color='primary' variant='outline' >
          Button
        </Button>
        <Button data-testid={testId} color='primary' variant='soft'>
          Button
        </Button>
        <Button data-testid={testId} color='primary' variant='transparent'>
          Button
        </Button>
        {/* SECONDARY */}
        <Button data-testid={testId} color='secondary' variant='solid'>
          Button
        </Button>
        <Button data-testid={testId} color='secondary' variant='outline' >
          Button
        </Button>
        <Button data-testid={testId} color='secondary' variant='soft'>
          Button
        </Button>
        <Button data-testid={testId} color='secondary' variant='transparent'>
          Button
        </Button>
        {/* TERTIARY */}
        <Button data-testid={testId} color='tertiary' variant='solid'>
          Button
        </Button>
        <Button data-testid={testId} color='tertiary' variant='outline' >
          Button
        </Button>
        <Button data-testid={testId} color='tertiary' variant='soft'>
          Button
        </Button>
        <Button data-testid={testId} color='tertiary' variant='transparent'>
          Button
        </Button>
        {/* INFORMATION */}
        <Button data-testid={testId} color='information' variant='solid'>
          Button
        </Button>
        <Button data-testid={testId} color='information' variant='outline' >
          Button
        </Button>
        <Button data-testid={testId} color='information' variant='soft'>
          Button
        </Button>
        <Button data-testid={testId} color='information' variant='transparent'>
          Button
        </Button>
        {/* WARNING */}
        <Button data-testid={testId} color='warning' variant='solid'>
          Button
        </Button>
        <Button data-testid={testId} color='warning' variant='outline' >
          Button
        </Button>
        <Button data-testid={testId} color='warning' variant='soft'>
          Button
        </Button>
        <Button data-testid={testId} color='warning' variant='transparent'>
          Button
        </Button>
        {/* ERROR */}
        <Button data-testid={testId} color='error' variant='solid'>
          Button
        </Button>
        <Button data-testid={testId} color='error' variant='outline' >
          Button
        </Button>
        <Button data-testid={testId} color='error' variant='soft'>
          Button
        </Button>
        <Button data-testid={testId} color='error' variant='transparent'>
          Button
        </Button>
        {/* SUCCESS */}
        <Button data-testid={testId} color='success' variant='solid'>
          Button
        </Button>
        <Button data-testid={testId} color='success' variant='outline' >
          Button
        </Button>
        <Button data-testid={testId} color='success' variant='soft'>
          Button
        </Button>
        <Button data-testid={testId} color='success' variant='transparent'>
          Button
        </Button>
      </div>,
    )
    const button = screen.getAllByTestId(testId)

    // button 1
    expect(button[0]).toHaveClass('ams-button--primary-solid')
    expect(button[1]).toHaveClass('ams-button--primary-solid')
    expect(button[2]).toHaveClass('ams-button--primary-outline')
    expect(button[3]).toHaveClass('ams-button--primary-soft')
    expect(button[4]).toHaveClass('ams-button--primary-transparent')

    // button 6
    expect(button[5]).toHaveClass('ams-button--secondary-solid')
    expect(button[6]).toHaveClass('ams-button--secondary-solid')
    expect(button[7]).toHaveClass('ams-button--secondary-outline')
    expect(button[8]).toHaveClass('ams-button--secondary-soft')
    expect(button[9]).toHaveClass('ams-button--secondary-transparent')
    
    expect(button[10]).toHaveClass('ams-button--tertiary-solid')
    expect(button[11]).toHaveClass('ams-button--tertiary-solid')
    expect(button[12]).toHaveClass('ams-button--tertiary-outline')
    expect(button[13]).toHaveClass('ams-button--tertiary-soft')
    expect(button[14]).toHaveClass('ams-button--tertiary-transparent')

    expect(button[15]).toHaveClass('ams-button--information-solid')
    expect(button[16]).toHaveClass('ams-button--information-solid')
    expect(button[17]).toHaveClass('ams-button--information-outline')
    expect(button[18]).toHaveClass('ams-button--information-soft')
    expect(button[19]).toHaveClass('ams-button--information-transparent')
  })

  it('should render all sizes', () => {
    render(
      <div>
        <Button data-testid={testId} size='sm'>
          Button
        </Button>
        <Button data-testid={testId} size='md'>
          Button
        </Button>
        <Button data-testid={testId} size='lg'>
          Button
        </Button>
        <Button data-testid={testId}>Button</Button>
      </div>,
    )
    const button = screen.getAllByTestId(testId)

    // button 1
    expect(button[0]).not.toBeNull()
    expect(button[0]).toHaveClass('ams-button--sm')
    // button 2
    expect(button[1]).not.toBeNull()
    expect(button[1]).toHaveClass('ams-button--md')
    // button 3
    expect(button[2]).not.toBeNull()
    expect(button[2]).toHaveClass('ams-button--lg')

    // button 4 -> default
    expect(button[3]).not.toBeNull()
    expect(button[3]).toHaveClass('ams-button--md')
  })
})
