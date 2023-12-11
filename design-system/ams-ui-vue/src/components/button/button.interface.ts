export interface ButtonInterface {
  /**
   * set color of the component
   */
  color?: 'primary' | 'secondary' | 'tertiary' | 'information'  | 'success' | 'warning' | 'error'
  /**
   * set iconLeft of the component
   */
  iconLeft?: any
  /**
   * set iconRight of the component
   */
  iconRight?: any
  /**
   * set loading of the component
   */
  loading?: boolean
  /**
   * set size of the component
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * set variant of the component
   */
  variant?: 'solid' | 'outline' | 'soft' | 'transparent'
}