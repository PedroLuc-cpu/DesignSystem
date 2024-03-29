import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@strategic-ui/react'

/**
 * Component global que serve para aplicar todas as configurações para todos components
 */
export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs ', 'sm ', 'md ', 'lg ', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

/**
 * component de botão Primary todas as configurações de um botão Primary deve ser feito no mesmo
 */
export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos mudar com a propriedade `as`.',
      },
    },
  },
}
