'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import styles from './GalleryClinic.module.css';

interface Comment {
  id: number;
  text: string;
}

interface GalleryClinicProps {
  images: string[];
}

const GalleryClinic: React.FC<GalleryClinicProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLikes = localStorage.getItem('clinicLikes');
      setLikes(savedLikes ? parseInt(savedLikes, 10) : 0);
      const savedComments = localStorage.getItem('clinicComments');
      setComments(savedComments ? JSON.parse(savedComments) : []);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('clinicLikes', likes.toString());
      localStorage.setItem('clinicComments', JSON.stringify(comments));
    }
  }, [likes, comments]);

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

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now(),
        text: newComment.trim(),
      };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment('');
    }
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className={styles.galleryClinicWrapper}>
      <div
        className={`${styles.gallery} ${isFullscreen ? styles.fullscreen : ''}`}
      >
        {isFullscreen && (
          <button onClick={toggleFullscreen} className={styles.closeButton}>
            ✕
          </button>
        )}
        <div className={styles.mainClinicContent}>
          <button
            onClick={handlePrev}
            className={`${styles.navButton} ${styles.prevButton}`}
          >
            {'<'}
          </button>
          <div className={styles.imageClinicContainer}>
            {!showComments ? (
              <div className={styles.imageClinicWrapper}>
                <Image
                  src={images[currentImageIndex]}
                  alt={`Gallery Image ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className={`${styles.image} ${isFullscreen ? styles.fullscreenImage : ''}`}
                />
              </div>
            ) : (
              <div className={styles.commentsClinicSection}>
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
          <button
            onClick={handleNext}
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            {'>'}
          </button>
        </div>
        <div className={styles.footerClinic}>
          <div className={styles.likeSection}>
            <button onClick={handleLike} className={styles.likeButton}>
              ❤️ <span className={styles.likes}>{likes}</span>
            </button>
          </div>
          <div className={styles.footerClinicContent}>
            <div className={styles.dots}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${
                    index === currentImageIndex ? styles.active : ''
                  }`}
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

export default GalleryClinic;
