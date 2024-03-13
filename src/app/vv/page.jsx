// pages/vv/page.jsx

import React, { useState } from "react";

const FormPage = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message:", message);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md w-96"
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="message"
          >
            پیام
          </label>
          <textarea
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="پیام خود را وارد کنید"
            value={message}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
