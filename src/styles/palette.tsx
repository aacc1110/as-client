const palette = {
  /* blue */
  blue0: '#5ABEFF',
  blue1: '#50B4FF',
  blue2: '#46AAFF',
  blue3: '#3CA0FF',
  blue4: '#3296FF',
  blue5: '#288CFF',
  blue6: '#1E82FF',
  blue7: '#1478FF',
  blue8: '#0A6EFF',
  blue9: '#0064FF',

  /* melrose */
  melrose0: 'F9FFFF',
  melrose1: 'EBF5FF',
  melrose2: 'E0EBFF',
  melrose3: 'CCE1FF',
  melrose4: 'B8D7FF',
  melrose5: 'AECDFF',
  melrose6: 'A4C3FF',
  melrose7: '9AB9FF',
  melrose8: '90AFFF',
  melrose9: '86A5FF',

  /* gray */
  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529',

  /* red */
  red0: '#fff5f5',
  red1: '#ffe3e3',
  red2: '#ffc9c9',
  red3: '#ffa8a8',
  red4: '#ff8787',
  red5: '#ff6b6b',
  red6: '#fa5252',
  red7: '#f03e3e',
  red8: '#e03131',
  red9: '#c92a2a'
};

export const buttonColorMap: {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
  };
} = {
  blue: {
    background: palette.blue8,
    color: 'white',
    hoverBackground: palette.blue6
  },
  lightGray: {
    background: palette.gray2,
    color: palette.gray7,
    hoverBackground: palette.gray1
  },
  gray: {
    background: palette.gray6,
    color: 'white',
    hoverBackground: palette.gray5
  },
  darkGray: {
    background: palette.gray8,
    color: 'white',
    hoverBackground: palette.gray6
  }
};

export default palette;
