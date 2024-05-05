import React from 'react';
import useMusicStore from '../../state/musicStore';

interface VolumeControlProps {
    audioRef: React.RefObject<HTMLAudioElement>; 
}

const VolumeControl: React.FC<VolumeControlProps> = ({ audioRef }) => {
    const { volume, adjustVolume } = useMusicStore();

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        adjustVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className="flex justify-center">
            <label htmlFor="volume">🔈</label>
            <input
                type="range"
                id="volume"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
};

export default VolumeControl;

