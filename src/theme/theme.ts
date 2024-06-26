export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '4.1rem',
      huge: '5.2rem'
    }
  },
  colors: {
    white: '#FFFFFF',
    orange: '#FF8200',
    danger: '#DC2626',
    dangerText: '#FF0000',
    primary: '#8f56cc',
    secondaryBlue: '#0066A5',
    secondary: '#3CD3C1',
    darkBlue: '#071C33',
    lightPrimary: '#E6ECF3',
    lightBlue: '#e3ebf3',
    navy: '#0F2F5B',
    lightGray: '#9CA3AF',
    smokeWhite: '#F4F4F7',
    green: '#4FA630',
    gray: '#a9adb7',
    darkGray: '#1F2937',
    opacityBlack: '#575F69',
    toggle: '#0066A5',
    black: '#000000',
    darkPlaceholder: '#0A1C31',
    placeholderTextColor: '#A2A9B4',
    red: '#DE1818',
    transparent: '#00000000',
    separator: '#E3E3E8',
    mainBg: '#06092B',
    bloqueioLinear: 'linear-gradient(#7059e2, #FF0000);'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
