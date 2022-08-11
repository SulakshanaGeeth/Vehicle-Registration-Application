import React, { Fragment } from "react";

function Register() {
  return (
    <Fragment>
      <form>
        <div class="form-group">
          <label for="InputPlateNo"></label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Registration Number"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
}

export default Register;
