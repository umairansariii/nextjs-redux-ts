"use client";

import { useState } from "react";
import { ProductGalleryProps } from "./ProductGalleryTypes";
import { MouseEventDiv } from "@/app/types/events";
import ChevronDownIcon from "@/public/icons/ChevronDownIcon";
import ChevronUpIcon from "@/public/icons/ChevronUpIcon";
import styles from "./ProductGallery.module.css";

const MAX_TILES = 3;

function ProductGallery({ images }: ProductGalleryProps) {
  const [previewIndex, setPreviewIndex] = useState(0);
  const [tileIndex, setTileIndex] = useState({
    start: 0,
    end: MAX_TILES,
  });

  const handleTileBack = (event: MouseEventDiv) => {
    event.stopPropagation();

    if (tileIndex.start > 0) {
      setTileIndex({
        start: tileIndex.start - 1,
        end: tileIndex.end - 1,
      });
    }
  };

  const handleTileNext = (event: MouseEventDiv) => {
    event.stopPropagation();

    if (images.length > tileIndex.end) {
      setTileIndex({
        start: tileIndex.start + 1,
        end: tileIndex.end + 1,
      });
    }
  };

  const handleUpdatePreview = (index: number) => {
    setPreviewIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesGroup}>
        {images.slice(tileIndex.start, tileIndex.end).map((image, index) => (
          <div
            className={styles.imageTile}
            key={index}
            onClick={() => handleUpdatePreview(index + tileIndex.start)}
          >
            <img src={image} />

            {index === 0 && tileIndex.start > 0 && (
              <div className={styles.scrollButton} onClick={handleTileBack}>
                <ChevronUpIcon />
              </div>
            )}

            {index === MAX_TILES - 1 && images.length > tileIndex.end && (
              <div className={styles.scrollButton} onClick={handleTileNext}>
                <ChevronDownIcon />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imagePreview}>
          <img src={images[previewIndex]} />
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
