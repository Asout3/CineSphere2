// MovieData.js
import one from './Images/one.jpg';
import two from './Images/two.jpeg';
import three from './Images/three.jpg';
import flow from './Images/flow.jpg';
import WLIT from './Images/weliveintime.jpg';
import CTRL from './Images/CTRL.jpg';
import TG2 from './Images/TG2.jpg';
import Gorge from './Images/gorge.jpg';


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
  },
  {
    id: 4,
    img: flow,
    name: "Flow",
    genre: 'Adventure',
    date: "August 29, 2024",
    long: '1h 25m',
    description: "Cat is a solitary animal, but as its home is devastated by a great flood, he finds refuge on a boat populated by various species, and will have to team up with them despite their differences.",
    videoUrl: 'https://drive.google.com/file/d/1LgzfZ8dkrWIWtWPjM4vRooNxIWSX8KXh/preview',
   },
   {
    id: 5,
    img: WLIT,
    name: "We Live in Time",
    genre: 'Romance',
    date: "January 1, 2025",
    long: '1h 47m',
    description: "Almut and Tobias are brought together by a surprise encounter that changes their lives. As they embark on a path challenged by the limits of time, they learn to cherish each moment of their unconventional love story.",
    videoUrl: 'https://drive.google.com/file/d/1MCjUsBq-fR6YeVM075x0bMmX2GPEx9-q/preview',
   },
  {
    id: 6,
    img: CTRL,
    name: "CTRL",
    genre: 'Drama',
    date: "October 4, 2024",
    long: '1h 39m',
    description: "Nella and Joe are the perfect influencer couple, but when he cheats on her, she turns to an AI app to erase him digitally from her life, only to discover that he has disappeared in real life as well.",
    videoUrl: 'https://drive.google.com/file/d/1M0PUSmxO4OPq8bfSzo_ChLlVvK3ZxX-w/preview',
   },
  {
    id: 7,
    img: TG2,
    name: "Gladiator II",
    genre: 'Action',
    date: "November 15, 2024",
    long: '2h 28m',
    description: "Years after witnessing the death of Maximus at the hands of his uncle, Lucius must enter the Colosseum after the powerful emperors of Rome conquer his home. With rage in his heart and the future of the empire at stake, he looks to the past to find the strength and honor needed to return the glory of Rome to its people.",
    videoUrl: 'https://drive.google.com/file/d/1M40SaqSrTpE4vpoK5uro2dztpn0LRTEN/preview',
  },
  {
   id: 8,
   img: Gorge,
   name: "The Gorge",
   genre: 'Action',
   date: "February 14, 2025",
   long: '2h 7m',
   description: "Two highly-trained operatives are appointed to posts in guard towers on opposite sides of a vast and highly classified gorge, protecting the world from a mysterious evil that lurks within. They work together to keep the secret in the gorge.",
   videoUrl: 'https://drive.google.com/file/d/1MOiGqIBiD0ljSbyrjFwFPf1f4_xbxig7/preview',
  }

  //{
   // id: 4,
   // img: three,
   // name: "kiki",
   // genre: 'hi',
   // date: "jan 2, 2000",
   // long: '1h 2m',
   // description: "wow",
   // videoUrl: 'url',
 // }

];

export default MovieData;
