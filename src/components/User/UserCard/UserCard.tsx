import card from "@/assets/images/cards/card_legend_default.png";

const WIDTH = 300;
const HEIGHT = WIDTH + WIDTH / 2;

const UserCard = () => {
  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        position: "relative",
      }}
    >
      <p
        style={{
          position: "absolute",
          color: "white",
          fontWeight: "bold",
          top: HEIGHT * 0.1,
          left: WIDTH * 0.24,
          fontSize: "1.3em",
        }}
      >
        88
      </p>
      <p
        style={{
          position: "absolute",
          color: "white",
          fontWeight: "bold",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: WIDTH / 18,
        }}
      >
        Nicolás Reyes
      </p>
      <img
        src={card}
        alt="this is car"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default UserCard;
