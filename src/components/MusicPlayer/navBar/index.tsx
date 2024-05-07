
import { Favorites } from './Favorites'
import { Home } from './Home'
import { Library } from './Library'
import { Search } from './Search'

export const NavBar = () => {
  return (
    <div className='flex flex-row gap-2'>
    <Home/>
    <Search/>
    <Library/>
    <Favorites/>
    </div>
  )
}
