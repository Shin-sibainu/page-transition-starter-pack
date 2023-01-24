import React from "react";
import { motion } from "framer-motion";
import InitialTransition from "../utils/InitialTransition";

const Blog = () => {
  return (
    <InitialTransition>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        // initial={{ width: 0 }}
        // animate={{ width: "100%" }}
        // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <h1>ブログ</h1>

        <div className="m-auto text-center mb-5">
          <img src="./vite.svg" className="w-20 h-auto" />
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          sint autem doloribus iste ipsam sapiente qui nam? Totam corporis
          veniam unde praesentium sit officia doloremque rem nulla? Ea nobis,
          alias reprehenderit debitis nostrum illo facere numquam voluptates,
          soluta aliquam incidunt neque voluptatum nisi nesciunt. Laborum eos
          officia aspernatur aliquam aperiam.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quibusdam veniam error omnis neque ipsam sunt. Illum aliquid cum
          ducimus magnam quaerat architecto pariatur quis reprehenderit natus
          impedit deleniti consectetur temporibus accusantium nobis modi unde
          eum, mollitia veritatis. Rem sapiente est saepe ex, cum voluptatibus
          fugiat omnis nostrum! Impedit quaerat vero voluptates quos itaque
          aliquid ea modi incidunt veritatis, rem assumenda vitae ex enim quas
          architecto sed cupiditate quae eius mollitia delectus. Maiores
          consequuntur optio ut excepturi aspernatur dolor. Quis suscipit
          laborum quo minima at expedita praesentium maxime, sequi dignissimos
          aliquid nemo, eaque delectus nobis temporibus quibusdam magnam iure
          numquam.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quibusdam veniam error omnis neque ipsam sunt. Illum aliquid cum
          ducimus magnam quaerat architecto pariatur quis reprehenderit natus
          impedit deleniti consectetur temporibus accusantium nobis modi unde
          eum, mollitia veritatis. Rem sapiente est saepe ex, cum voluptatibus
          fugiat omnis nostrum! Impedit quaerat vero voluptates quos itaque
          aliquid ea modi incidunt veritatis, rem assumenda vitae ex enim quas
          architecto sed cupiditate quae eius mollitia delectus. Maiores
          consequuntur optio ut excepturi aspernatur dolor. Quis suscipit
          laborum quo minima at expedita praesentium maxime, sequi dignissimos
          aliquid nemo, eaque delectus nobis temporibus quibusdam magnam iure
          numquam.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quibusdam veniam error omnis neque ipsam sunt. Illum aliquid cum
          ducimus magnam quaerat architecto pariatur quis reprehenderit natus
          impedit deleniti consectetur temporibus accusantium nobis modi unde
          eum, mollitia veritatis. Rem sapiente est saepe ex, cum voluptatibus
          fugiat omnis nostrum! Impedit quaerat vero voluptates quos itaque
          aliquid ea modi incidunt veritatis, rem assumenda vitae ex enim quas
          architecto sed cupiditate quae eius mollitia delectus. Maiores
          consequuntur optio ut excepturi aspernatur dolor. Quis suscipit
          laborum quo minima at expedita praesentium maxime, sequi dignissimos
          aliquid nemo, eaque delectus nobis temporibus quibusdam magnam iure
          numquam.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quibusdam veniam error omnis neque ipsam sunt. Illum aliquid cum
          ducimus magnam quaerat architecto pariatur quis reprehenderit natus
          impedit deleniti consectetur temporibus accusantium nobis modi unde
          eum, mollitia veritatis. Rem sapiente est saepe ex, cum voluptatibus
          fugiat omnis nostrum! Impedit quaerat vero voluptates quos itaque
          aliquid ea modi incidunt veritatis, rem assumenda vitae ex enim quas
          architecto sed cupiditate quae eius mollitia delectus. Maiores
          consequuntur optio ut excepturi aspernatur dolor. Quis suscipit
          laborum quo minima at expedita praesentium maxime, sequi dignissimos
          aliquid nemo, eaque delectus nobis temporibus quibusdam magnam iure
          numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quibusdam veniam error omnis neque ipsam sunt. Illum aliquid cum
          ducimus magnam quaerat architecto pariatur quis reprehenderit natus
          impedit deleniti consectetur temporibus accusantium nobis modi unde
          eum, mollitia veritatis. Rem sapiente est saepe ex, cum voluptatibus
          fugiat omnis nostrum! Impedit quaerat vero voluptates quos itaque
          aliquid ea modi incidunt veritatis, rem assumenda vitae ex enim quas
          architecto sed cupiditate quae eius mollitia delectus. Maiores
          consequuntur optio ut excepturi aspernatur dolor. Quis suscipit
          laborum quo minima at expedita praesentium maxime, sequi dignissimos
          aliquid nemo, eaque delectus nobis temporibus quibusdam magnam iure
          numquam.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quibusdam veniam error omnis neque ipsam sunt. Illum aliquid cum
          ducimus magnam quaerat architecto pariatur quis reprehenderit natus
          impedit deleniti consectetur temporibus accusantium nobis modi unde
          eum, mollitia veritatis. Rem sapiente est saepe ex, cum voluptatibus
          fugiat omnis nostrum! Impedit quaerat vero voluptates quos itaque
          aliquid ea modi incidunt veritatis, rem assumenda vitae ex enim quas
          architecto sed cupiditate quae eius mollitia delectus. Maiores
          consequuntur optio ut excepturi aspernatur dolor. Quis suscipit
          laborum quo minima at expedita praesentium maxime, sequi dignissimos
          aliquid nemo, eaque delectus nobis temporibus quibusdam magnam iure
          numquam.
        </p>
      </motion.div>
    </InitialTransition>
  );
};

export default Blog;
