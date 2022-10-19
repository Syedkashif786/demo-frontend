import React from 'react';
import "./overview.css"

const Signin = () => {
  return (
    <>
      {/* Section: Design Block */}
      <section className=" text-center text-lg-start">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .rounded-t-5 {\n border-top-left-radius: 0.5rem;\n border-top-right-radius: 0.5rem;\n }\n\n @media (min-width: 992px) {\n      .rounded-tr-lg-0 {\n        border-top-right-radius: 0;\n      }\n\n      .rounded-bl-lg-5 {\n        border-bottom-left-radius: 0.5rem;\n      }\n    }\n  "
          }}
        />
        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex mt-5">
              <img
                src="signin.png"
                alt="Sign in"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 ms-5"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <form className='form-1'>
                  {/* Email input */}
                  <h2 className='header text-center p-3'>File Preview Generation Tool</h2>
                  <h2 className='header text-dark text-center fw-bolder '>Sign in</h2>
                  <p className='para text-center text-dark pb-3'>to continue to preview your files</p>
                  <div className='form d-flex justify-content-center flex-column align-items-center'>
                    <div className="form-outline mb-3">
                      <input
                        type="email"
                        id="form2Example1"
                        className="form-control border"
                      />
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example2"
                        className="form-control border"
                      />
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                    </div>
                    {/* 2 column grid layout for inline styling */}
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        {/* Checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example31"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example31"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        {/* Simple link */}
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>
                    {/* Submit button */}
                    <button type="button" className="btn btn-primary btn-block mb-4 fs-6">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>

  )
}

export default Signin;