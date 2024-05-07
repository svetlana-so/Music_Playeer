import React from 'react';
import { Song } from '../../state/musicStore';
import { FavoriteButton } from './FavoriteButton';

interface SongInformationForTheListProps {
    song: Song;
    isPlaying: boolean;
    onPlay: () => void;
    onToggleFavorite: (songId: string) => void; 
}

const SongInformationForTheList: React.FC<SongInformationForTheListProps> = ({
    song,
    isPlaying,
    onPlay,
    onToggleFavorite,
}) => {
    return (
  
        <div className={` cursor-pointer ${isPlaying ? 'playing' : ''} flex flex-row items-center justify-between`}>
            <div className="flex flex-row gap-4 content-center m-4" onClick={onPlay}>
                <img className='w-20' src={song.artCover} alt={song.title} />
                <div className=' flex flex-col text-center justify-center'>
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                </div>
            </div>
          <div>
          <FavoriteButton song={song} onToggleFavorite={() => onToggleFavorite(song.id)} />
          </div>
        </div>
    );
};

export default SongInformationForTheList;
