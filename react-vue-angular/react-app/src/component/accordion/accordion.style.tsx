import styled from '@emotion/styled'

export const Wrapper = styled.div`
  box-sizing: border-box;
  overflow: hidden;

  .legion-accordion__arrow {
    cursor: pointer;
    width: 16px;
    transition: all 0.3s ease-in-out;
    position: relative;

    &:before,
    &:after {
      content: '';
      width: 9px;
      height: 2px;
      border-radius: 4px;
      position: absolute;
      transition: all 0.3s ease-in-out;
      background-color: ${(props) => props.theme.tokens.tertiary500};
    }

    &:before {
      right: 6px;
      transform: rotate(45deg);
    }

    &:after {
      right: 0px;
      transform: rotate(-45deg);
    }
  }

  .legion-accordion__arrow--active {
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }

  .legion-accordion__item {
    background: #ffffff;
    box-sizing: border-box;
    display: block;
    border-bottom: 1px solid #eee;
    &:last-child {
      border-bottom: 0;
    }
  }

  .legion-accordion__item__header {
    background: #ffffff;
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0;
    cursor: pointer;
    margin: 0;
    width: 100%;
  }

  .legion-accordion__item__icon-left {
    margin-right: 8px;
    display: inline-flex;
    align-items: center;
  }

  .legion-accordion__item__title {
    font-family: ${(props) => props.theme.tokens.typographyHeading};
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    color: ${(props) => props.theme.tokens.tertiary800};
    display: flex;
    align-items: center;
  }

  .legion-accordion__item__body {
    padding: 0 16px;
    padding-bottom: 0;
    visibility: hidden;
    transition: all 0.1s ease-in-out;
    height: 0;
    overflow: hidden;
    background: #ffffff;
  }

  .legion-accordion__item__body--active {
    padding-bottom: 14px;
    visibility: visible;
    height: auto;
  }
`
