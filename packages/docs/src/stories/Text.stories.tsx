import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@strategic-ui/react'

/**
 * Component global que serve para aplicar todas as configurações para todos components
 */
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs ',
        'sm ',
        'md ',
        'lg ',
        'xl ',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

/**
 * component de botão Primary todas as configurações de um botão Primary deve ser feito no mesmo
 */
export const Primary: StoryObj<TextProps> = {}
