import { name } from '../package.json'
import { create } from '@storybook/theming'

export default create({
  base: 'light',
  brandTitle: name || 'Fresh Platform UI StyleGuide'
})
