import { Favorites } from './Favorites'
import { Home } from './Home'
import { Library } from './Library'
import { Search } from './Search'

interface NavBarProps {
  setShowFavorites: (showFavorites: boolean) => void
  showFavorites: boolean
}

export const NavBar: React.FC<NavBarProps> = ({ setShowFavorites, showFavorites }) => {
  return (
    <div className="w-full flex flex-row justify-center gap-10 mb-4 ">
      <Home />
      <Search />
      <Library setShowFavorites={setShowFavorites} showFavorites={showFavorites} />
      <Favorites setShowFavorites={setShowFavorites} showFavorites={showFavorites} />
    </div>
  )
}
