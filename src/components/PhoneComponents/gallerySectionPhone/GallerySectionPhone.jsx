import React from "react";
import Carousel from "../../Gallery/Carousel/Carousel";
import styles from "./GallerySectionPhone.module.sass";

function GallerySectionPhone() {
  return (
    <Carousel sectionPhone={true}>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider1}>1rr</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider2}>2</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>4</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>5</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>6</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>7</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>8</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>9</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>10</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>11</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>12</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>13</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>14</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>15</div>
      <div className={styles.galleryPhotoSlider + " " + styles.galleryPhotoSlider3}>16</div>
    </Carousel>
  );
}

export default GallerySectionPhone;
