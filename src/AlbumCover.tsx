import { SavedTrack } from 'spotify-types';

export const AlbumCover = ({ track }: { track: SavedTrack }) => {
  return (
    <img
      // @ts-expect-error
      src={track.track.album.images[0].url}
      style={{ width: 400, height: 400 }}
    />
  );
};
