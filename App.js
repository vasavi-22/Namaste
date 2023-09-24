const heading1 = React.createElement("h1",{
    id:"title",
  },"Heading 1");

  const heading2 = React.createElement("h2",{
    id:"title",
  },"Heading 2");

  const container = React.createElement("div",{
    id:"container"
  },[heading1,heading2]);


  // here React is like a gobal variable which comes from injected files.
  const heading = React.createElement("h1",{
    id:"title",
  },"Namaste Everyone!");  // react gives us this api to create an element.
  // React - it is the core library of react , if we are using react native , it will be there also
  console.log(heading);

  // whatever we pass inside the createRoot it will become root of the app.
  const root = ReactDOM.createRoot(document.getElementById("root")); // it is used , because we are modifying the dom

  // passing react element inside the root.
  // root.render(heading);
  root.render(container);

  // async & defer