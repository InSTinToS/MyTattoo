import Button from './index'

import theme from 'styles/theme'

import { ComponentMeta, ComponentStory } from '@storybook/react'

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
