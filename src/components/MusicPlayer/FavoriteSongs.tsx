import React from 'react'
import useMusicStore from '../../state/musicStore'
import SongInformationForTheList from './SongInformationForTheList'

const FavoriteSongs: React.FC = () => {
  const { favoriteSongs, currentSong, setCurrentSong, toggleFavorite } = useMusicStore()

  return (
    <div className="w-2/3 min-h-60 overflow-y-auto px-2">
      {favoriteSongs.length === 0 ? (
        <div className="flex justify-center m-10">
          <p>No favorite songs yet</p>
        </div>
      ) : (
        favoriteSongs.map(song => (
          <SongInformationForTheList
            key={song.id}
            song={song}
            isPlaying={currentSong?.id === song.id}
            onPlay={() => setCurrentSong(song)}
            onToggleFavorite={() => toggleFavorite(song.id)}
          />
        ))
      )}
    </div>
  )
}

export default FavoriteSongs
