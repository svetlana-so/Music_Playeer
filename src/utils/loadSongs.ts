import { Song } from "../state/musicStore";

export const loadSongs = async (): Promise<Song[]> => {
    const songs = [
        {
            id: '1',
            title: 'Song One',
            artist: 'Artist One',
            artCover: 'src/assets/covers/cover1.jpeg',
            duration: 78,  
            src: 'src/assets/music/Beautiful-dreams.mp3',
            isFavorite: false,
        },
        {
            id: '2',
            title: 'Song Two',
            artist: 'Artist Two',
            artCover: 'src/assets/covers/cover2.jpeg',
            duration: 173,
            src: 'src/assets/music/Gareth-Amp-Mastak.mp3',
            isFavorite: false,
        },
        {
            id: '3',
            title: 'Song Three',
            artist: 'Artist Three',
            artCover: 'src/assets/covers/cover3.jpeg',
            duration: 222,
            src: 'src/assets/music/Ritchy-Reach.mp3',
            isFavorite: false,
        },
        {
            id: '4',
            title: 'Song Four',
            artist: 'Artist Four',
            artCover: 'src/assets/covers/cover4.jpeg',
            duration: 160,
            src: 'src/assets/music/Ryva-Deja-Vu.mp3',
            isFavorite: false,
        },
       
    ];
    return songs;
};
