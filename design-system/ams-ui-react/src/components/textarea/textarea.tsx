import { ForwardedRef, TextareaHTMLAttributes, forwardRef, ReactNode } from 'react'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * set display block of the component
   */
  block?: boolean
  /**
   * set the disabled of the component
   */
  disabled?: boolean
  /**
   * Sets the hint of the component
   */
  hint?: ReactNode
  /**
   * sets the id of the component
   */
  id?: string
  /**
   * set label of the component
   */
  label?: string
  /**
   * set the message of the component
   */
  message?: ReactNode
  /**
   * set Ref to the button element
   */
  ref?: ForwardedRef<HTMLTextAreaElement>
  /**
   * set size of the component
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * set the status of the component
   */
  status?: 'normal' | 'error' | 'success'
  /**
   * set the variant of the component
   */
  variant?: 'outline' | 'inline'
}

export const Button = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { block, disabled, hint, id, label, message, className, size, status, ...inputPops } = props
  const cssBlock = block ? 'ams-textarea--block' : ''
  const cssDisabled = disabled ? 'ams-textarea--disabled' : ''
  const classSize = `ams-textarea--${size || 'md'}`

  const idRandom = id || 'id' + Math.random().toString(36).substring(7)
  const classNames = ['ams-textarea', cssBlock, cssDisabled, classSize, className].join(' ').trim()

  return (
    <label className={classNames} htmlFor={id || idRandom}>
      {label}
      <textarea {...inputPops} disabled={disabled} id={id || idRandom} ref={ref} />
      {message && (
        <span className='ams-textarea__message' role='alert' id={`ams-textarea-${idRandom}-${status}`}>
          {message}
        </span>
      )}
      {hint && (
        <span className='ams-textarea__hint' id={`ams-textarea-${idRandom}-hint`}>
          {hint}
        </span>
      )}
    </label>
  )
})
