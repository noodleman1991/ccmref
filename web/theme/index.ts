import { extendTheme } from '@chakra-ui/react'
import {
  Button,
  Select,
  Tag,
  Container,
  Divider,
  Input,
  Textarea,
  Heading,
} from './components'

const theme = extendTheme({
  fonts: {
    body: 'mabry, sans-serif',
    heading: 'mabry, serif',
  },
  fontSizes: {
    xs: '.8rem',
    sm: '.925rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.35rem',
    '2xl': '1.6rem',
    '3xl': '2.15rem',
  },
  colors: {
    gray: {
      hover: '#fbfbfb',
      '50': '#F2F2F2',
      '100': '#E5E5E5',
      '200': '#C4C4C4',
      '300': '#ADADAD',
      '400': '#969696',
      '500': '#808080',
      '600': '#666666',
      '700': '#4D4D4D',
      '800': '#333333',
      '900': '#1A1A1A',
    },
    orange: {
      '50': '#FDEEE7',
      '100': '#FDEDE7',
      '200': '#F7AF91',
      '300': '#F48F66',
      '400': '#F2703B',
      '500': '#E84E10',
      '600': '#BF400D',
      '700': '#8F300A',
      '800': '#5F2007',
      '900': '#301003',
    },
    blue: {
      '50': '#f2f3f8',
      '100': '#F4F5F9',
      '200': '#E9EAF2',
      '300': '#828ED9',
      '400': '#5F6FCE',
      '500': '#283583',
      '600': '#303F9C',
      '700': '#242F75',
      '800': '#18204E',
      '900': '#0C1027',
    },
    grayText: {
      '1': '#626782',
    },
    confirm: '#6EAE7F',
    tag: {
      blue: '#f2f3f8',
      green: '#D3E6D8',
      yellow: '#F5E5C1',
      red: '#F2D8D8',
      grey: '#E0E0E0',
    },
  },
  radii: {
    xs: '4px',
    sm: '5px',
    md: '7px',
    lg: '8px',
    xl: '10px',
  },
  components: {
    Button,
    Container,
    Select,
    Tag,
    Heading,
    Divider,
    Input,
    Textarea,
  },
  textStyles: {
    h1: {
      fontFamily: 'mabry',
      fontSize: '3xl',
      fontWeight: '500',
      lineHeight: 'base',
    },
    h2: {
      fontSize: 'xl',
      fontFamily: 'mabry medium',
      fontWeight: '500',
    },
    titleFieldGroup: {
      color: 'blue.500',
      fontSize: 'xl',
      fontWeight: '500',
      mb: '1.2rem',
      lineHeight: '1.1',
    },
    groupLabel: {
      fontWeight: 500,
      pl: 2.5,
      w: '100%',
      color: 'gray.400',
      fontSize: 'xl',
      pb: 2.5,
      mb: 7,
      borderBottom: '1px solid',
      borderBottomColor: 'gray.100',
    },
    infoLabel: {
      fontFamily: 'mabry medium',
      color: 'blue.500',
      pb: 1.5,
      pl: 2.5,
      mb: 6,
      borderBottom: '1px solid',
      borderColor: 'gray.50',
    },
    accountTitle: {
      fontSize: '2xl',
      color: 'blue.500',
      fontFamily: 'mabry medium',
    },
  },
  space: {
    full: '-1.5rem',
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    18: '4.5rem',
    20: '5rem',
    22: '5.5rem',
    24: '6rem',
    26: '6.5rem',
    28: '7rem',
    30: '7.5rem',
    32: '8rem',
    34: '8.5rem',
    36: '9rem',
    38: '9.5rem',
    40: '10rem',
    42: '10.5rem',
    44: '11rem',
    46: '11.5rem',
    48: '12rem',
    50: '12.5rem',
    52: '13rem',
    54: '13.5rem',
    56: '14rem',
    58: '14.5rem',
    60: '15rem',
    62: '15.5rem',
    64: '16rem',
  },
  sizes: {
    container: {
      sm: '550px',
      md: '768px',
      lg: '1024px',
      xl: '1550px',
    },
  },
  layerStyles: {
    blueBox: {
      borderRadius: 'lg',
      backgroundColor: 'blue.50',
    },
    absoluteFull: {
      pos: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
})

// @ts-ignore
export default extendTheme(theme)
