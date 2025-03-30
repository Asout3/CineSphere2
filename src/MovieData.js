// MovieData.js
import one from './Images/one.jpg';
import two from './Images/two.jpeg';
import three from './Images/three.jpg';

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
    img: three,
    genre: 'Action',
    name: 'Avengement',
    date: 'May 24, 2019',
    long: '1h 28m',
    description: 'A criminal breaks out of prison and embarks on a journey to exact revenge on those who have turned him into a serial killer.',
    videoUrl: 'https://drive.google.com/file/d/1LYN301mCtMaPpahgwQAg--isxc_lJ-dC/preview',
  }
];

export default MovieData;
