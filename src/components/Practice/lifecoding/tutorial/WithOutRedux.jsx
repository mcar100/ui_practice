function WithOutRedux() {
  return (
    <div className="contents-container">
      <div id="red">
        <div className="lf-container" id="component_red">
          <h1>red</h1>
          <input
            type="button"
            value="fire"
            onClick={() => {
              document.querySelector("#component_red").style.backgroundColor =
                "red";
              document.querySelector("#component_green").style.backgroundColor =
                "red";
              document.querySelector("#component_blue").style.backgroundColor =
                "red";
            }}
          />
        </div>
      </div>
      <div id="green">
        <div className="lf-container" id="component_green">
          <h1>green</h1>
          <input
            type="button"
            value="fire"
            onClick={() => {
              document.querySelector("#component_green").style.backgroundColor =
                "green";
              document.querySelector("#component_red").style.backgroundColor =
                "green";
              document.querySelector("#component_blue").style.backgroundColor =
                "green";
            }}
          />
        </div>
      </div>
      <div id="blue">
        <div className="lf-container" id="component_blue">
          <h1>blue</h1>
          <input
            type="button"
            value="fire"
            onClick={() => {
              document.querySelector("#component_green").style.backgroundColor =
                "blue";
              document.querySelector("#component_red").style.backgroundColor =
                "blue";
              document.querySelector("#component_blue").style.backgroundColor =
                "blue";
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default WithOutRedux;
