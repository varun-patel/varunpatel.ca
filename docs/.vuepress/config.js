module.exports = {
  plugins: [
  	'@vuepress/back-to-top',
  	'@vuepress/nprogress',
  	'@vuepress/google-analytics',
      {
        'ga': 'UA-148918898-1'
      }
  ],	
  themeConfig: {
    lastUpdated: 'Last Updated',
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { 
      	text: 'Experience', 
      	items:  [
		  { text: 'Luscinia', link: '/exp/luscinia' },
		  { text: 'Elections', link: '/exp/elections' },
		  { text: 'A&W Canada', link: '/exp/awcanada' }
      	]
      },
      { text: 'Resume', link: 'https://google.com' }
    ]
  }
}
