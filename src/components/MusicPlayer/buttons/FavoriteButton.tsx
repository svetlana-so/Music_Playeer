import React from 'react'
import { Song } from '../../../state/musicStore'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io'

interface FavoriteButtonProps {
  song: Song
  onToggleFavorite: (songId: string) => void
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ song, onToggleFavorite }) => {
  const { isFavorite, id } = song

  return (
    <button
      className="focus:outline-none w-1/3"
      onClick={e => {
        e.stopPropagation()
        onToggleFavorite(id)
      }}
    >
      {isFavorite ? (
        <IoMdHeart style={{ color: 'white', outline: 'none', cursor: 'pointer' }} />
      ) : (
        <IoIosHeartEmpty />
      )}
    </button>
  )
}

// useMemo???
