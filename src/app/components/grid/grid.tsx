import React, { Suspense } from 'react';
import { Credential as ICredential } from '@/app/interfaces/credential';
import Credential from '@/app/components/credential/credential';
import styles from '@/app/components/grid/grid.module.scss';

interface GridProps {
  credentials: ICredential[];
}

const Grid: React.FC<GridProps> = ({ credentials }) => (
  <div className={styles.gridContainer}>
    {credentials.map((credential, index ) => (
      <div 
        key={`${credential.login}-${credential.password}-${credential.manufacturer}-${index}`} 
        className={styles.credentialItem}
      >
        <Suspense fallback={<div>Loading...</div>}>
            <Credential credential={credential} />
        </Suspense>
      </div>
    ))}
  </div>
);

export default Grid;
