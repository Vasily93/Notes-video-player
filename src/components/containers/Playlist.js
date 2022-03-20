import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import Nightmode from '../Nightmode';

const Playlist = () => {
  return (
    <div>
        <Nightmode />
        <PlaylistHeader />
        <PlaylistItems />
    </div>
  )
}

export default Playlist;
