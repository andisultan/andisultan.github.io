import { FC, useState, ReactNode, HTMLAttributes, useEffect, memo } from 'react'
import AccordionItem from './accordion-item'

export interface ItemType {
  title: string
  content: ReactNode
}

function compare(prevProps: AccordionProps, nextProps: AccordionProps) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the items list  of the component
   */
  items?: ItemType[]
  /**
   * Sets the icon left of the component
   */
  iconLeft?: ReactNode
  /**
   * Sets the active key of the component
   */
  active?: number
  /**
   * Sets the classname of the component
   */
  className?: string
}

export const AccordionComponent: FC<AccordionProps> = ({ items, active = -1, iconLeft, className = '', ...props }) => {
  const [activeKey, setActiveKey] = useState(active)
  const onClick = (id: number) => {
    if (id === activeKey) {
      return setActiveKey(-1)
    }

    setActiveKey(id)
  }

  useEffect(() => {
    setActiveKey(active)
  }, [active])

  console.log('Accordion')

  return (
    <div {...props} className={`legion-accordion ${className}`}>
      {items?.map((item, index) => (
        <AccordionItem
          onClick={() => onClick(index)}
          isOpen={index === activeKey}
          iconLeft={iconLeft}
          title={item.title}
          data={item}
          key={index}
        />
      ))}
    </div>
  )
}

export const Accordion = memo(AccordionComponent, compare)