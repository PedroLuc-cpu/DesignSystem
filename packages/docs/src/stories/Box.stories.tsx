import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

/**
 * Component global que serve para aplicar todas as configurações para todos components
 */
export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento box</span>
      </>
    ),
  },
} as Meta<BoxProps>

/**
 * component de botão Primary todas as configurações de um botão Primary deve ser feito no mesmo
 */
export const Primary: StoryObj<BoxProps> = {}
