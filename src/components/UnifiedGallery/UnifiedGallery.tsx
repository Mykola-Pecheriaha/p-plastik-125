'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Heart, MessageSquare, Printer, Plus, X } from 'lucide-react';
import styles from './UnifiedGallery.module.css';

interface Comment {
  id: number;
  text: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface UnifiedGalleryProps {
  images: GalleryImage[];
  albumId: string;
  initialLikes: number;
}

const FullscreenImage: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return createPortal(
    <div className={styles.fullscreenOverlay} onClick={onClose}>
      <div
        className={styles.fullscreenContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Закрити повноекранний режим"
        >
          <X size={24} />
        </button>
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>,
    document.body
  );
};

const UnifiedGallery: React.FC<UnifiedGalleryProps> = ({
  images,
  albumId,
  initialLikes,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const storedLikes = localStorage.getItem(`albumLikes_${albumId}`);
    const storedComments = localStorage.getItem(`albumComments_${albumId}`);
    if (storedLikes) setLikes(parseInt(storedLikes, 10));
    if (storedComments) setComments(JSON.parse(storedComments));
  }, [albumId]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`albumLikes_${albumId}`, newLikes.toString());
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = { id: Date.now(), text: newComment.trim() };
      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);
      localStorage.setItem(
        `albumComments_${albumId}`,
        JSON.stringify(updatedComments)
      );
      setNewComment('');
    }
  };

  const toggleComments = () => setShowComments(!showComments);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Друк зображення</title>
          </head>
          <body>
            <img src="${images[currentImageIndex].src}" alt="${images[currentImageIndex].alt}" style="max-width: 100%;" />
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  if (!images || images.length === 0) {
    return <div className={styles.noImages}>Немає доступних зображень</div>;
  }

  return (
    <div className={styles.unifiedGallery}>
      <div className={styles.imageContainer}>
        <Image
          src={images[currentImageIndex].src || '/placeholder.svg'}
          alt={images[currentImageIndex].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.controls}>
        <button
          onClick={handleLike}
          className={styles.controlButton}
          aria-label="Лайк"
        >
          <Heart className={likes > initialLikes ? styles.liked : ''} />
          <span>{likes}</span>
        </button>
        <button
          onClick={toggleComments}
          className={styles.controlButton}
          aria-label="Коментарі"
        >
          <MessageSquare />
        </button>
        <button
          onClick={handlePrint}
          className={styles.controlButton}
          aria-label="Друк"
        >
          <Printer />
        </button>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <button
          onClick={toggleFullscreen}
          className={styles.controlButton}
          aria-label="На весь екран"
        >
          <Plus />
        </button>
      </div>
      {showComments && (
        <div className={styles.commentsSection}>
          <h3>Коментарі</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
          <form onSubmit={handleCommentSubmit}>
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
      {isFullscreen && (
        <FullscreenImage
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          onClose={toggleFullscreen}
        />
      )}
    </div>
  );
};

export default UnifiedGallery;
