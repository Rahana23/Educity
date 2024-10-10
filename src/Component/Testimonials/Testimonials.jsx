import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if (tx < 0) {
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Rahana Suleiman</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Educity provided me with so much more than just an education.
                The supportive faculty and vibrant campus community truly shaped
                me into the person I am today. I gained not only knowledge in my
                field but also confidence, lifelong friendships, and skills that
                prepared me for my career.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Attending this university was one of the best decisions I’ve
                made. The diverse range of academic programs allowed me to
                explore my interests, and the resources for career development
                were invaluable in helping me land a job right after graduation.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Miranda Bailey</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                I loved the small class sizes and personalized attention from
                professors. They truly care about your success, and the hands-on
                learning opportunities helped me apply what I was learning in
                real-world scenarios.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Derek Sheperd</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Educity’s emphasis on global experiences allowed me to
                study abroad, which was life-changing. The connections I made
                with peers and professors both on campus and overseas are
                something I will cherish forever.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
