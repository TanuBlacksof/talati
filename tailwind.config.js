module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "poppins":["Poppins","sans-serif"],
    },
    extend: {
      colors:{
        "gray":"#5e5e5e",
        "light-red":"#5e5e5e;",
        "card":"#F8D484",
        "red":"#e21e24",
        "yellow":"#ffb614",
        "footer-top":"#F8343A",
        "footer-bottom":"#36211F",
        "home-featured-top":"#FBD16A",
        "home-featured-bottom":"#E49F37",
        "home-partners-top":"#0BD1A9",
        "home-partners-bottom":"#16827E",
      },
      backgroundImage:{
        "home_aboutus_top_left":"url('/home_aboutus/top_left_bg.png')",
        "home_aboutus_top_right":"url('/home_aboutus/top_right_bg.png')",
        "home_partners_top_left":"url('/home_partners/top_left_bg.png')",
        "home_partners_top_right":"url('/home_partners/top_right_bg.png')",

        "careers_banners":"url('/page_banners/careers_page_banner.jpg')",
        "about_banners":"url('/page_banners/about_page_banner.jpg')",
        "product_banners":"url('/page_banners/product_page_banner.jpg')",
      }
    },
  },
  plugins: [],
}