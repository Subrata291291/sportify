import React from 'react';
import musicData from '../data/musicData';

const HindiMusicList = () => {
  const hindiSection = musicData.languages.find(lang => lang.language === 'Hindi');

  if (!hindiSection) return null;

  return (
    <section className="music_area mt-100" data-aos="fade-up" id="music">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12">
          <div className="music_list">
            <div className="title_area">
              <h4>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"></path>
                  </svg>
                </span> Hindi
              </h4>
            </div>
            <ul className="main__list">
              {hindiSection.songs.map((song, index) => (
                <li className="single-item" key={song.id}>
                  <span className="single-item__number">{index + 1}</span>
                  <span className="single-item__rate">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12.71,12.54a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,17L12,14.66,14.29,17a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-3-1.08L12,9.16l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Z"></path>
                    </svg> {song.lastWeekRank}
                  </span>
                  <a
                    data-title={song.title}
                    data-artist={song.artist}
                    data-img={song.thumbnail}
                    href={song.audio}
                    className="single-item__cover"
                  >
                    <img src={song.thumbnail} alt={song.title} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path>
                    </svg>
                  </a>
                  <div className="single-item__title text-truncate">
                    <h4>{song.title}</h4>
                    <span>{song.artist}</span>
                  </div>
                  <span className="single-item__time">{song.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HindiMusicList;
