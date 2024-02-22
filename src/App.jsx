import React, { useEffect, useRef } from "react";
import styles from "./App.module.css";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/logo.jpeg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img11 from "./assets/11.jpg";
import gsap from "gsap";

const App = () => {
  // refs
  const loader_img_container = useRef(null);
  const navigation = useRef(null);
  const hero_text = useRef(null);
  const projects = useRef(null);

  // imgs
  const loader_imgs = [img1, img2, img3, img4, img5, img6, img7];
  const content_imgs = [img8, img9, img10, img11];

  // useEffect(() => {
  //   const ctx = gsap.context(() => {}, loader_img_container.current);

  //   const ctx2 = gsap.context(() => {
  //     gsap.set("p", { y: 25, opacity: 0 });
  //   }, navigation.current);

  //   const ctx3 = gsap.context(() => {
  //     gsap.set("h1", { y: 200 });
  //   }, hero_text.current);

  //   gsap.set(projects.current, { y: 200 });
  //   const ctx4 = gsap.context(() => {
  //     gsap.set("div", { y: 200 });
  //   }, projects.current);
  // }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo("h1", { y: 200 }, { y: 0, stagger: 0.1 });
    }, hero_text.current);
  }, []);

  return (
    <div className={styles.container}>
      {/* loader */}
      <div className={styles.loader}>
        <div ref={loader_img_container} className={styles.loader_img_container}>
          {loader_imgs.map((img) => {
            return (
              <div className={styles.img}>
                <img src={img} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
      {/* Hero */}
      <div className={styles.hero}>
        <div ref={navigation} className={styles.navigation}>
          <p>(MENU)</p>
          <p>OurRevolution</p>
          <p>(WORK*)</p>
        </div>
        <div ref={hero_text} className={styles.hero_text}>
          <div>
            <h1>WE BELIEVE</h1>
          </div>
          <div>
            <h1>BRANDS SHAPE THE</h1>
          </div>
          <div>
            <h1>FUTURE</h1>
          </div>
        </div>
        <div ref={projects} className={styles.projects}>
          {content_imgs.map((img) => {
            return (
              <div className={styles.item}>
                <img src={img} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
