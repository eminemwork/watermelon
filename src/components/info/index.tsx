import React, { useState } from "react";
import YouTube from "react-youtube";

export default function Info() {
  let first: string = "bzdT7-1No9U";
  let second: string = "r1uhJz9SfrA";
  let third: string = "Dj50ieolA5c";
  let playlist = [first, second, third];
  const [videoIdx, setVideoIdx] = useState(0);

  function ready(e: any) {
    e.target.playVideo();
    console.log(e.target.getPlaylistIndex());
  }
  function stateChange(e: any) {
    if (e.target.getPlayerState() === 0) {
      e.target.loadVideoById(playlist[videoIdx + 1], 0, "medium");
      setVideoIdx(videoIdx + 1);
    }
  }
  return (
    <>
      <YouTube
        videoId={playlist[0]}
        onReady={ready}
        onStateChange={stateChange}
      ></YouTube>
    </>
  );
}
