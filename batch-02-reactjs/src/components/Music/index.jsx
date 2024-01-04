import React, { useState } from 'react';
import Play from './Play';
import List from './List';

const listMusic = [
  {
    id: 1,
    name: 'ChimSau',
    cover: require('assets/music/1.jpg'),
    src: require('assets/music/ChimSau-MCKTrungTran-7205660.mp3'),
    artist: 'NF Real music',
    isLiked: true,
  },
  {
    id: 2,
    name: 'coaycuaanhay',
    cover: require('assets/music/2.jpg'),
    src: require('assets/music/coaycuaanhay.mp3'),
    artist: 'NF Real 2',
    isLiked: false,
  },
  {
    id: 3,
    name: 'DontCoi',
    cover: require('assets/music/3.jpg'),
    src: require('assets/music/DontCoi-RPTOrijinnRonboogz-8345160.mp3'),
    artist: 'NF Real 3',
    isLiked: false,
  },
  {
    id: 4,
    name: 'KiaBongDangAi',
    cover: require('assets/music/4.jpg'),
    src: require('assets/music/KiaBongDangAi-Phao-8544353.mp3'),
    artist: 'NF Real 4',
    isLiked: false,
  },
  {
    id: 5,
    name: 'LuonYeuDoi',
    cover: require('assets/music/5.jpg'),
    src: require('assets/music/LuonYeuDoi-Den-8692742.mp3'),
    artist: 'NF Real 5',
    isLiked: true,
  },
  {
    id: 6,
    name: 'YeuAnhDiMeAnhBanBanhMi',
    cover: require('assets/music/6.jpg'),
    src: require('assets/music/YeuAnhDiMeAnhBanBanhMi-PhucDu-8698703.mp3'),
    artist: 'NF Real 6',
    isLiked: false,
  },
]

function Music(props) {
  const [selectedMusic, setSelectedMusic] = useState(listMusic[0]);
  
  const onSelectMusic = (selectedId) => { // nhận selectedId
    const selected = listMusic.find((item) => item.id === selectedId)
    setSelectedMusic(selected);
  }

  const onNextMusic = () => {
    const currentIndexMusic = listMusic.findIndex((item) => item.id === selectedMusic.id);
    if (currentIndexMusic === listMusic.length - 1) {
      setSelectedMusic(listMusic[0])
    } else {
      setSelectedMusic(listMusic[currentIndexMusic + 1])
    }
  }

  const onPrevMusic = () => {
    const currentIndexMusic = listMusic.findIndex((item) => item.id === selectedMusic.id);
    if (currentIndexMusic === 0) {
      setSelectedMusic(listMusic[listMusic.length - 1])
    } else {
      setSelectedMusic(listMusic[currentIndexMusic - 1])
    }
  }

  return (
    <div className="d-flex">
      <List listMusic={listMusic} onSelectMusic={onSelectMusic} selectedId={selectedMusic.id} />

      {/* <Play music={selectedMusic} /> */}
      <Play
        name={selectedMusic.name}
        artist={selectedMusic.artist}
        cover={selectedMusic.cover}
        id={selectedMusic.id}
        src={selectedMusic.src}
        onNextMusic={onNextMusic}
        onPrevMusic={onPrevMusic}
      />

    </div>
  );
}

export default Music;