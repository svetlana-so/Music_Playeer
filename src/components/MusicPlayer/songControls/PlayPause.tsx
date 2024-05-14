import React from 'react'
import { getIconStyle } from '../../../utils/iconStyles'
import { useHoverEffect } from '../../../customHooks/useHoverEffect'
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa'

interface PlayPauseProps {
  playPause: () => void
  isPlaying: boolean
}

export const PlayPause: React.FC<PlayPauseProps> = ({ isPlaying, playPause }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverEffect()
  const iconStyle = getIconStyle(isHovered)

  return (
    <div>
      <button className="focus:outline-none" onClick={playPause}>
        {isPlaying ? (
          <FaRegPauseCircle
            size={50}
            style={iconStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ) : (
          <FaRegPlayCircle
            size={50}
            style={iconStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </button>
    </div>
  )
}
