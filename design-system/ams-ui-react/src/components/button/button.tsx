import { ButtonHTMLAttributes, ForwardedRef, forwardRef, memo, ReactNode } from 'react'
import './button.style.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * set display block of the component
   */
  block?: boolean
  /**
   * set color of the component
   */
  color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'information' | 'warning'
  /**
   * set icon left of the component
   */
  iconLeft?: ReactNode
  /**
   * set icon right of the component
   */
  iconRight?: ReactNode
  /**
   * set loading of the component
   */
  loading?: boolean
  /**
   * set loading text of the component
   */
  loadingText?: string
  /**
   * set loading placement of the component
   */
  loadingPlacement?: 'start' | 'end'
  /**
   * set Ref to the button element
   */
  ref?: ForwardedRef<HTMLButtonElement>
  /**
   * set size of the component
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * set variant of the component
   */
  variant?: 'solid' | 'outline' | 'soft' | 'transparent'
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    block,
    children,
    className,
    color,
    iconLeft,
    iconRight,
    loading,
    loadingPlacement,
    loadingText,
    size,
    variant,
    ...othetProps
  } = props
  const classBlock = block ? 'ams-button--block' : ''
  const classLoading = loading ? `ams-button--loading-${loadingPlacement}` : ''
  const classLoadingPlain = !children || (loading && !loadingText) ? 'ams-button--nolabel' : ''
  const classSize = `ams-button--${size || 'md'}`
  const classType = `ams-button--${color || 'primary'}-${variant || 'solid'}`

  const classNames = ['ams-button', classBlock, classLoading, classLoadingPlain, classSize, classType, className]
    .join(' ')
    .trim()

  return (
    <button ref={ref} className={classNames} {...othetProps}>
      {!!iconLeft && (
        <span aria-hidden='true' className='ams-button__icon-left'>
          {iconLeft}
        </span>
      )}
      {children}
      {!!iconRight && (
        <span aria-hidden='true' className='ams-button__icon-right'>
          {iconRight}
        </span>
      )}
    </button>
  )
})

export const Button = memo(ButtonComponent)
