import React from "react";
import { motion } from "framer-motion";
import InitialTransition from "../utils/InitialTransition";

const Contact = () => {
  return (
    <InitialTransition>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <form>
          <div className="mb-3">
            <label className="form-label">メールアドレス</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">お名前</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">お問い合わせ内容</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          reiciendis tenetur magni consectetur autem ipsum debitis, ratione iure
          maiores eos quam nisi architecto quisquam ex et exercitationem cumque
          ad obcaecati natus? Officiis illo inventore minima voluptatibus,
          mollitia maiores, quia molestias accusamus, amet ipsum eaque iste at
          deleniti error? Ad tempora vitae eaque id qui doloribus similique
          doloremque provident minima ratione rem commodi totam aliquam
          exercitationem aliquid soluta assumenda laborum, quasi perferendis
          debitis eum numquam. Nam id eveniet aliquid beatae, voluptatem eius
          blanditiis sequi tenetur quasi voluptate ea expedita ratione atque quo
          repellendus molestias, amet, iusto excepturi voluptatibus aut
          adipisci? Incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nemo
          ea officiis natus error nesciunt, eos veritatis, deleniti inventore
          corrupti dolorem deserunt, pariatur quo sint ab. Velit aperiam dolor
          obcaecati doloremque illum cum, recusandae nihil itaque repudiandae
          atque eaque nulla aliquam sit ratione corrupti dolorum unde harum.
          Veritatis animi atque quam, deserunt numquam totam explicabo
          exercitationem possimus hic magni inventore, autem voluptas vero
          quasi, eos neque ab sequi sint sed illo est? Voluptas, doloribus?
          Provident nam quam optio? Excepturi fugiat facilis dolorum quas unde?
          Adipisci nisi maiores sequi beatae, excepturi, incidunt aliquid
          molestiae, accusantium perferendis quibusdam omnis cumque suscipit.
          Earum.
        </p>
      </motion.div>
    </InitialTransition>
  );
};

export default Contact;
