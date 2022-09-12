/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        abel: ['Abel']
      },
      backgroundImage: {
        'burger': "url('../images/burger.svg')",
        'hero': "url('../images/hero-bg.png')",
        'p': "url('../images/persent-img.svg')",
        'handleM': "url('../images/handle-money.png')",
        'payment': "url('../images/payment.png')",
        'findC': "url('../images/find-card.png')",
        'linearBG': 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);'
      },
      lineHeight: {
        'item-lh': '130%',
        'heroLineH': '140%',
        'feedback': '170%',
      },
      padding: {
        heroP: "400px",
        heroTextP: "173px",
        feaadbackLiI: '40px 30px',
        feedbackLi: '60px 40px',
      },
      maxWidth: {
        heroText: "670px",
        staticI: "553px",
        staticImd: "620px",
        staticBFW: '470px',
        feadbackTM: '630px',
        feedbackLiW: '370px',
        footerP: '320px',
      },
      height: {
        staticBFH: '350px',
        staticBSH: '450px',
      },
      gridTemplateColumns: {
        two: '550px, 434px',
      },
      colors: {
        footerC: '#0B0A0C',
      },
    },
  },
  plugins: [],
}
