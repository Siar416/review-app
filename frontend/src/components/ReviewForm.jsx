const ReviewForm = () => {
  return (
    <form className="form-wrapper">
      <div className="form-container">
        <div className="form-title">
          <h1>Review Form</h1>
        </div>

        <div className="form-inputs">
          <input className="inputs" type="text" placeholder="Enter Item Name" />
          <input
            className="inputs"
            type="number"
            placeholder="Enter Rating"
            min="1"
            max="5"
          />
          <input className="inputs" type="text" placeholder="Enter Review" />
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
