import { tailwindPresetConfig } from '@shibaone/shibuikit/dist/tailwind.config';
module.exports = {
  presets: [tailwindPresetConfig],

  theme: {
    screens: {
      mobile: { max: '500px' },
      // => @media (max-width: 500px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
};
