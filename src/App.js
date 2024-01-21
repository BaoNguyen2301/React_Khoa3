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
import DemoUseSpring from './Hooks/ReactSpring/DemoUseSpring';
import Ex2UsePring from './Hooks/ReactSpring/Ex2UsePring';
import Ex3UseSpring from './Hooks/ReactSpring/Ex3UseSpring';




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
      {/* <DemoUseSpring/> */}
      {/* <Ex2UsePring/> */}
      <Ex3UseSpring/>
    </ContextProvider>
  );
}

export default App;
