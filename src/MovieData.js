// MovieData.js
import one from './Images/one.jpg';
import two from './Images/two.jpeg';
import BB from './SeriesImages/BB.jpg'

const MovieData = [
  {
    id: 1,
    img: one,
    name: 'The Brutalist',
    description: 'Escaping postwar Europe, a visionary architect comes to America to rebuild his life, his career, and his marriage. On his own in a strange new country, he settles in Pennsylvania, where a wealthy and prominent industrialist recognises his talent.',
    genre: 'Drama',
    date: 'December 20, 2024',
    long: '3h 35m',
    videoUrl: 'https://drive.google.com/file/d/1Ji31EnnUQPodZBskR1eUZofGkiHE9snM/preview' , // Use 'preview' link
  },
  {
    id: 2,
    img: two,
    name: 'Fight or Flight',
    genre: 'Action',
    date: 'May 9, 2025',
    long: '1h 41m',
    description: 'A mercenary is assigned a target on a flight. But when rival assassins board the plane, assassin and target are forced to team up.',
    videoUrl: 'https://drive.google.com/file/d/1J_zFQs7l4_F8MeAp-LelY_ECHvBdnk1m/preview',
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
