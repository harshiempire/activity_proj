import React from "react";

const New = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Deadline</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="activity">Activity:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="activity"
                    placeholder="Enter activity"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="deadline">Deadline:</label>
                  <input type="date" className="form-control" id="deadline" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Activity
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
