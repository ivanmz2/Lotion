function top({ toggleSidebar }) {

    return (
      <div>
        <div class='header-main'>
          <button onClick={toggleSidebar}>|||</button>
          <h1 className="head">Ivan Lotion</h1>
        </div>
        <h3 className="slogan">Like Notion but worse</h3>
      </div>
    );
  }

  export default top;