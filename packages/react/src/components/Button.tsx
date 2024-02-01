import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  /** remove todas as estilizações padrões do button */
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$strategic500',

        '&:not(:disabled):hover': {
          background: '$strategic300',
        },
        '&:disabled': {
          background: '$gray200',
        },
      },
      secondary: {
        color: '$strategic300',
        border: '2px solid $strategic500',

        '&:not(:disabled):hover': {
          background: '$strategic500',
          color: '$white',
        },
        '&:disabled': {
          background: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          background: '$gray600',
        },
      },
      destruction: {
        color: '$white',
        background: '$destruction',
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
