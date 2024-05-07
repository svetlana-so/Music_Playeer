import { LuListMusic } from "react-icons/lu";
import { useHoverEffect } from '../../../customHooks/useHoverEffect';
import { getIconStyle } from "../../../utils/iconStyles";

export const Library = () => {

  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverEffect();
  const iconStyle = getIconStyle(isHovered);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div><LuListMusic size={30} style={iconStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} /></div>
      <div className='text-xs text-gray-500'>
        <p>Playlist</p></div>
    </div>
    
  )
}
