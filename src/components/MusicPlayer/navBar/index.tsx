
import { Favorites } from './Favorites'
import { Home } from './Home'
import { Library } from './Library'
import { Search } from './Search'


export const NavBar:React.FC = () => {

  

  return (
    <div className='w-full flex flex-row justify-center gap-10 mb-4'>
    <Home/>
    <Search/>
    <Library/>
    <Favorites />
    </div>
  )
}
