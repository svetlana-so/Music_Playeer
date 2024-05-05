import {create} from 'zustand';
import { loadSongs } from '../utils/loadSongs';

export interface Song {
    id: string;
    title: string;
    artist: string;
    artCover: string;
    duration: number;
    src: string;
    isFavorite: boolean;
}

interface MusicState {
    currentSong: Song | null;
    playlist: Song[];
    volume: number;
    playPause: () => void;
    skipTrack: (direction: 'next' | 'previous') => void;
    adjustVolume: (level: number) => void;
    toggleFavorite: (songId: string) => void;
    setCurrentSong: (song: Song) => void;
    isPlaying: boolean;
}

const useMusicStore = create<MusicState>((set, get) => ({
    currentSong: null,
    playlist: [],  
    volume: 1,
    isPlaying: false,
    playPause: () => {
        const { isPlaying, currentSong } = get();
        if (currentSong) {
            set({ isPlaying: !isPlaying });
        }
    },
    skipTrack: (direction) => {
        const { playlist, currentSong } = get();
        const currentIndex = playlist.findIndex(song => song.id === currentSong?.id);
        let newIndex = currentIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % playlist.length;
        } else if (direction === 'previous') {
            newIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        }

        const newSong = playlist[newIndex];
        set({ currentSong: newSong, isPlaying: true });
    },
    adjustVolume: (level) => {
        set({ volume: level });
    },
    toggleFavorite: (songId) => {
        const { playlist } = get();
        const updatedPlaylist = playlist.map(song => 
            song.id === songId ? { ...song, isFavorite: !song.isFavorite } : song
        );
        set({ playlist: updatedPlaylist });
    },
    setCurrentSong: (song) => {
        set({ currentSong: song });
    },
}));

const initializeMusicStore = async () => {
    const songs = await loadSongs();
    useMusicStore.setState({ playlist: songs });
};

initializeMusicStore();

export default useMusicStore;
