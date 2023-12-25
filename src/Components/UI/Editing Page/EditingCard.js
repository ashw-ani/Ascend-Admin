import React from 'react'
import styles from './EditingCard.module.css'

function EditingCard(props) {
  return (
    <div className={styles.cardBlurWrapper}>
      <div className={styles.editingCard}>
        <div className={styles.cardHeader}>
            <div className={styles.cardHeaderHeading}>{props.heading}</div>
            <div className={styles.cardHeaderCancel}>
                <button>X</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditingCard
