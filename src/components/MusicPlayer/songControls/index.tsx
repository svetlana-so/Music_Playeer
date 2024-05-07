import { NextSong } from './NextSong'
import { PreviousSong } from './Previous'
import { PlayPause } from './PlayPause'
import useMusicStore from '../../../state/musicStore';

const Controls = () => {

    const { playPause, skipTrack, currentSong, isPlaying } = useMusicStore();

  return (
   <div className='flex flex-row justify-center gap-6'>
    <NextSong skipTrack={skipTrack} currentSong={currentSong} />
    <PlayPause playPause={playPause} isPlaying={isPlaying} />
    <PreviousSong skipTrack={skipTrack} currentSong = {currentSong}/>
    </div>
  )
}

export default Controls