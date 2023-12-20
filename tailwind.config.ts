import { tailwindPresetConfig } from '@shibaone/shibuikit/dist/tailwind.config';
module.exports = {
  presets: [tailwindPresetConfig],

  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints but with 40px removed
      screens: {
        sm: '660px',
        md: '960px',
        lg: '1280px',
        xl: '1676px',
        '2xl': '1920px',
      },
    },

    screens: {
      mobile: { max: '500px' },
      // => @media (max-width: 500px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '960px',
      // => @media (min-width: 768px) { ... }

      lg: '1280px',
      // => @media (min-width: 1024px) { ... }

      xl: '1676px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
  },
};
