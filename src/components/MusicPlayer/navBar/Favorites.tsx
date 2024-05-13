import { GoHeart } from "react-icons/go";
import { useHoverEffect } from '../../../customHooks/useHoverEffect';
import { getIconStyle 
} from "../../../utils/iconStyles";

interface FavoritesProps {
  setShowFavorites: (showFavorites: boolean) => void;
  showFavorites: boolean
}

export const Favorites: React.FC<FavoritesProps> = ({ setShowFavorites, showFavorites }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverEffect();
  const iconStyle = getIconStyle(isHovered);
  
  const toggleFavorites = () => {
    setShowFavorites(true); 
  };


  return (
    <div className='flex flex-col justify-center items-center'>
      <div><GoHeart size={30} style={{
            ...iconStyle,
            fill: showFavorites ? 'pink' : iconStyle.fill
          }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                onClick={toggleFavorites} /></div>
      <div className='text-xs text-gray-500'>
        <p> Favorites</p>
       </div>
    </div>
    
  )
}
