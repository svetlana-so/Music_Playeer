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
            console.log('Setting audio source:', currentSong.src);
            audioRef.current.src = currentSong.src;
            audioRef.current.play().catch((error) => {
                console.error('Failed to play audio:', error);
            });
        }
    }, [currentSong]);

    useEffect(() => {
        if (audioRef.current) {
            console.log('Playing state:', isPlaying);
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
        <div className="music-player">
            <h1 className='text-center my-8'>My Music Player</h1>
            
            {currentSong && (
                <div className="flex flex-col justify-center items-center my-4">
                    <div>
                    <img className='w-40' src={currentSong.artCover} alt={currentSong.title} />
                    </div>
                    <div>
                        <h2>{currentSong.title}</h2>
                        <p>{currentSong.artist}</p>
                    </div>
                </div>
            )}
            <audio ref={audioRef} />
            <Controls />
            <VolumeControl audioRef={audioRef} />
            <SongList />
            <NavBar/>
        </div>
    );
};

export default MusicPlayer;
