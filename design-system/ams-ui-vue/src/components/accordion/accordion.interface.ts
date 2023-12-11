export interface AccordionInterface {
  /**
   * set active of the component
   */
  active?: number
  /**
   * set iconLeft of the component
   */
  iconLeft?: any
  /**
   * set items of the component
   */
  items?: {
    label: string
    value: string
  }[]
}