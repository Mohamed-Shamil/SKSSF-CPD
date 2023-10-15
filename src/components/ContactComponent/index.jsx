// // eslint-disable-next-line no-unused-vars
// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* Left Section (Google Map) */}
//       <div className="lg:w-1/2 h-96">
//         {/* Insert your Google Map component or iframe here */}
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.08526548113!2d76.0380056871582!3d10.999458400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5f3b6160ec3%3A0x6b614bcebb89e7ae!2sISLAMIC%20CENTER%20CHAPPANANGADI(SKSSF-SYS-SBV-SAHACHARI%20CENTER%20)!5e0!3m2!1sen!2sin!4v1696543098970!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//       </div>

//       {/* Right Section (Contact Form) */}
//       <div className="lg:w-1/2 p-4">
//         <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
//         <form>
//           {/* Add your contact form fields here */}
//           <div className="mb-4">
//             <label className="block text-gray-600" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="w-full border border-gray-300 rounded-md p-2"
//               type="text"
//               id="name"
//               name="name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="w-full border border-gray-300 rounded-md p-2"
//               type="email"
//               id="email"
//               name="email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               className="w-full border border-gray-300 rounded-md p-2"
//               id="message"
//               name="message"
//               rows="4"
//               required
//             ></textarea>
//           </div>
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
//             type="submit"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// eslint-disable-next-line no-unused-vars
import React from 'react';

const Contact = () => {
  return (
    <div className="flex mt-24 flex-col lg:flex-row">
      <div>
        
      </div>
      {/* Left Section (Google Map) */}
      <div className="lg:w-1/2 ml-2 mt-5 h-96">
        {/* Insert your Google Map component or iframe here */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.08526548113!2d76.0380056871582!3d10.999458400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5f3b6160ec3%3A0x6b614bcebb89e7ae!2sISLAMIC%20CENTER%20CHAPPANANGADI(SKSSF-SYS-SBV-SAHACHARI%20CENTER%20)!5e0!3m2!1sen!2sin!4v1696543098970!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Right Section (Contact Form) */}
      <div className="lg:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          {/* Add your contact form fields here */}
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
