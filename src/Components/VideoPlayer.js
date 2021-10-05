import { Video } from '@react95/core';

const RickRoll = () => {
	return (
		<div>
		<Video
			width={320}
			src='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
			style={{ marginBottom: 4 }}
		/>
		</div>
	)
}

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
