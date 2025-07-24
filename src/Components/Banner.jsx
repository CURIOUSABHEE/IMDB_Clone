import marvelsImg from "../assets/marvels.jpg"; // adjust path if needed

function Banner() {
  return (
    <div
      className="h-[50vh] md:h-[60vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${marvelsImg})` }}
    >
      <div className="text-white text-2xl text-center bg-gray-900/40 w-full  p-2">
        Avengers Assemble
      </div>
    </div>
  );
}

export default Banner;
