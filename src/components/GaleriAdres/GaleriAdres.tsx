'use client';

import type React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageSquare,
  Maximize2,
} from 'lucide-react';
import styles from './GaleriAdres.module.css';

interface Comment {
  id: number;
  text: string;
}

interface GaleriAdresProps {
  images: string[];
  galleryId: string;
  aspectRatio?: string;
}

const GaleriAdres: React.FC<GaleriAdresProps> = ({
  images,
  galleryId,
  aspectRatio = '4/3',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState<number[]>([]);
  const [comments, setComments] = useState<Comment[][]>([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedLikes = localStorage.getItem(`likes_${galleryId}`);
      const savedComments = localStorage.getItem(`comments_${galleryId}`);
      setLikes(
        savedLikes ? JSON.parse(savedLikes) : Array(images.length).fill(0)
      );
      setComments(
        savedComments
          ? JSON.parse(savedComments)
          : Array(images.length).fill([])
      );
    }
  }, [galleryId, images.length, isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(`likes_${galleryId}`, JSON.stringify(likes));
      localStorage.setItem(`comments_${galleryId}`, JSON.stringify(comments));
    }
  }, [likes, comments, galleryId, isClient]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setImageError(false);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setImageError(false);
  }, [images.length]);

  const toggleFullscreen = () => {
    setIsFullscreen((prevState) => !prevState);
  };

  const handleLike = () => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[currentImageIndex] = (newLikes[currentImageIndex] || 0) + 1;
      return newLikes;
    });
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments((prevComments) => {
        const newComments = [...prevComments];
        newComments[currentImageIndex] = [
          ...(newComments[currentImageIndex] || []),
          { id: Date.now(), text: newComment.trim() },
        ];
        return newComments;
      });
      setNewComment('');
    }
  };

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

  if (!isClient || images.length === 0) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className={styles.galleryWrapper} style={{ aspectRatio }}>
      <div
        className={`${styles.gallery} ${isFullscreen ? styles.fullscreen : ''}`}
      >
        <div className={styles.mainContent}>
          <button
            onClick={handlePrev}
            className={`${styles.navButton} ${styles.prevButton}`}
          >
            <ChevronLeft />
          </button>
          <div className={styles.imageContainer}>
            {imageError ? (
              <div className={styles.errorMessage}>
                Помилка завантаження зображення
              </div>
            ) : (
              <Image
                src={images[currentImageIndex] || '/placeholder.svg'}
                alt={`Зображення галереї ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
                quality={75}
                priority={true}
                onError={() => setImageError(true)}
              />
            )}
          </div>
          <button
            onClick={handleNext}
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            <ChevronRight />
          </button>
        </div>
        <div className={styles.footer}>
          <div className={styles.likeSection}>
            <span className={styles.likes}>
              {likes[currentImageIndex] || 0}
            </span>
            <button onClick={handleLike} className={styles.likeButton}>
              <Heart />
            </button>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.dots}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
            <button onClick={toggleComments} className={styles.commentButton}>
              <MessageSquare />
            </button>
            <button
              onClick={toggleFullscreen}
              className={styles.fullscreenButton}
            >
              <Maximize2 />
            </button>
          </div>
        </div>
      </div>
      {showComments && (
        <div className={styles.commentsSection}>
          <h3>Коментарі</h3>
          <ul>
            {comments[currentImageIndex]?.map((comment) => (
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
  );
};

export default GaleriAdres;
