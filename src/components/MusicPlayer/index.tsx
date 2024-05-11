import React from 'react';
import { useRef, useEffect } from 'react';
import SongList from './Songlist';
import Controls from './songControls/index';
import VolumeControl from './VolumeControl';
import useMusicStore from '../../state/musicStore';
import { NavBar } from './navBar/index';
import { ProgressBarTime } from './ProgressBarTime';
import { DefaultCover } from './DefaultCover';


const MusicPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentSong, isPlaying, volume } = useMusicStore();
    

    useEffect(() => {
        if (currentSong && audioRef.current) {
            audioRef.current.src = currentSong.src;
            audioRef.current.load()
            if (isPlaying) {
                audioRef.current.play().catch((error) => {
                    console.error('Failed to play audio:', error);
                });
            } else {
                audioRef.current.pause();
            }
            
            
        }

    }, [currentSong, isPlaying]);

    useEffect(() => {
        
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);


    return (
        <div className="music-player flex flex-col gap-8 w-full justify-center items-center">
            <h1 className='text-center text-xl text-gray-500 mt-4'>My Music Player</h1>
            {!currentSong && <DefaultCover/>}
            {currentSong && (
                <>
                    <div className="flex justify-center items-center">
                        <img
                            className="w-40 h-40 rounded-full white-glow"
                            src={currentSong.artCover}
                            alt={currentSong.title}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-semibold text-gray-400">{currentSong.title}</h2>
                        <p className="text-gray-600">{currentSong.artist}</p>
                    </div>
                    <ProgressBarTime currentSong = {currentSong} audioRef = {audioRef}/>

                </>
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
