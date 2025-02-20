import React from 'react';
import { useParams } from 'react-router-dom';
import SeriesMovieData from '../SeriesMovieData';
import HomeNav from './HomeNav'
import Footer from './Footer'
import SeriesMovieRecomendation from './SeriesMovieRecomendation';
import MainSeries2 from './mainSeries2';


const EpisodeDetails = ({ movie }) => {
    const { Sname, seasonNumber, episodeId } = useParams();
    const series = SeriesMovieData.find((series) => series.Sname === Sname); 
    const season = series?.Seasons.find((season) => season.seasonNumber == seasonNumber); 
    const episode = season?.episodes.find((episode) => episode.id == episodeId); 
    
    if (!episode) {
        return <div>Episode not found</div>;
    }

    

    return (
        <>
        <HomeNav />
            <div className="border-4  m-10 mx-3 sm:mx-16 p-5 bg-gray-900/50 rounded-3xl">
                <div className="border-2  m-5 p-2 text-white rounded-md">
                    <strong>{Sname}</strong>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        src={episode.videoUrl}
                        style={{ border: 'none' }}
                        seamless
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                        title={episode.name}
                    ></iframe>
                </div>
                <div className='border-2 border-white m-5 p-5 text-center bg-gray-900/50 text-white tracking-wide rounded-md'>
                    <h1>Title: Season {season.seasonNumber} - {episode.name}</h1><br></br>
                    <h1>Description: {episode.description}</h1><br></br>
                    
                </div>
            </div>
            <MainSeries2 />

            <div className='border-4 border-white m-10 mx-3 sm:mx-16 p-7 bg-[rgba(255,255,255,0.16)]'>
                <SeriesMovieRecomendation movie={movie}/>
            </div>
            <Footer />
        </>
    );
};

export default EpisodeDetails;
