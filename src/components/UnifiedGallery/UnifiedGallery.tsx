'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { Heart, MessageSquare, Plus, X } from 'lucide-react';
import styles from './UnifiedGallery.module.css';

interface Comment {
  id: number;
  text: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

// Перевіряємо інтерфейс пропсів
interface UnifiedGalleryProps {
  images: GalleryImage[];
  albumId: string;
  initialLikes: number;
  // Уточнюємо типи для пропсів розміру
  aspectRatio?: string;
  imageHeight?: number | string;
  imageWidth?: number | string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const UnifiedGallery: React.FC<UnifiedGalleryProps> = ({
  images,
  albumId,
  initialLikes,
  // Значення за замовчуванням для нових пропсів
  aspectRatio = '16/9',
  imageHeight,
  imageWidth,
  objectFit = 'cover',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedLikes = localStorage.getItem(`likes_${albumId}`);
    const savedComments = localStorage.getItem(`comments_${albumId}`);
    if (savedLikes) setLikes(Number.parseInt(savedLikes, 10));
    if (savedComments) setComments(JSON.parse(savedComments));
  }, [albumId]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(`likes_${albumId}`, likes.toString());
      localStorage.setItem(`comments_${albumId}`, JSON.stringify(comments));
    }
  }, [likes, comments, albumId, isClient]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prevState) => !prevState);
  };

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments((prevComments) => [
        ...prevComments,
        { id: Date.now(), text: newComment.trim() },
      ]);
      setNewComment('');
    }
  };

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

  if (!isClient || images.length === 0) {
    return <div>Завантаження...</div>;
  }

  // Створюємо стилі для контейнера зображення
  const imageContainerStyle = {
    aspectRatio: isFullscreen ? 'auto' : aspectRatio,
    height: isFullscreen ? '100%' : imageHeight,
    width: isFullscreen ? '100%' : imageWidth,
  };

  return (
    <div className={styles.unifiedGallery}>
      <div
        className={`${styles.gallery} ${isFullscreen ? styles.fullscreen : ''}`}
      >
        {isFullscreen && (
          <button onClick={toggleFullscreen} className={styles.closeButton}>
            <X />
          </button>
        )}
        <div className={styles.mainContent}>
          <button onClick={handlePrev} className={styles.navButton}>
            {'<'}
          </button>
          <div className={styles.imageContainer} style={imageContainerStyle}>
            {!showComments ? (
              <div className={styles.imageWrapper}>
                <Image
                  src={images[currentImageIndex].src || '/placeholder.svg'}
                  alt={images[currentImageIndex].alt}
                  layout="fill"
                  objectFit={objectFit}
                  quality={75}
                  priority={true}
                />
              </div>
            ) : (
              <div className={styles.commentsSection}>
                <h3>Коментарі</h3>
                <ul>
                  {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                  ))}
                </ul>
                <form onSubmit={handleAddComment}>
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Додати коментар"
                  />
                  <button type="submit">Додати</button>
                </form>
              </div>
            )}
          </div>
          <button onClick={handleNext} className={styles.navButton}>
            {'>'}
          </button>
        </div>
        <div className={styles.footer}>
          <div className={styles.controlsLeft}>
            <button onClick={handleLike} className={styles.controlButton}>
              <Heart className={likes > initialLikes ? styles.liked : ''} />
              <span>{likes}</span>
            </button>
            <button onClick={toggleComments} className={styles.controlButton}>
              <MessageSquare />
            </button>
          </div>
          <div className={styles.controlsRight}>
            <div className={styles.dots}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
            {!isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className={styles.controlButton}
              >
                <Plus />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedGallery;
