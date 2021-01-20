import card from "@/assets/images/cards/card_legend_default.png";

const WIDTH = 200;
const HEIGHT = 300;

const UserCard = () => {
  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: "red",
        position: "relative",
      }}
    >
      <p
        style={{
          position: "absolute",
          color: "white",
          fontWeight: "bold",
          top: HEIGHT * 0.1,
          left: WIDTH * 0.22,
          fontSize: "1.3em",
        }}
      >
        88
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
