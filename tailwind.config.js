/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage:{hero:'url(/hero/hero-bg.png)',
       hero_shape:'url(/hero/shape-1.svg)',
       hero_shape2_light:'url(/hero/shape-2-light.svg)',
       hero_shape2_dark:'url(/hero/shape-2-dark.svg)',
       about_shape_light:'url(/about/shape-light.svg)',
       about_shape_dark:'url(/about/shape-dark.svg)',
       dots_light:'url(/dots-lig.svg)',
       dots_dark:'url(/dots-dar.svg)',
       work_project_bg_light:'url(/work/project-bg-light.png)',
       work_project_bg_dark:'url(/work/project-bg-dark.png)',
       contact_illustration_light:'url(/contact/illustration-light.svg)',
       contact_illustration_dark:'url(/contact/illustration-dark.svg)'
      },
    },
  },
  
  plugins: [],
}