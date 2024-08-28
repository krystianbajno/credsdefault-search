'use client';

import React from 'react';
import styles from "@/app/components/controls/download-csv.module.scss";

interface DownloadCsvProps {
  onPress: () => void;
}

const DownloadCsv: React.FC<DownloadCsvProps> = ({ onPress }) => {
  return (
    <button
      className={styles.downloadCsv}
      onClick={onPress}
      aria-label="Download filtered CSV"
      title="Download filtered CSV"
    >
      <img
        src={"/icons/download-csv.svg"}
        alt={"Download filtered CSV"}
        className={styles.icon}
      />
    </button>
  );
};

export default DownloadCsv;
