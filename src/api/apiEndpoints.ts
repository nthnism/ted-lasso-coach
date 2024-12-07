export const apiEndpoints = {
  getShowDetails: () => 'https://api.tvmaze.com/shows/44458',
  getShowCast: () => 'https://api.tvmaze.com/shows/44458/cast',
  getEpisodeList: () => 'https://api.tvmaze.com/shows/44458/episodes',
  getEpisodeDetails: (episodeId: number) =>
    `https://api.tvmaze.com/episodes/${episodeId}`,
};
