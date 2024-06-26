import React from "react";


const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
     
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full "
          >
           <div >
              <div>
              < label for="input_comp-kjcztjn1" class="wPeA6j wixui-text-input__label">Admin Name</label>
              </div>
              <div>
                <input name="Enter The Name." 
                id="input_comp-kjcztjn82"
                placeholder="Enter the Name"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                  type="text"
                   aria-required="false" 
                   />
              </div>
              </div>

            <div >
              <div>
              < label for="input_comp-kjcztjn1" class="wPeA6j wixui-text-input__label">Email*</label>
              </div>
              <div>
                <input name="Enter The Email." 
                id="input_comp-kjcztjn82"
                placeholder="Enter The Email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                  type="text"
                   aria-required="false" 
                    />
              </div>
              </div>

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>




  );
};

export default Contact;
