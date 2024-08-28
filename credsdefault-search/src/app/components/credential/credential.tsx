import React from 'react';
import { Credential as ICredential } from '@/app/interfaces/credential';
import styles from '@/app/components/credential/credential.module.scss';

interface CredentialProps {
  credential: ICredential;
}

const Credential: React.FC<CredentialProps> = ({ credential }) => {
  return (
    <div className={styles.credentialSection}>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Manufacturer:</strong> {credential.manufacturer}
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Model:</strong> {credential.model}
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Version:</strong> {credential.version}
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Role:</strong> {credential.role}
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Login:</strong> {credential.login}
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Password:</strong> {credential.password}
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Method:</strong> {credential.method}
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Source:</strong><a href={credential.source}>{credential.source}</a>
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Comment:</strong> {credential.comment}
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Port:</strong> {credential.port}
      </div>
      <div className={styles.credentialField}>
        <strong className={styles.credentialKey}>Address:</strong> {credential.address}
      </div>
    </div>
  );
};

export default Credential;