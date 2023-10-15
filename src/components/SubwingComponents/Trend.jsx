// import React from 'react'

const Trend = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 flex justify-center flex-col items-center">
   
      <h1 className="text-3xl md:text-2xl sm:text-xl text-md text-center text-sky-700 font-extrabold">
      SKSSF Trend
      </h1>
   


      <div className="w-[80%]  mt-4">
<p className="text-sky-900 font-medium text-justify text-md">   We , a group of younger, motivated Educational team under SKSSF
          initiated the Educational uniyrtur in 2004-2005 years through out
          Kerala. We have 120 junior RA team and 30 Senior RP team to impart
          training, counseling and motivations. Recently we focuses more on
          Mahallu Jama’ath aiming the overall innovations of Ummah at the grass
          root level. Youc an associate with TREND as a co-ordinator, trainer,
          financial supporter etc.</p>
</div>
      <div className="border w-80 h-96 gap-2 border-sky-300 mt-9 mb-2 flex flex-col items-center justify-center">
        <img
          className="w-44 h-48"
          src="/Images/IC%20logo_page-0001.jpg"
          alt="not found"
        />
        <h4 className="font-semibold text-lg text-emerald-600">
          Unit Trend Secretary
        </h4>
        <h2 className="font-semibold  text-2xl text-sky-900">Muneer M</h2>
      </div>
      <h3 className="font-bold text-purple-500 text-3xl sm:text-2xl md:text-3xl mt-5 mb-3">
        Mission & Vision
      </h3>
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            className="w-full  max-w-[250px] mx-auto"
            src="data:image/png;base64,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  
"
            alt=""
          />
        </div>
       
      </div>

      <div className="w-[80%]  mt-4">
<p className="text-sky-900 font-medium text-justify text-md">    Revamping of Muslim Community in the facets of Education and
              Career. Correlating both the Mundane and spiritual trends in
              Education Empowering the younger generation to face the current
              threats of Global education.</p>
</div>

      <h2 className="text-4xl mt-5 font-bold text-red-700">Major Projects</h2>
      <div
        className="mt-4 flex justify-center items-center "
        data-aos="fade-up"
      >
        {/* Card 1 */}
        <a
          href="#"
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-emerald-100  "
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Taste
          </h5>
          <p className="font-normal text-gray-700 ">
            In the all round development of the teen age students. A
            comprehensive soft skill training will be given to the batch forty
            hours in a month are spent for the programme.
          </p>
        </a>
      </div>
    </div>
  );
};
export default Trend;
