import React from "react";
import Container from "./Container";
import AllMovies from "./user/AllMovies";
import AllWebSeries from './user/AllWebSeries';
import AllTvSeries from './user/AllTvSeries';
import HeroSlidShow from "./user/HeroSlidShow";
import NotVerified from "./user/NotVerified";
import TopRatedMovies from "./user/TopRatedMovies";
import TopRatedTVSeries from "./user/TopRatedTVSeries";
import TopRatedWebSeries from "./user/TopRatedWebSeries";


export default function Home() {
  return (
    <div className="dark:bg-primary bg-white min-h-screen">
      <Container className="px-2 xl:p-0">
        <NotVerified />
        {/* slider */}
        <HeroSlidShow />
        {/* Most rated movies */}
        <div className="space-y-3 py-8">
          <TopRatedMovies />
          <TopRatedWebSeries />
          <TopRatedTVSeries />
        </div>
      </Container>
    </div>
  );
}
