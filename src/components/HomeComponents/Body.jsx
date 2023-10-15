
const Body = () => {
  return (
    <>
    <div className="flex flex-col  md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center h-96 m- sm:m- items-center">
        <h2 className="font-bold mb-5 text-green-500 text-3xl">SKSSF State Committee</h2>
        <img
          className="w-full"
          src="https://skssf.in/wp-content/uploads/2022/02/skssf2022committee.jpg"
          alt=""
        />
      </div>
      <div className="md:w-1/2 flex justify-center p-5 items-center">
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 text-2xl md:text-3xl lg:text-3xl font-bold break-words">
          Samastha Kerala Sunni Students Federation, known as SKSSF, is the
          higher students organisation of Samastha Kerala Jamiyyathul Ulama
          formed on February 19, 1989, as a part of its attempt to all Muslim
          students under its fold to nurture them into a good moral life.
        </h1>
      </div>
    </div>

<div className="flex justify-center items-center">
     <img className="w-96 h-96" src="Images\IC logo_page-0001.jpg" alt="" />
</div>
    </>

  );
};

export default Body;
