import React, { useState } from 'react';
import axios from 'axios';

export const ContactForm = () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
      const [inputs, setInputs] = useState({
        email: '',
        message: '',
        number: ''
      });
      const handleServerResponse = (ok, msg) => {
        if (ok) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
          });
          setInputs({
            email: '',
            message: '',
            number: ''
          });
        } else {
          setStatus({
            info: { error: true, msg: msg },
          });
        }
      };
      const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
          ...prev,
          [e.target.id]: e.target.value,
        }));
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      };
      const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
          method: 'POST',
          url: 'https://formspree.io/f/xqkokjwz',
          data: inputs,
        })
          .then((response) => {
            handleServerResponse(
              true,
              'Thank you, your message has been submitted.',
            );
          })
          .catch((error) => {
            handleServerResponse(false, error.response.data.error);
          });
      };
    return (
      <div className='flex justify-around py-5'>
        <div className='flex-auto'>
            <form className='border text-lg shadow-md flex flex-col gap-3 p-3 max-w-lg w-full rounded py-6' onSubmit={handleOnSubmit}>
                <label htmlFor="email">Email (required)</label>
                <input
                  className='border-2 rounded'
                  id="email"
                  type="email"
                  name="_replyto"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                  className='border-2 rounded'
                  id="number"
                  type="phone"
                  name="phone"
                  onChange={handleOnChange}
                  value={inputs.number}
                />
                <label htmlFor="message">Message (required)</label>
                <textarea
                  className='border-2 rounded'
                  id="message"
                  name="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                />
                <button className='bg-ungard-blue text-white w-fit px-5 py-2 rounded' type="submit" disabled={status.submitting}>
                {!status.submitting
                    ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                    : 'Submitting...'}
                </button>
            </form>
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </div>
        <div className='flex-auto max-w-lg'>
            <h2 className='text-4xl font-bold pb-5'>Let us know how we can help.</h2>
            <p className='text-lg leading-loose'>Whatever your business needs, we are here to help. Whether you are a large comapny that needs a a custom ecommerce solution or a small company that just needs a brochure site; we navigate the digital landscape for your business so you can focus on what matters most. Tell us how we can help!</p>
        </div>
      </div>
    )
}