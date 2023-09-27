export const defaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#252525',
    primary: {
      light: '#6A9DA7',
      light_hover: '#e9fcf2',
      light_active: 'd1f9e5',
      normal: '#025464',
      normal_hover: '5fd59a',
      normal_active: '#55be89',
      dark: '#50b280', 
      dark_hover: '#408e67',
      dark_active: '#306b4d',
      darker: '#25533c'
    },
    secondary: {
      light: '#E8AA42',
      light_hover: '#d9e1e1',
      light_active: '#b0c2c1',
      normal: '#E57C23',
      normal_hover: '#013432',
      normal_active: '#012e2c',
      dark: '#012c29',
      dark_hover: '#012321',
      dark_active: '#001a19',
      darker: '001413'
    },
    grey: {      
      light: '#f2f2f2',
      light_hover: '#ececec',
      light_active: '#d8d8d8',
      normal: '#808080',
      normal_hover: '#737373',
      normal_active: '#666666',
      dark: '#606060',
      dark_hover: '#4d4d4d',
      dark_active: '#3a3a3a',
      soft_dark: '#2B2B2B',
    }
  },
  typography: {
    desktop: {
      headline1: {
        fontWeight: 'bold',
        fontSize: '64px',
        height: '130%',
        spacing: '-2%'
      },
      headline2: {
        fontWeight: 'bold',
        fontSize: '48px',
        height: '130%',
        spacing: '-2%'
      },
      headline3: {
        fontWeight: 'bold',
        fontSize: '40px',
        height: '130%',
        spacing: '0px'
      },
      headline4: {
        fontWeight: 'bold',
        fontSize: '32px',
        height: '130%',
        spacing: '0px'
      },
      headline5: {
        fontWeight: 'bold',
        fontSize: '24px',
        height: '130%',
        spacing: '0px'
      },
      headline6: {
        fontWeight: 'bold',
        fontSize: '18px',
        height: '130%',
        spacing: '0px'
      },
      subtitle1: {
        fontWeight: '600',
        fontSize: '18px',
        height: '150%',
        spacing: '0px'
      },
      subtitle2: {
        fontWeight: 'bold',
        fontSize: '14px',
        height: '150%',
        spacing: '0px'
      },
      body1: {
        fontWeight: 'regular',
        fontSize: '18px',
        height: '150%',
        spacing: '0px'
      },
      body2: {
        fontWeight: 'regular',
        fontSize: '16px',
        height: '150%',
        spacing: '0px'
      }
    },
    tablet: {
      headline1: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px'
      },
    },
    mobile: {
      headline1: {
        fontWeight: 'bold',
        fontSize: '40px',
        height: '48px',
        spacing: '-2%'
      },
      headline2: {
        fontWeight: 'bold',
        fontSize: '32px',
        height: '40px',
        spacing: '-2%'
      },
      headline3: {
        fontWeight: 'bold',
        fontSize: '24px',
        height: '32px',
        spacing: '0px'
      },
      headline4: {
        fontWeight: 'bold',
        fontSize: '18px',
        height: '26px',
        spacing: '0px'
      },
      headline5: {
        fontWeight: 'bold',
        fontSize: '16px',
        height: '24px',
        spacing: '0px'
      },
      headline6: {
        fontWeight: 'bold',
        fontSize: '14px',
        height: '22px',
        spacing: '0px'
      },
      headline7: {
        fontWeight: 'regular',
        fontSize: '16px',
        lineHeight: '150%'
      },
      headline8: {
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '160%',
        fontFamily: 'Montserrat'
      },
      subtitle1: {
        fontWeight: 'semiBold',
        fontSize: '14px',
        height: '22px',
        spacing: '0px'
      },
      subtitle2: {
        fontWeight: 'semiBold',
        fontSize: '12px',
        height: '20px',
        spacing: '0px'
      },
      body1: {
        fontWeight: 'regular',
        fontSize: '14px',
        height: '22px',
        spacing: '0px'
      },
      body2: {
        fontWeight: 'regular',
        fontSize: '12px',
        height: '20px',
        spacing: '0px'
      },
      body3: {
        fontSize: '10px',
        fontWeight: 'bold',
        lineHeight: '150%',
        fontFamily: 'Nunito'
      },
      caption: {
        fontWeight: 'regular',
        fontSize: '10px',
        height: '18px',
        spacing: '0.35px'
      },
      overline: {
        fontWeight: 'regular',
        fontSize: '8px',
        height: '16px',
        spacing: '1.6px'
      }
    }
  },
  buttons: {
    extraLarge: {
      fontWeight: 'medium',
      fontSize: '24px',
      height: '100%',
      spacing: '-2%'
    },
    large: {
      fontWeight: 'medium',
      fontSize: '20px',
      height: '72px',
      spacing: '0px',
      padding: '24px 32px',
      width: '329px'
    },
    medium: {
      fontWeight: 'medium',
      fontSize: '16px',
      spacing: '0px',
      height: '100%',
      padding: '12px 18px',
      width: '200px'
    },
    small: {
      fontWeight: 'medium',
      fontSize: '15px',
      height: '100%',
      spacing: '0px'
    }
  },
  breakpoints: {
    mobile: '480px',
    tablet: '834px',
    desktop: '1440px'
  }
}
