import { useRef } from "react";
import user from "@/assets/images/users/default.png";
import customer from "@/assets/images/customers/p44.png";

const UserCard = () => {
  const card = useRef<HTMLDivElement>(null);

  const title = useRef<HTMLHeadingElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const purchase = useRef<HTMLButtonElement>(null);
  const description = useRef<HTMLHeadingElement>(null);
  const sizes = useRef<HTMLDivElement>(null);

  return (
    <div
      className="container"
      onMouseOver={(e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 35;
        if (null !== card.current) {
          card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
      }}
      onMouseEnter={() => {
        if (null !== card.current) {
          card.current.style.transition = "all 0.3s ease";
        }
        if (null !== title.current) {
          title.current.style.transform = "translateZ(25px)";
        }
        if (null !== image.current) {
          image.current.style.transform = "translateZ(50px) rotate(-1deg)";
        }
      }}
      onMouseLeave={() => {
        if (null !== card.current) {
          card.current.style.transition = "all 0.5s ease";
          card.current.style.transform = "rotateY(0deg) rotateX(0deg)";
        }
        if (null !== title.current) {
          title.current.style.transform = "translateZ(0px)";
        }
        if (null !== image.current) {
          image.current.style.transform = "translateZ(0px) rotate(0deg)";
        }
      }}
    >
      <div className="card" ref={card}>
        <div className="company">
          <h1>98</h1>
          <h3>FS</h3>
          <img alt="customer" src={customer} className="smooth" />
        </div>
        <div className="sneaker">
          <div className="circle"></div>
          <img src={user} alt="user" ref={image} className="smooth" />
        </div>
        <div className="info">
          <h1 className="title smooth" ref={title}>
            Nicolás Reyes
          </h1>
          <h3 ref={description}>PROJECT44 SENIOR DEVELOPER</h3>
          <div className="sizes">
            <button>95</button>
            <button>99</button>
            <button className="active">70</button>
            <button>99</button>
          </div>
          <div className="purchase">
            <button ref={purchase}>Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
