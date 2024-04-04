import { createContext } from "react";
import ComponentA from "./components/ComponentA";

export const MessageContext = createContext();

function App() {

  const Message = "⚓ Currently learning REACT useContext ⚓";

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-black rounded-md p-4">
        <div>
          <h1 className="text-4xl text-center font-bold underline">
            React useContext
          </h1>

          <p className="text-xl text-center">
            <span>useContext</span> is a React hook used to consume context
            within functional components.
          </p>
          <p className="text-2xl font-bold text-center">Main App Component <br></br> {Message}</p>
        </div>
        <MessageContext.Provider value={Message}>
          <ComponentA/>
        </MessageContext.Provider>
        
      </div>
    </div>
  );
}

export default App;
