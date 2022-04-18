import Button from './index'

import GlobalProvider from 'components/templates/GlobalProvider'

import theme from 'styles/theme'

import { addDecorator } from '@storybook/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

addDecorator(content => <GlobalProvider>{content()}</GlobalProvider>)

const metadata: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Components/Button'
}

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>test</Button>
)

const Primary = Template.bind({})

Primary.args = {
  stroke: 0,
  colors: { text: theme.colors.secondary, background: theme.colors.red }
} as ComponentStory<typeof Button>['args']

export { Primary }

export default metadata
