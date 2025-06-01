// src/pages/pet/edit-pet/index.tsx

import React, { Suspense } from 'react';
import EditPet from '../../../components/EditPet';
import styles from './EditPetPage.module.css';

const EditPetPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Suspense fallback={<div className={styles.loading}>Carregando...</div>}>
        <EditPet />
      </Suspense>
    </div>
  );
};

export default EditPetPage;
