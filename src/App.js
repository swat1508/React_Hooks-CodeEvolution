import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
//import HookCounter from './components/1_useState_Hook/1_useState_demo/1_HookCounter';
//import NameDisplay from './components/1_useState_Hook/2_useState_withObjects/NameDisplay';
//import AddDisplayItems from './components/1_useState_Hook/3_useState_withArray/AddDisplayItems';

//import KeepUpdatingTitle from './components/2_useEffect_Hook/1_useEffect_after_render/KeepUpdatingTitle';
//import RenderOnlyWhenCountChanges from './components/2_useEffect_Hook/2_Conditionally_run_effects/RenderOnlyWhenCountChanges';
//import AddEventListeners from './components/2_useEffect_Hook/3_useEffect_run__only_once/AddEventListeners';
//import ToggleMouseDisplayComp from './components/2_useEffect_Hook/4_useEffect_with_cleanup/ToggleMouseDisplayComp';
//import FetchAndDislayData from './components/2_useEffect_Hook/6_fetchData_axios/FetchAndDislayData';
//import FetchSinglePost_TextboxValue from './components/2_useEffect_Hook/7_fetchData_axios_textbox_value/FetchSinglePost_TextboxValue';
//import FetchPostWithTextBoxValueButtonClick from './components/2_useEffect_Hook/8_fetchData_axios_textbox_value_buttonClick/FetchPostWithTextBoxValueButtonClick';

//import Comp_C from './components/3_useContext_Hook/Comp_C';

//import CounterUsingSimpleStateAndAction from './components/4_useReducer_Hook/1_SimpleState_And_Action/CounterUsingSimpleStateAndAction';
//import CounterUsingComplexStateAndAction_1 from './components/4_useReducer_Hook/2_ComplexState_And_Action/CounterUsingComplexStateAndAction_1';
//import CounterUsingComplexStateAndAction_2 from './components/4_useReducer_Hook/2_ComplexState_And_Action/CounterUsingComplexStateAndAction_2';
//import CounterUsingComplexStateAndAction_3 from './components/4_useReducer_Hook/2_ComplexState_And_Action/CounterUsingComplexStateAndAction_3';
//import TwoCounterUsingTwoReducer from './components/4_useReducer_Hook/3_multiple_useReducers/TwoCounterUsingTwoReducer';
// import Comp_A from './components/4_useReducer_Hook/4_useReducer_And_useContext/Comp_A';
// import Comp_B from './components/4_useReducer_Hook/4_useReducer_And_useContext/Comp_B';
// import Comp_C from './components/4_useReducer_Hook/4_useReducer_And_useContext/Comp_C';

//import Fetch_Using_useState from './components/4_useReducer_Hook/5_Fetching_data_with_useReducer/Fetch_Using_useState';
//import Fetch_Using_useReducer from './components/4_useReducer_Hook/5_Fetching_data_with_useReducer/Fetch_Using_useReducer';

//import Need_For_Callback_Hook from './components/5_useCallback_Hook/1_Need_for_useCallbackHook/Need_For_Callback_Hook';
//import HowToUseCallback_Hook from './components/5_useCallback_Hook/2_How_To_implement_useCallback_Hook/HowToUseCallback_Hook';
//import DemoForUseMemo from './components/6_useMemo_Hook/DemoForUseMemo';

//import FocusInput from './components/7_useRef_Hook/1_Focus_Input_Textbox/FocusInput';

//import UsingClass_Add_Clear_Interval from './components/7_useRef_Hook/2_add_clear_interval/UsingClass_Add_Clear_Interval';
//import UsingHooks_Add_Clear_Interval from './components/7_useRef_Hook/2_add_clear_interval/UsingHooks_Add_Clear_Interval';

//import Counter_One from './components/8_custom_Hook/1_need_for_custom_hook/Counter_One';
//import Counter_Two from './components/8_custom_Hook/1_need_for_custom_hook/Counter_Two';

import Counter_One from './components/9_custom_Hook_2/2_Implementation_Custom_Hook2/Counter_One';
import Counter_Two from './components/9_custom_Hook_2/2_Implementation_Custom_Hook2/Counter_Two';

import FirstNameLastName from './components/11_practice/1_learn_useState/FirstNameLastName';
import Countercomp from './components/11_practice/1_learn_useState/CounterComp';

import Timeclasscomp from './components/11_practice/1_learn_useState/TimeClassComp';
import TimerCompHook from './components/11_practice/1_learn_useState/TimerCompHook';

import MouseMoveClassContainer from './components/11_practice/1_learn_useState/MouseMoveClassContainer';
import MouseMoveHookContainer from './components/11_practice/1_learn_useState/MouseMoveHookContainer';

import Simplestateandaction from './components/11_practice/2_learn_useReducer/1_SimpleStateAndAction';
import ComplexStateAndAction from './components/11_practice/2_learn_useReducer/2_ComplexStateAndAction';
import Multiplereducer from './components/11_practice/2_learn_useReducer/3_MultipleReducer';
import DataFetchUseState from './components/11_practice/2_learn_useReducer/4_DataFetch_useState';
import DataFetchUseReducer from './components/11_practice/2_learn_useReducer/5_DataFetch_useReducer';
import ContextHook from './components/11_practice/3_learn_useContext/context_hook';
import CounterUsecontextUsereducer from './components/11_practice/4_learn_useContext_and_useReducer/Counter_UseContext_UseReducer';
function App() {
    return (
  
    <div className="App">
   
    
<FirstNameLastName/>
<hr/>
    {/* <Countercomp />
    <hr/>
    <Timeclasscomp />
    <TimerCompHook/>
    <hr/>
    <MouseMoveClassContainer />
    <br/>
    <MouseMoveHookContainer /> 
<hr/> */}

 <Simplestateandaction />
<br/>  <br/>   <br/> 
<ComplexStateAndAction/>
<br/> <br/> <br/>
<Multiplereducer />
<hr/>
<DataFetchUseState /> 
<br/>
<DataFetchUseReducer />
<br/>
<hr/>
<ContextHook/>
<br/>
<CounterUsecontextUsereducer />
    </div> 
    
  );
}

export default App;

