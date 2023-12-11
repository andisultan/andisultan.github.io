/* eslint-disable react-refresh/only-export-components */
import { FC, memo, ReactNode } from 'react'
import { ItemType } from './accordion'

interface AccordionItemProps {
  data: ItemType
  isOpen: boolean
  onClick: () => void
  title?: string
  iconLeft?: ReactNode
}

const AccordionItem: FC<AccordionItemProps> = ({ data, iconLeft, isOpen, onClick }) => {
  const toggleCollapse = () => {
    onClick()
  }
  const cssClassArrowOpen = isOpen ? 'legion-accordion__arrow--active' : ''
  const cssClassBodyOpen = isOpen ? 'legion-accordion__item__body--active' : ''

  console.log('AccordionItem')

  return (
    <div className='legion-accordion__item'>
      <button
        className='legion-accordion__item__header'
        onClick={toggleCollapse}
        aria-controls={data.title}
        aria-expanded={isOpen}
      >
        <span className='legion-accordion__item__title'>
          {iconLeft && (
            <span className='legion-accordion__item__icon-left' aria-hidden='true'>
              {iconLeft}
            </span>
          )}
          {data.title}
        </span>
        <span className={`legion-accordion__arrow ${cssClassArrowOpen}`} />
      </button>
      <div className={`legion-accordion__item__body ${cssClassBodyOpen}`} id={data.title} hidden={!isOpen}>
        {data.content}
      </div>
    </div>
  )
}

export default memo(AccordionItem)
