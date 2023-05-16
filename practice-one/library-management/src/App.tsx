import Header from './components/Header'
import Banner from './components/Banner'
const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header isLogin={true} />
        <Banner />
      </div>
    </div>
  )
}

export default App
