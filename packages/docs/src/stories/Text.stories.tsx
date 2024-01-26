import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

/**
 * Component global que serve para aplicar todas as configurações para todos components
 */
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text',
  },
} as Meta<TextProps>

/**
 * component de botão Primary todas as configurações de um botão Primary deve ser feito no mesmo
 */
export const Primary: StoryObj<TextProps> = {}
