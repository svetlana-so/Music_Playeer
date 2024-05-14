import { LuListMusic } from 'react-icons/lu'
import { useHoverEffect } from '../../../customHooks/useHoverEffect'
import { getIconStyle } from '../../../utils/iconStyles'

interface LibraryProps {
  setShowFavorites: (showFavorites: boolean) => void
  showFavorites: boolean
}

export const Library: React.FC<LibraryProps> = ({ setShowFavorites, showFavorites }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverEffect()
  const iconStyle = getIconStyle(isHovered)

  const toggleFavorites = () => {
    setShowFavorites(false)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <LuListMusic
          size={30}
          style={{
            ...iconStyle,
            fill: !showFavorites ? 'green' : iconStyle.fill,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={toggleFavorites}
        />
      </div>

      <div className="text-xs text-gray-500">
        <p>Playlist</p>
      </div>
    </div>
  )
}
