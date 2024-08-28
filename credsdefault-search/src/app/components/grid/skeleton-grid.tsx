import React from 'react';
import styles from '@/app/components/grid/skeleton-grid.module.scss';

const Skeleton: React.FC = () => {
    return (
        <div className={styles.credentialSection}>
            {new Array(11).fill(null).map((_, index) => (
                <div className={styles.credentialField} key={index}>
                    <div className={styles.credentialKey}></div>
                    <div className={styles.credentialValue}></div> 
                </div>
            ))}
        </div>
    );
};

interface GridProps {
    dummy: number;
}

const SkeletonGrid: React.FC<GridProps> = ({ dummy }) => (
    <div className={styles.gridContainer}>
        {new Array(dummy).fill(null).map((_, index) => (
            <div className={styles.credentialItem} key={index}>
                <Skeleton />
            </div>
        ))}
    </div>
);

export default SkeletonGrid;
