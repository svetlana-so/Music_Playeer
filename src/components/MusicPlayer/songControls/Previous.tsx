import { getIconStyle } from "../../../utils/iconStyles";
import { useHoverEffect } from '../../../customHooks/useHoverEffect';
import { MdOutlineSkipNext } from "react-icons/md";
import { Song } from '../../../state/musicStore';

interface PreviousSongProps {
    skipTrack: (direction: 'previous' | 'next') => void;
    currentSong: Song | null;
}

export const PreviousSong: React.FC<PreviousSongProps> = ({ skipTrack, currentSong }) => {


    const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverEffect();
    const iconStyle = getIconStyle(isHovered);

  return (
    
        <button className='focus:outline-none' onClick={() => skipTrack('next')} disabled={!currentSong}>
               <MdOutlineSkipNext size={40} style={iconStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}/>
            </button>
 
  )
}
