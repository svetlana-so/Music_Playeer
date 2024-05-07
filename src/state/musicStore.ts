import { create, SetState, GetState } from 'zustand';
import {produce} from 'immer'
import { persist } from 'zustand/middleware';
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
    favoriteSongs: Song[];
}

const createMusicStore = (set: SetState<MusicState>, get: GetState<MusicState>): MusicState => ({
    currentSong: null,
    playlist: [],
    volume: 1,
    isPlaying: false,
    favoriteSongs: [],
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
    toggleFavorite: (songId: string) => {
        set(
            produce((draft: MusicState) => {
                const song = draft.playlist.find((song) => song.id === songId);
                if (song) {
                    song.isFavorite = !song.isFavorite;
                    if (!Array.isArray(draft.favoriteSongs)) {
                        draft.favoriteSongs = [];
                    }
                    if (song.isFavorite) {
                        if (!draft.favoriteSongs.some((favorite) => favorite.id === song.id)) {
                            draft.favoriteSongs.push(song);
                        }
                    } else {
                        draft.favoriteSongs = draft.favoriteSongs.filter(
                            (favorite) => favorite.id !== song.id
                        );
                    }
                }
            })
        );
    },    
    setCurrentSong: (song) => {
        set({ currentSong: song ,isPlaying: true });
    },
});

const useMusicStore = create<MusicState>()(
    persist(
        createMusicStore,
        {
            name: 'music-store',
            partialize: (state) => ({
                favoriteSongs: state.favoriteSongs,
                currentSong: state.currentSong,
            }),
        }
    )
);

const initializeMusicStore = async () => {
    const songs = await loadSongs();
    const favoriteSongs = useMusicStore.getState().favoriteSongs;
    const updatedSongs = songs.map((song) => {
        const isFavorite = favoriteSongs.some(favorite => favorite.id === song.id);
        return { ...song, isFavorite };
    });
    useMusicStore.setState({ playlist: updatedSongs });

    const persistedCurrentSong = useMusicStore.getState().currentSong;
    if (persistedCurrentSong) {
        const currentSongInPlaylist = updatedSongs.find(
            (song) => song.id === persistedCurrentSong.id
        );
        if (currentSongInPlaylist) {
            useMusicStore.setState({ currentSong: currentSongInPlaylist });
        }
    }

    useMusicStore.setState({ playlist: updatedSongs });
};

initializeMusicStore();

export default useMusicStore;
