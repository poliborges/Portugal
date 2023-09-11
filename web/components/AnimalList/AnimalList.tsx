import React from 'react';
import styles from './AnimalList.module.css'

export const AnimalList = () => {
    return (
        <div className={styles.list}>
            <AnimalListItem />
            <AnimalListItem />
            <AnimalListItem />

        </div>

    )

}
const AnimalListItem = () => {
    return (
        <div className={styles.card}>

            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gato_%282%29_REFON.jpg/1200px-Gato_%282%29_REFON.jpg" alt="" />

                
            </div>


        </div>


    )
}
