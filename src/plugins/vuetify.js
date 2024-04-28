/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          error:'#ff3333',
        },
      },
      theme_tf: {
        colors: {
          primary: '#32345F',
          secondary: '#FFFF00',
          error:'#ff3333',
          theme_primary:"#8180A6",
          theme_secondary:"#FFFF00",
        },
      },
      theme_im: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          error:'#ff3333',
        },
      },
    },
  },
})
