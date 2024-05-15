import React from 'react'
import useMusicStore from '../../../state/musicStore'
import { LiaVolumeUpSolid } from 'react-icons/lia'

interface VolumeControlProps {
  audioRef: React.RefObject<HTMLAudioElement>
}

const VolumeControl: React.FC<VolumeControlProps> = ({ audioRef }) => {
  const { volume, adjustVolume } = useMusicStore()

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    adjustVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="flex justify-center items-center">
      <label htmlFor="volume">
        <LiaVolumeUpSolid size={30} />
      </label>
      <input
        className="slider w-32 h-1 rounded-lg bg-gray-500 white-glow appearance-none focus:outline-none focus:ring-2 focus:ring-gray-600"
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  )
}

export default VolumeControl
