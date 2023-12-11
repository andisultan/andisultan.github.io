import { ForwardedRef, forwardRef, HTMLAttributes, memo } from 'react'
import './text.style.css'

interface TextProps extends HTMLAttributes<HTMLSpanElement & HTMLParagraphElement & HTMLHeadingElement> {
  /**
   * set as of the component
   */
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * set Ref to the button element
   */
  ref?: ForwardedRef<HTMLSpanElement & HTMLParagraphElement & HTMLHeadingElement>
}

const TextComponent = forwardRef<HTMLSpanElement & HTMLParagraphElement & HTMLHeadingElement, TextProps>(
  (props, ref) => {
    const { as, children, className, ...otherProps } = props
    const Component = as || 'span'

    const cssAs = `ams-text--${as || 'span'}`
    const classNames = ['ams-text', cssAs, className].join(' ').trim()

    return (
      <Component ref={ref} className={classNames} {...otherProps}>
        {children}
      </Component>
    )
  },
)

export const Text = memo(TextComponent)
