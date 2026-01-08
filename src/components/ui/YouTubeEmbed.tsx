interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${videoId}`}
        className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
