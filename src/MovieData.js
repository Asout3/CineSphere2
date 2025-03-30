// MovieData.js
import one from './Images/one.jpg';
import two from './Images/two.jpg';
import BB from './SeriesImages/BB.jpg'

const MovieData = [
  {
    id: 1,
    img: one,
    name: 'The Brutalist',
    description: 'Escaping postwar Europe, a visionary architect comes to America to rebuild his life, his career, and his marriage. On his own in a strange new country, he settles in Pennsylvania, where a wealthy and prominent industrialist recognises his talent.',
    genre: 'Drama',
    videoUrl: 'https://drive.google.com/file/d/1Ji31EnnUQPodZBskR1eUZofGkiHE9snM/preview' , // Use 'preview' link
  },
  {
    id: 2,
    img: two,
    name: 'Arcane',
    genre: 'Drama',
    description: 'A series based on the game League of Legends...',
    videoUrl: 'https://example.com/video2.mp4',
  },
  {
    id: 3,
    img: BB,
    genre: 'Crime',
    name: 'Breaking Bad',
    description: 'A cancer patient turns to making meth...',
    videoUrl: 'https://example.com/video3.mp4',
  }
];

export default MovieData;
