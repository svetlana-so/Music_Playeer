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
            <div className="flex flex-row gap-2 content-center m-4" onClick={onPlay}>
                <img className='w-16 rounded-lg' src={song.artCover} alt={song.title} />
                <div className=' flex flex-col justify-center'>
                <h2 className='text-md font-semibold text-gray-400'>{song.title}</h2>
                <p className='text-gray-600 text-sm'>{song.artist}</p>
                    
                </div>
            </div>
          <div>
          <FavoriteButton song={song} onToggleFavorite={() => onToggleFavorite(song.id)} />
          </div>
        </div>
    );
};

export default SongInformationForTheList;
