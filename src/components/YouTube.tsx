import { Suspense } from 'react';

type YouTubeProps = {
  id: string;
};

const YouTube: React.FC<YouTubeProps> = ({ id }) => {
  return (
    <Suspense fallback={'Loading video...'}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ width: '100%', height: '100%', aspectRatio: '560/315' }}
      />
    </Suspense>
  );
};

export default YouTube;
