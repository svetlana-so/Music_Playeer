import React from 'react';
import { useRef, useEffect } from 'react';
import SongList from './Songlist';
import Controls from './songControls/index';
import VolumeControl from './VolumeControl';
import useMusicStore from '../../state/musicStore';
import { NavBar } from './navBar/index';

const MusicPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentSong, isPlaying, volume } = useMusicStore();

    useEffect(() => {
        if (currentSong && audioRef.current) {
            audioRef.current.src = currentSong.src;
            audioRef.current.load()
        }
    }, [currentSong]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch((error) => {
                    console.error('Failed to play audio:', error);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    return (
        <div className="music-player flex flex-col gap-8 w-full justify-center items-center">
            <h1 className='text-center text-xl text-gray-500 mt-4'>My Music Player</h1>
            
            {currentSong && (
                <div className="flex flex-col justify-center items-center my-4">
                    <div>
                    <img className='w-40 rounded-lg white-glow' src={currentSong.artCover} alt={currentSong.title} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-2xl font-semibold text-gray-400'>{currentSong.title}</h2>
                        <p className='text-gray-600'>{currentSong.artist}</p>
                    </div>
                </div>
            )}
            <audio ref={audioRef} />
            <Controls />
            <VolumeControl audioRef={audioRef} />
            <SongList />
            <NavBar />
        </div>
    );
};

export default MusicPlayer;
