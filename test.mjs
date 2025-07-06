import tmdbScrape from "./src/vidsrc.js";

async function test() {
  // Example: Movie (replace with a real TMDB movie ID)
  const movieId = "550"; // Fight Club as example
  const movieResult = await tmdbScrape(movieId, "movie");
  console.log("Movie Result:", movieResult);

  // Example: TV Show (replace with a real TMDB TV ID, season, and episode)
  const tvId = "76479"; // Example TMDB TV ID
  const season = 1;
  const episode = 1;
  const tvResult = await tmdbScrape(tvId, "tv", season, episode);
  console.log("TV Result:", tvResult);
}

test().catch(console.error);
