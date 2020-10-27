import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters } from '@storybook/vue'
import storybookTheme from './theme'
import './vuetify'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify has a 12 point grid system. Built using flex-box, the grid is used to layout an application's content. It
// contains 5 types of media breakpoints that are used for targeting specific screen sizes and orientations.
const vuetifyViewports = {
  VuetifyLg: {
    name: 'Vuetify LG',
    styles: {
      height: '100%',
      width: '1903px'
    },
    type: 'desktop'
  },
  VuetifyXs: {
    name: 'Vuetify XS',
    styles: {
      height: '100%',
      width: '599px'
    },
    type: 'mobile'
  },
  VuetifySm: {
    name: 'Vuetify SM',
    styles: {
      height: '100%',
      width: '959px'
    },
    type: 'mobile'
  },
  VuetifyMd: {
    name: 'Vuetify MD',
    styles: {
      height: '100%',
      width: '1263px'
    },
    type: 'tablet'
  },
  VuetifyXl: {
    name: 'Vuetify XL',
    styles: {
      height: '100%',
      width: '4096px'
    },
    type: 'desktop'
  }
}

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...vuetifyViewports
    }
  },
  options: {
    hierarchyRootSeparator: /\|/,
    theme: storybookTheme,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
})

// Ensures every story is wrapped in a v-app tag. To enable the Storybook background addon to control the background
// color we need to add a hack to VApp, as it sets and controls the background color. We set the background-color on
// VApp to transparent.
addDecorator(() => ({
  template: `
    <v-app :style="style">
      <story/>
    </v-app>
  `,
  data () {
    return {
      style: '.theme--light.application { background-color: transparent; }'
    }
  },
  style: '.theme--light.application { background-color: transparent; }'
}))
