import React from 'react';
import useMusicStore from '../../state/musicStore';

const Controls: React.FC = () => {
    const { playPause, skipTrack, currentSong, isPlaying } = useMusicStore();
    return (
        <div className="flex justify-center gap-2">
            <button onClick={() => skipTrack('previous')} disabled={!currentSong}>
                ⏮️ Previous
            </button>
            <button onClick={playPause}>
                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
            <button onClick={() => skipTrack('next')} disabled={!currentSong}>
                ⏭️ Next
            </button>
        </div>
    );
};

export default Controls;
