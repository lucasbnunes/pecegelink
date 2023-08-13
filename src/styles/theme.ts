import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  spacing: (value) => `${value * 4}px`,
  colors: {
    primary: {
      '50': '#fff0f1',
      '100': '#ffe2e6',
      '200': '#ffcad3',
      '300': '#ff9fae',
      '400': '#ff6983',
      '500': '#ff2e58',
      '600': '#ed1148',
      '700': '#c8083d',
      '800': '#a8093a',
      '900': '#8f0c38',
      '950': '#500119',
    },
    secondary: {
      '50': '#f3f6fa',
      '100': '#e8eff7',
      '200': '#d6e1ef',
      '300': '#bccce5',
      '400': '#a1b2d8',
      '500': '#8999cb',
      '600': '#717dba',
      '700': '#5f69a3',
      '800': '#4f5884',
      '900': '#444b6b',
      '950': '#282c3e',
    },
    gray: {
      '50': '#f7f8f8',
      '100': '#edeef1',
      '200': '#d8dbdf',
      '300': '#b6bac3',
      '400': '#8e95a2',
      '500': '#6b7280',
      '600': '#5b616e',
      '700': '#4a4e5a',
      '800': '#40444c',
      '900': '#383a42',
      '950': '#25272c',
    },
  },
};