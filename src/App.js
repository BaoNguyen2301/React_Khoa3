// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { DemoHookUseState } from './Hooks/DemoHooks/DemoHookUseState';
import { DemoHookUseEffect } from './Hooks/DemoHooks/DemoHookUseEffect';
import { DemoHookUseCallBack } from './Hooks/DemoHooks/DemoHookUseCallBack';
import DemoHookUseMemo from './Hooks/DemoHooks/DemoHookUseMemo';
import DemoUseRef from './Hooks/DemoHooks/DemoUseRef';
import DemoUseReducer from './Hooks/DemoHooks/DemoUseReducer';
import DemoUseContext from './Hooks/DemoHooks/DemoUseContext';
import ContextProvider from './Hooks/DemoHooks/Context/ContextProvider';
import DemoReduxApp from './Hooks/DemoHooks/DemoReduxApp';
import Ex4UseTrail from './Hooks/ReactSpring/Ex4UseTrail';
import Ex5UseTransition from './Hooks/ReactSpring/Ex5UseTransition';
import Ex6UseChain from './Hooks/ReactSpring/Ex6UseChain';




function App() {
  return (
    <ContextProvider>
      {/* <DemoHookUseState/> */}
      {/* <DemoHookUseEffect/> */}
      {/* <DemoHookUseCallBack/> */}
      {/* <DemoHookUseMemo/> */}
      {/* <DemoUseRef/> */}
      {/* <DemoUseReducer/> */}
      {/* <DemoUseContext/> */}
      {/* <DemoReduxApp/> */}
      {/* <Ex4UseTrail/> */}
      {/* <Ex5UseTransition/> */}\
      <Ex6UseChain/>
    </ContextProvider>
  );
}

export default App;
