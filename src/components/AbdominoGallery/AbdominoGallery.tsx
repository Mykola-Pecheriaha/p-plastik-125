"use client"

import type React from "react"
import PrimmaGallery from "../PrimmaGallery/PrimmaGallery"
import styles from "./AbdominoGallery.module.css"

interface AbdominoGalleryProps {
  images: string[]
}

const AbdominoGallery: React.FC<AbdominoGalleryProps> = ({ images }) => {
  return (
    <div className={styles.abdominoGalleryWrapper}>
      <PrimmaGallery images={images} galleryId="abdomino-gallery" />
    </div>
  )
}

export default AbdominoGallery

