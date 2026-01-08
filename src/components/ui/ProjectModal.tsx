import { useEffect, useState } from 'react';
import { X, Calendar, Tag, Github, ArrowUpRight, Terminal, Layers, Box, Play, Map } from 'lucide-react';
import { SketchfabViewer } from '../ui/SketchfabViewer'; 
import { YouTubeEmbed } from '../ui/YouTubeEmbed';
import { LeafletMapEmbed } from '../ui/LeafletMapEmbed';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  // Check if image is a URL or gradient class
  const isImageUrl = project.image.startsWith('http') || project.image.startsWith('/');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8">
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors z-10"
          >
            <X size={24} />
          </button>
          <img 
            src={expandedImage} 
            alt="Expanded view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <div className="relative w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] md:h-[90vh] bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-2xl overflow-y-auto flex flex-col transition-colors duration-500">
        
        {/* Modal Header Image - Support both URL and Gradient */}
        <div className={`w-full h-48 sm:h-64 md:h-80 lg:h-96 shrink-0 relative ${
          isImageUrl ? '' : `bg-gradient-to-br ${project.image}`
        }`}>
          {isImageUrl && (
            <>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </>
          )}
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors z-10"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-white/80 font-mono text-xs sm:text-sm">
              <span className="flex items-center gap-1 sm:gap-2"><Calendar size={14} className="sm:w-4 sm:h-4"/> {project.year}</span>
              <span className="flex items-center gap-1 sm:gap-2"><Tag size={14} className="sm:w-4 sm:h-4"/> {project.category}</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* Hero Description - Full Width */}
          <div className="max-w-full">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-zinc-800 dark:text-zinc-300 border-l-4 border-purple-500 pl-4 sm:pl-6">
              {project.fullDescription}
            </p>
          </div>

          {/* ==================== 3D VIEWER SECTION ==================== */}
          {project.sketchfabId && (
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <div className="h-px w-8 sm:w-12 bg-zinc-300 dark:bg-zinc-700"></div>
                <Box size={14} />
                Interactive 3D Model
              </h3>
              
              <div className="bg-zinc-100 dark:bg-zinc-950/50 p-3 sm:p-4 md:p-6 rounded-xl border border-zinc-200 dark:border-white/10">
                <SketchfabViewer 
                  modelId={project.sketchfabId}
                  title={project.title}
                  autorotate={true}
                  transparent={false}
                />
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-4 text-center font-mono">
                  ↻ Click and drag to rotate • Scroll to zoom • Click fullscreen icon for VR
                </p>
              </div>
            </div>
          )}

          {/* ==================== YOUTUBE VIDEOS SECTION ==================== */}
          {project.youtubeVideos && project.youtubeVideos.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <div className="h-px w-8 sm:w-12 bg-zinc-300 dark:bg-zinc-700"></div>
                <Play size={14} />
                Animation Demos
              </h3>
              
              {/* Responsive grid: 1 col mobile, 2 cols tablet+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {project.youtubeVideos.map((video, idx) => (
                  <div key={idx} className="bg-zinc-100 dark:bg-zinc-950/50 p-3 sm:p-4 rounded-xl border border-zinc-200 dark:border-white/10">
                    <YouTubeEmbed 
                      videoId={video.id}
                      title={video.title}
                    />
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-3 font-medium">
                      {video.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* ==================== LEAFLET MAP SECTION ==================== */}
          {project.leafletMapUrl && (
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <div className="h-px w-8 sm:w-12 bg-zinc-300 dark:bg-zinc-700"></div>
                <Map size={14} />
                Interactive Map
              </h3>
              
              <div className="bg-zinc-100 dark:bg-zinc-950/50 p-3 sm:p-4 md:p-6 rounded-xl border border-zinc-200 dark:border-white/10">
                <LeafletMapEmbed 
                  url={project.leafletMapUrl}
                  title={`${project.title} - Interactive Map`}
                />
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-4 text-center font-mono">
                  ↻ Click and drag to pan • Scroll to zoom • Click clusters to expand
                </p>
              </div>
            </div>
          )}

          {/* Challenge & Solution - Prominent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 p-6 sm:p-8 rounded-xl border-2 border-purple-200 dark:border-purple-800/50 shadow-lg">
              <h3 className="font-bold text-lg sm:text-xl mb-4 text-zinc-900 dark:text-white flex items-center gap-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Terminal size={18} className="sm:w-5 sm:h-5 text-white"/>
                </div>
                The Challenge
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{project.challenge}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 p-6 sm:p-8 rounded-xl border-2 border-blue-200 dark:border-blue-800/50 shadow-lg">
              <h3 className="font-bold text-lg sm:text-xl mb-4 text-zinc-900 dark:text-white flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Layers size={18} className="sm:w-5 sm:h-5 text-white"/>
                </div>
                The Solution
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 border-t border-b border-zinc-200 dark:border-zinc-800 py-6 sm:py-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <div className="h-px w-6 sm:w-8 bg-zinc-300 dark:bg-zinc-700"></div>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-zinc-200 dark:bg-white/5 text-zinc-800 dark:text-zinc-300 text-xs font-mono rounded-full border border-zinc-300 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {(project.githubUrl || project.demoUrl) && (
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                  <div className="h-px w-6 sm:w-8 bg-zinc-300 dark:bg-zinc-700"></div>
                  Links
                </h3>
                <div className="flex flex-col gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group text-sm sm:text-base"
                    >
                      <Github size={16} className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" /> 
                      <span className="group-hover:underline">View Source Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group text-sm sm:text-base"
                    >
                      <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" /> 
                      <span className="group-hover:underline">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* The Process */}
          <div className="space-y-10 text-zinc-800 dark:text-zinc-300">
            {project.process && (
              <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6 flex items-center gap-2">
                  <div className="h-px w-8 sm:w-12 bg-zinc-300 dark:bg-zinc-700"></div>
                  The Process
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  {project.process.map((step, idx) => {
                    const isString = typeof step === 'string';
                    const stepText = isString ? step : step.text;
                    const stepImages = isString ? null : step.images;
                    
                    return (
                      <div key={idx} className="space-y-4">
                        <div className="flex gap-3 sm:gap-4 group">
                          <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-mono text-xs sm:text-sm font-bold group-hover:scale-110 transition-transform">
                            {idx + 1}
                          </div>
                          <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 pt-1">
                            {stepText}
                          </p>
                        </div>
                        
                        {stepImages && stepImages.length > 0 && (
                          <div className="ml-10 sm:ml-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {stepImages.map((imgPath, imgIdx) => (
                              <div 
                                key={imgIdx}
                                className="aspect-video bg-zinc-200 dark:bg-white/5 rounded-lg overflow-hidden border border-zinc-300 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-600 transition-all cursor-zoom-in group"
                                onClick={() => setExpandedImage(imgPath)}
                              >
                                <img 
                                  src={imgPath}
                                  alt={`Step ${idx + 1} - Image ${imgIdx + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                  <div className="h-px w-8 sm:w-12 bg-zinc-300 dark:bg-zinc-700"></div>
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {project.gallery.map((imgPath, idx) => (
                    <div 
                      key={idx} 
                      className="aspect-video bg-zinc-200 dark:bg-white/5 rounded-lg overflow-hidden border border-zinc-300 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-600 transition-all cursor-zoom-in group"
                      onClick={() => setExpandedImage(imgPath)}
                    >
                      <img 
                        src={imgPath} 
                        alt={`${project.title} - Image ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
