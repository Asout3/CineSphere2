import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrolToTheTop from './ScrolToTheTop';
import Home from './Pages/Home';
import Watch from './Pages/Watch';
import Discover from './Pages/Discover';
import ContactUs from './Pages/ContactUs';
import Top from './Pages/Top';
import Gener from './Pages/Gener';
import SeriesDetails from './components/SeriesDetails';
import WatchAmh from './components/watchAmh';
import EpisodeDetails from './components/EpisodeDetails';
import MoreAmh from './Pages/MoreAmh';
import MoreSer from './Pages/MoreSer';
import MoreMov from './Pages/MoreMov';
import GenSer from './Pages/GenSer';
import NotFound from './Pages/NotFound';

const Links = () => {
  return (
    <BrowserRouter>
      <ScrolToTheTop />
     
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Top" element={<Top />} />
        <Route path="/Gener" element={<Gener />} />
        <Route path="/AmharicMovie/see_more" element={<MoreAmh />} />
        <Route path="/SeriesMovies/see_more" element={<MoreSer />} />
        <Route path="/Movies/see_more" element={<MoreMov />} />
        <Route path='/Gener/Series' element={<GenSer />} />
        <Route path="/series/:Sname" element={<SeriesDetails />} />
        <Route path="/series/:Sname/season/:seasonNumber/episode/:episodeId" element={<EpisodeDetails />} />
        <Route path="/AmharicMovie/:id" element={<WatchAmh />} />
        <Route path="/movie/:id" element={<Watch />} />
<Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Links;
