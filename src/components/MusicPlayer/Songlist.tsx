import React from 'react';
import useMusicStore from '../../state/musicStore';
import SongInformationForTheList from './SongInformationForTheList';


const SongList: React.FC = () => {
    const { playlist, currentSong, setCurrentSong, toggleFavorite } = useMusicStore();

    return (
        <div className="w-2/3 h-60 overflow-y-auto px-2">
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

