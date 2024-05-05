import React from 'react';
import { Song } from '../../state/musicStore';

interface SongInformationForTheListProps {
    song: Song;
    isPlaying: boolean;
    onPlay: () => void;
    onToggleFavorite: () => void;
}

const SongInformationForTheList: React.FC<SongInformationForTheListProps> = ({
    song,
    isPlaying,
    onPlay,
    onToggleFavorite,
}) => {
    return (
  
        <div className={` cursor-pointer ${isPlaying ? 'playing' : ''}`}>
            <div className="flex flex-row justify-between content-center my-4" onClick={onPlay}>
                <img className='w-20' src={song.artCover} alt={song.title} />
                <div className=' flex flex-col text-center justify-center'>
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                </div>
                <div className="flex justify-center">
                <button  onClick={onToggleFavorite}>
                    {song.isFavorite ? '💖' : '💔'}
                </button>
            </div>
            </div>
          
        </div>
    );
};

export default SongInformationForTheList;
