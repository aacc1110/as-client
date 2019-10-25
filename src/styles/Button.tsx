import React from 'react';
import styled, { css } from 'styled-components';
import { Route } from 'react-router';
import { buttonColorMap } from './palette';

type ColorType = 'blue' | 'gray' | 'darkGray' | 'lightGray';
type SizeType = 'SMALL' | 'DEFAULT' | 'LARGE' | 'BIG';

const ButtonBlock = styled.button<ButtonProps>`
  ${props =>
    props.inline &&
    css`
      & + & {
        margin-left: 0.5rem;
      }
    `}
  ${props =>
    props.size === 'SMALL' &&
    css`
      height: 1.2rem;
      padding-left: 0.6rem;
      padding-right: 0.6rem;
      font-size: 0.6rem;
      border-radius: 0.3rem;
    `};
  ${props =>
    props.size === 'DEFAULT' &&
    css`
      height: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 0.85rem;
      border-radius: 0.4rem;
    `};
  ${props =>
    props.size === 'LARGE' &&
    css`
      height: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1rem;
      border-radius: 0.75rem;
    `};
  background: none;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  background: ${props => buttonColorMap[props.color].background};
  color: ${props => buttonColorMap[props.color].color};
  &:hover,
  &:focus {
    background: ${props => buttonColorMap[props.color].hoverBackground};
  }
  ${props =>
    props.border &&
    css<ButtonProps>`
      background: transparent;
      border: 1px solid ${props => buttonColorMap[props.color].background};
      color: ${props => buttonColorMap[props.color].background};
      &:hover {
        background: ${props => buttonColorMap[props.color].background};
        color: white;
      }
    `}

  transition: 0.125s all ease-in;
  &:focus {
    box-shadow: 0px 2px 12px #00000030;
  }
`;
type ButtonBlockProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends ButtonBlockProps {
  inline?: boolean;
  to?: string;
  color: ColorType;
  size: SizeType;
  border?: boolean;
}

function Button({ ref, to, color, size, ...rest }: ButtonProps) {
  if (to) {
    return (
      <Route
        render={({ history }) => (
          <ButtonBlock
            color={color}
            size={size}
            onClick={e => {
              e.preventDefault();
              history.push(to);
            }}
            {...rest}
          />
        )}
      />
    );
  }
  return <ButtonBlock color={color} size={size} />;
}

export default Button;
