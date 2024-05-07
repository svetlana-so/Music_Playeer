import React from 'react'
import { MdOutlineSkipPrevious } from "react-icons/md";
import { getIconStyle } from "../../../utils/iconStyles";
import { useHoverEffect } from '../../../customHooks/useHoverEffect';
import { Song } from '../../../state/musicStore';

interface NextSongProps {
    skipTrack: (direction: 'previous' | 'next') => void;
    currentSong: Song | null;
}

export const NextSong: React.FC<NextSongProps> = ({ skipTrack, currentSong }) => {

    const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverEffect();
    const iconStyle = getIconStyle(isHovered);

  return (
    <button className='focus:outline-none' onClick={() => skipTrack('previous')} disabled={!currentSong}>
            <MdOutlineSkipPrevious size={40} style={iconStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} />
            </button>
  )
}
