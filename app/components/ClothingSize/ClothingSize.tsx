"use client";

import { useState, useEffect } from "react";
import { ClothingSizeProps } from "./ClothingSizeTypes";
import styles from "./ClothingSize.module.css";

const SIZES = ["XS", "S", "M", "L", "XL"] as const;

function ClothingSize({
  defaultValue = "M",
  disabled = [],
}: ClothingSizeProps) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // Check: all disabled
    if (disabled.length === SIZES.length) {
      return;
    }

    let defaultIndex = SIZES.indexOf(defaultValue);

    // Check: next available
    while (true) {
      if (!disabled.includes(SIZES[defaultIndex])) {
        setSelected(SIZES[defaultIndex]);
        break;
      }
      defaultIndex = (defaultIndex + 1) % SIZES.length;
    }
  }, [defaultValue]);

  const handleUpdateSelection = (size: (typeof SIZES)[number]) => {
    if (!disabled.includes(size)) {
      setSelected(size);
    }
  };

  return (
    <div className={styles.container}>
      {SIZES.map((size) => (
        <div
          key={size}
          className={styles.sizeTile}
          data-active={size === selected}
          data-disabled={disabled.includes(size)}
          onClick={() => handleUpdateSelection(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
}

export default ClothingSize;
