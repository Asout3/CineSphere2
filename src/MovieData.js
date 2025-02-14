// MovieData.js
import one from './Images/one.jpg';
import two from './Images/two.jpg';
import BB from './SeriesImages/BB.jpg'

const MovieData = [
  {
    id: 1,
    img: one,
    name: 'እነ እገሌ',
    description: 'A drama about troubled teens...',
    genre: 'Drama',
    videoUrl: 'https://www.youtube.com/embed/j0Tng4jdGNU?rel=0&modestbranding=1&showinfo=0' , // Use 'preview' link
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
