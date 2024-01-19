import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

/**
 * Component global que serve para aplicar todas as configurações para todos components
 */
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

/**
 * component de botão Primary todas as configurações de um botão Primary deve ser feito no mesmo
 */
export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}

/**
 * component de botão Primary todas as configurações de um botão Secondary deve ser feito no mesmo
 */
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
