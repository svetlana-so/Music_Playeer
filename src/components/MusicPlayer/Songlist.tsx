import React from 'react';
import useMusicStore from '../../state/musicStore';
import SongInformationForTheList from './SongInformationForTheList';


const SongList: React.FC = () => {
    const { playlist, currentSong, setCurrentSong, toggleFavorite } = useMusicStore();

    return (
        <div className="song-list">
            {playlist.map((song) => (
                <SongInformationForTheList
                    key={song.id}
                    song={song}
                    isPlaying={currentSong?.id === song.id}
                    onPlay={() => setCurrentSong(song)}
                    onToggleFavorite={() => toggleFavorite(song.id)}
                />
            ))}
        </div>
    );
};

export default SongList;

