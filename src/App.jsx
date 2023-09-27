import "./App.css";
import GrandFather from "./Components/GrandFather/GrandFather";
// import ReuseableFrom from "./Components/ReuseableFrom/ReuseableFrom";
// import HookFrom from './Components/HookFrom/HookFrom'

// import RefFrom from './Components/refFrom/refFrom'
// import SimpleFrom from './Components/SimpleFrom/SimpleFrom'
// import StateFullForm from './Components/StateFullForm/StateFullForm'

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log("hoice",data);
  // };
  // const handleUpdateSubmit = (data) => {
  //   console.log("hoice",data);
  // };

  return (
    <>
      <h1>From Master</h1>

      <GrandFather></GrandFather>

      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
      {/* <ReuseableFrom 
      fromTile={"Sing Up"}
      handleSubmit={handleSingUpSubmit}
      ></ReuseableFrom>
      <ReuseableFrom
        fromTile={"Profile Update"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateSubmit}
      ></ReuseableFrom> */}
    </>
  );
}

export default App;
