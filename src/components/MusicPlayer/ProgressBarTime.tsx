import {useState, useEffect} from 'react'

interface ProgressBarTimeProps {
    currentSong: {
        id: string;
        title: string;
        artist: string;
        artCover: string;
        duration: number;
        src: string;
        isFavorite: boolean;
    };
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const ProgressBarTime: React.FC<ProgressBarTimeProps>  = ({currentSong, audioRef}) => {

    const [currentTime, setCurrentTime] = useState(0);

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime); 
        }
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    };
    
    useEffect(() => {
        const updateCurrentTime = () => {
            if (audioRef.current && !audioRef.current.paused) {
                setCurrentTime(audioRef.current.currentTime)
            }
        }
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', updateCurrentTime)
        }
        return () => {
            if (audioRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
            }
        };
    }, [audioRef]);

    

  return (
    <div className="flex flex-row justify-center gap-2 items-center mt-2">
    <span className="ml-2 text-gray-600">
            {formatTime(currentTime)}
        </span>
        <input
            type="range"
            min="0"
            max={currentSong.duration}
            value={currentTime}
            onChange={handleTimeChange}
            className="w-48 slider h-1 rounded-lg bg-gray-500 white-glow appearance-none focus:outline-none focus:ring-2 focus:ring-gray-600 "
        />
        <span className="ml-2 text-gray-600">
            {formatTime(currentSong.duration)}
        </span>
    </div>
  )
}
