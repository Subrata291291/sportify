import { useEffect, useState } from 'react';

const CLIENT_ID = 'a8e622a7';

export default function useJamendoMusic(limit = 10) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=${limit}&include=musicinfo&audioformat=mp32`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.results.map(track => ({
          id: track.id,
          title: track.name,
          artist: track.artist_name,
          thumbnail: track.album_image,
          audio: track.audio,
        }));
        setSongs(formatted);
      })
      .catch(err => console.error('Jamendo fetch error:', err));
  }, [limit]);

  return songs;
}
