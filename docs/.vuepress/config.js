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
    repo: 'varun-patel/varunpatel.ca',
    repoLabel: 'Site Source',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { 
      	text: 'Experience', 
      	items:  [
		  { text: 'Luscinia', link: '/exp/luscinia' },
		  { text: 'Elections', link: '/exp/elections' },
		  { text: 'PG Mini', link: '/exp/pgmini' }
      	]
      },
      {
        text: 'Social',
        items: [
     	  { text: 'GitHub', link: 'https://github.com/varun-patel/' },
      	  { text: 'LinkedIn', link: 'https://linkedin.com/in/varunp01' }
      	]
      },
      { text: 'Resume', link: '/Varun_Patel_Resume.pdf' },
    ]
  }
}
