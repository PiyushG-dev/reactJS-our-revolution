import React, { useEffect, useRef } from "react";
import styles from "./App.module.css";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/logo.jpeg";
import img5 from "./assets/4.jpeg";
import img6 from "./assets/5.jpeg";
import img7 from "./assets/6.jpeg";
import img8 from "./assets/7.jpeg";
import img9 from "./assets/8.jpeg";
import img10 from "./assets/9.jpeg";
import img11 from "./assets/10.jpeg";
import gsap from "gsap";

const App = () => {
  // refs
  const loader = useRef(null);
  const loader_img_container = useRef(null);
  const navigation = useRef(null);
  const hero_text = useRef(null);
  const projects = useRef(null);

  // imgs
  const loader_imgs = [img1, img2, img3, img4, img5, img6, img7];
  const content_imgs = [img8, img9, img10, img11];

  useEffect(() => {
    // initial positions
    gsap.set(loader_img_container.current, { x: 500 });

    const ctx = gsap.context(() => {
      gsap.set("div", { y: 500 });
    }, loader_img_container.current);

    const ctx2 = gsap.context(() => {
      gsap.set("p", { y: 25, opacity: 0 });
    }, navigation.current);

    const ctx3 = gsap.context(() => {
      gsap.set("h1", { y: 200 });
    }, hero_text.current);

    gsap.set(projects.current, { y: 200 });
    const ctx4 = gsap.context(() => {
      gsap.set("div", { y: 200 });
    }, projects.current);

    // animation timeline

    const tl = gsap.timeline({ delay: 1 });

    const ctx5 = gsap.context(() => {
      tl.to("div", {
        y: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
      });
    }, loader_img_container.current);

    tl.to(
      loader_img_container.current,
      { x: 0, duration: 3, ease: "power3.inOut" },
      "-=2.5"
    );

    const ctx6 = gsap.context(() => {
      tl.to(
        "div:not(div:nth-child(4)",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          ease: "power3.inOut",
        },
        "-=1"
      );
    }, loader_img_container.current);

    tl.to(
      loader.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    );

    const ctx7 = gsap.context(() => {
      tl.to(
        "p",
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.inOut" },
        "-=0.5"
      );
    }, navigation.current);

    const ctx8 = gsap.context(() => {
      tl.to(
        "h1",
        { y: 0, duration: 1, stagger: 0.1, ease: "power3.inOut" },
        "-=0.5"
      );
    }, hero_text.current);

    tl.to(projects.current, { y: 0 }, "-=0.5");
    const ctx9 = gsap.context(() => {
      gsap.to(
        "div",
        { y: 0, duration: 1, stagger: 0.1, ease: "power3.inOut" },
        "-=0.5"
      );
    }, projects.current);
  }, []);

  return (
    <div className={styles.container}>
      {/* loader */}
      <div ref={loader} className={styles.loader}>
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
