tailwind.config = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        }
      },
      screens: {
      'xxxsm': '350px',
      'xxsm' : '450px',
      'xsm' : '550px', 
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    }
  }