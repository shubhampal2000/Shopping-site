import React, { useState } from "react";
import {createStore} from 'redux'
import mainReducer from "../reducers";


const store = createStore(mainReducer)


export default store;