import React from "react";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";

import { motion } from "framer-motion";
import InitialTransition from "../utils/InitialTransition";

/* https://jfelix.info/blog/page-transitions-in-react */

const Home = () => {
  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const title = {
    initial: { x: -120, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const inputs = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.section exit={{ opacity: 0 }}>
      <InitialTransition>
        <motion.div
          className="container text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          // initial={{ width: 0 }}
          // animate={{ width: "100%" }}
          // exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
          <h1>Shin Code</h1>

          <img src={profileImage} className="profileImage" />

          <p>
            ShinCodeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。主にHTML/CSS/Javascript/Reactメインに取り扱っています。趣味は個人でプログラミングの撮影を行うことです。
            ShinCodeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。主にHTML/CSS/Javascript/Reactメインに取り扱っています。趣味は個人でプログラミングの撮影を行うことです。
          </p>

          <section className="page-section" id="services">
            <div className="service">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
                <h3 className="section-subheading text-muted mb-5">
                  私が作った作品一覧です
                </h3>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="my-3">ECサイト</h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="my-3">レスポンシブサイト</h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="my-3">ウェブセキュリティ</h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="skill">
            <div className="text-center">
              <h1 className="title">スキル</h1>
              <div className="row text-center">
                <div className="col-md-4 services">
                  <img src={reactImage} />
                  <h4>React</h4>
                  <p>Reactがつかえます</p>
                </div>
                <div className="col-md-4 services">
                  <img src={jsImage} />
                  <h4>HTML/CSS</h4>
                  <p>HTML/CSSがつかえます</p>
                </div>
                <div className="col-md-4 services">
                  <img src={firebaseImage} />
                  <h4>Firebase</h4>
                  <p>Firebaseがつかえます</p>
                </div>
              </div>
              <button type="button" className="btn btn-primary">
                スキル一覧
              </button>
            </div>
          </section>
        </motion.div>
      </InitialTransition>
    </motion.section>
  );
};

export default Home;
