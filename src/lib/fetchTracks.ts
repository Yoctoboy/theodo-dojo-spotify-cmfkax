const apiToken: string = '';
import { SavedTrack } from 'spotify-types';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  let apiToken =
    'BQCSReCpFiKQ6h8YuOeE-3xZfTfR60Ws3fz1eVLsFw9yZbwF0hTtH2mPnF0WdWyTdjHRWcbsoUhRks7AVdozJzEnSnr7vwq_lYdhuW_Lf_QhKaHfzswZ-As8GRyj3O9kg1zhfuTVsmEZOMaMnBsXRaPgWDnn1f-l8WoKOooEkFQXKSDTLZpMXbYDwBNc5NdFs_M';
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
