import { Chip, Tooltip } from "@mui/material";
import React from "react";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div>
                <Chip />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </Tooltip>
        );
      }

      case "songs": {
        const {image, likes, title} = data
        return (
            <div>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img src={image} alt="songs" />
                    <div className={styles.banner}>
                        <Chip 
                            label={`${likes} Likes` }
                            size="small"
                            className={styles.chip}
                        />
                    </div>
                </div>
                {/* <div>
                    <Chip />
                </div> */}
            </div>
                <div className={styles.titleWrapper}>
                    <p>{title}</p>
                </div>
            </div>
            
        )
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;
