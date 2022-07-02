'use:strict' 
import 'antd/dist/antd.css'
import '../styles/common.css'
import '../components/Header/header.css'
import '../styles/index.css'
import '../components/Author/author.css'
import '../components/Featured/featured.css'
import '../components/Footer/footer.css'
import '../styles/detail.css'
import 'markdown-navbar/dist/navbar.css'
import 'highlight.js/styles/monokai-sublime.css'
import '../components/Search/Search.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
