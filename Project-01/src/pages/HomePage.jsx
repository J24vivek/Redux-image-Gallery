import ResultGrid from "../components/ResultGrid.jsx"
import SearchBar from "../components/SearchBAr.jsx"
import Tabs from "../components/Tabs.jsx"


const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <Tabs />
      <ResultGrid/>
    </div>
  )
}

export default HomePage
