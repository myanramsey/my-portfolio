import React from 'react';

interface LeafletMapEmbedProps {
  url: string;
  title?: string;
}

export const LeafletMapEmbed: React.FC<LeafletMapEmbedProps> = ({ url, title = "Interactive Crime Map" }) => {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={url}
        title={title}
        className="w-full h-full border-0"
        allow="geolocation"
        loading="lazy"
      />
    </div>
  );
};

export default LeafletMapEmbed;
