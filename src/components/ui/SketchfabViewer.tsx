interface SketchfabViewerProps {
  modelId: string;
  title: string;
  autorotate?: boolean;
  transparent?: boolean;
}

export const SketchfabViewer = ({ 
  modelId, 
  title, 
  autorotate = true,
  transparent = false 
}: SketchfabViewerProps) => {
  const params = new URLSearchParams({
    autostart: '1',
    autospin: autorotate ? '0.2' : '0',
    ui_theme: 'dark',
    transparent: transparent ? '1' : '0'
  });

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        title={title}
        src={`https://sketchfab.com/models/${modelId}/embed?${params}`}
        className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
      />
    </div>
  );
};
