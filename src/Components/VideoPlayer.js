import { Video } from '@react95/core';

const VideoPlayer = () => {
  console.log("CALLED");
	var vid = 'https://youtu.be/dQw4w9WgXcQ';
  return (
		<Video
			width={320}
			src={vid}
			style={{ marginBottom: 4 }}
		/>
  )
}

export default VideoPlayer;
