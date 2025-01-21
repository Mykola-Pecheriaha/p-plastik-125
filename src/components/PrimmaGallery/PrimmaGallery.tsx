'use client';

import type React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './PrimmaGallery.module.css';

interface Comment {
  id: number;
  text: string;
}

interface PrimmaGalleryProps {
  images: string[];
  galleryId: string;
}

const PrimmaGallery: React.FC<PrimmaGalleryProps> = ({ images, galleryId }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState<number[]>([]);
  const [comments, setComments] = useState<Comment[][]>([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeImage, setActiveImage] = useState(currentImageIndex);

  useEffect(() => {
    setIsClient(true);
    const savedLikes = localStorage.getItem(`likes_${galleryId}`);
    const savedComments = localStorage.getItem(`comments_${galleryId}`);
    setLikes(
      savedLikes ? JSON.parse(savedLikes) : Array(images.length).fill(0)
    );
    setComments(
      savedComments ? JSON.parse(savedComments) : Array(images.length).fill([])
    );
  }, [galleryId, images.length]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(`likes_${galleryId}`, JSON.stringify(likes));
      localStorage.setItem(`comments_${galleryId}`, JSON.stringify(comments));
    }
  }, [likes, comments, galleryId, isClient]);

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

  const updateActiveImage = useCallback(() => {
    setActiveImage(currentImageIndex);
  }, [currentImageIndex]);

  useEffect(() => {
    const timer = setTimeout(updateActiveImage, 50);
    return () => clearTimeout(timer);
  }, [currentImageIndex, updateActiveImage]);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        console.log('All images preloaded successfully');
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, [images]);

  if (!isClient || images.length === 0) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className={styles.galleryWrapper}>
      <div
        className={`${styles.gallery} ${isFullscreen ? styles.fullscreen : ''}`}
      >
        {isFullscreen && (
          <button onClick={toggleFullscreen} className={styles.closeButton}>
            ✕
          </button>
        )}
        <div className={styles.mainContent}>
          <button onClick={handlePrev} className={styles.navButton}>
            {'<'}
          </button>
          <div className={styles.imageContainer}>
            {!showComments ? (
              <div className={styles.imageWrapper}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.imageItem} ${index === activeImage ? styles.active : ''}`}
                  >
                    <Image
                      src={image || '/placeholder.svg'}
                      alt={`Зображення галереї ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                      priority={index === currentImageIndex}
                    />
                  </div>
                ))}
              </div>
            ) : (
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
          <button onClick={handleNext} className={styles.navButton}>
            {'>'}
          </button>
        </div>
        <div className={styles.footer}>
          <div className={styles.likeSection}>
            <span className={styles.likes}>
              {likes[currentImageIndex] || 0}
            </span>
            <button onClick={handleLike} className={styles.likeButton}>
              ❤️
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
              💬
            </button>
            {!isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className={styles.fullscreenButton}
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimmaGallery;
