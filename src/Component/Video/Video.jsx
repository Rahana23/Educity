import React, { useRef } from "react";
import "./Video.css";
import video_player from "../../assets/video-player.mp4";

const Video = ({ showVideo, setShowVideo }) => {
    const videoRef = useRef(null);

    const closeVideo = (e) => {
        if(e.target === videoRef.current) {
            setShowVideo(false);
        }
    };

    return (
        <div className={`video ${showVideo ? "" : "hide"}`} onClick={closeVideo}>
            <video ref={videoRef} src={video_player} autoPlay muted controls></video>
        </div>
    );
};

export default Video;

