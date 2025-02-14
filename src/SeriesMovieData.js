import BB from './SeriesImages/BB.jpg';

const SeriesMovieData = [
  {
    id: 1,
    Sname: "Breaking bad haha",
    Genre: "Crime",  
    img: BB,
    Seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { id: 101, name: "Episode 1 - Pilot", description: "Walter White is a high school chemistry teacher who learns that he has lung cancer. With a new lease of life, Walter sets up a mobile meth lab with a former student and becomes a drug dealer in order to secure his family's financial security.", videoUrl: "https://drive.google.com/file/d/133KyJmiyECGwemHyuIohl-62fzAXJjkL/preview" },
          { id: 102, name: "Episode 2 - The cat's in the Bag", description: "Following their debacle in the desert, Walter and Jesse are left with a mess to dispose of. Later, Skyler grows suspicious of Walt's recent activity.", videoUrl: "https://drive.google.com/file/d/12wCfXjE2eNIlanU-AtZ9ScBEkTNGuVYG/preview" },
          { id: 103, name: "Episode 3 - And the Bag's in the River", description: "Following an argument with Jesse, Walter is left to deal with Krazy-8 alone. After Marie raises concerns that Walt Jr is smoking cannabis, Hank shows him the dangers of drug use.", videoUrl: "https://drive.google.com/file/d/14IkCN6SZ04SmrKIAjI1yXqCB9zVRhZZn/preview" },
          { id: 104, name: "Episode 4 - Cancer Man", description: "The DEA becomes suspicious of a new drug kingpin. Walt reveals that he has cancer to Marie and Hank. Elsewhere, Jesse visits his estranged family.", videoUrl: "https://drive.google.com/file/d/13gsPozn4HnCM9HfzotYLmiaYv-aCJ3KR/preview" },
          { id: 105, name: "Episode 5 - Gray Matter", description: "Walter and Skyler attend a former colleague's party, Jesse tries to free himself from the drugs, and Skyler organises an intervention for Walt.", videoUrl: "https://drive.google.com/file/d/14Kakrj8TR-lo0lG4jzt1j5Qw7Gjhhi6b/preview" },
          { id: 106, name: "Episode 6 - crazy handful of Nothin'", description: "The side-effects of chemotherapy begin to plague Walt, who is also cooking meth again, and Jesse's friend, Skinny Pete, introduces him to a distributor named Tuco, but things go awry and Jesse ends up hospitalised.", videoUrl: "https://drive.google.com/file/d/14JtQagbEjbKjWfmikfq1Q8S2x0QQdMYF/preview" },
          { id: 107, name: "Episode 2", description: "Description of Episode 2", videoUrl: "https://drive.google.com/file/d/133KyJmiyECGwemHyuIohl-62fzAXJjkL/preview" },
        ],
      }, 
      {
        seasonNumber: 2,
        episodes: [
          { id: 201, name: "Episode 1", description: "Description of Episode 1", videoUrl: "url3" },
          { id: 202, name: "Episode 2", description: "Description of Episode 2", videoUrl: "url4" },
        ],
      },
    ],
  },
  {
    id: 2,
    Sname: "Behind her Eyes",  // Corrected typo here
    Genre: "Crime",  // Corrected typo here
    img: BB,
    Seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { id: 101, name: "Episode 1", description: "Description of Episode 1", videoUrl: "url3" },
        ],
      },
    ],
  },
 
];

export default SeriesMovieData;
