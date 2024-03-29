import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@strategic-ui/react'
import { ArrowRight } from 'phosphor-react'

/**
 * Component global que serve para aplicar todas as configurações para todos components
 */
export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'destruction'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      onClick: {
        control: {
          type: 'boolean',
        },
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

/**
 * component de botão Primary todas as configurações de um botão Primary deve ser feito no mesmo
 */
export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Desabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const Destruction: StoryObj<ButtonProps> = {
  args: {
    variant: 'destruction',
    children: 'Cancel',
    size: 'sm',
  },
}
