import React from 'react';

const CreatePost = () => {
  return (
    <form className='px-4 text-white'>
      <div className="mb-3 ">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control "
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
        <div id="emailHelp" className="form-text">
          Well never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control text-dark" // Ensure input text color is dark
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
