import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Encode from "./Components/decodeToken.js";

const App = () => {
  return (
    <>
      <h1 className="text-center mt-5">Data Unveil</h1>

      <section className="p-5">
        <header>
          <div className="header-parms text-center ">
            <p className="fs-3">Encode</p>
            <div className="form-floating">
              <textarea
                className="form-control encode"
                placeholder="Leave a comment here"
                style={{ height: "80vh" }}
                id="Token"
              ></textarea>
              <label for="floatingTextarea2">Token</label>
              <p id="error"></p>
            </div>

            <button className="btn btn-primary w-50 mt-5" onClick={Encode}>
              Submit
            </button>
          </div>

          <div className="header-parms text-center  ">
            <div className="form-floating mb-3">
              <p className="fs-3">Decode</p>
              <div className="form-floating">
                <pre>
                  <textarea
                    name="Payload"
                    disabled
                    className="form-control p-4 mt-5"
                    id="Header"
                    cols="42"
                    rows="7"
                  ></textarea>
                </pre>
                <label for="floatingPassword">
                  HEADER:ALGORITHM & TOKEN TYPE
                </label>
              </div>
              <div className="form-floating">
                <pre>
                  <textarea
                    name="Payload"
                    disabled
                    className="form-control p-4 mt-5"
                    id="Payload"
                    cols="42"
                    rows="30"
                  ></textarea>
                </pre>
                <label for="floatingPassword">PAYLOAD:DATA</label>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default App;
