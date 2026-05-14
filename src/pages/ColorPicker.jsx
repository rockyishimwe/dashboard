import React from 'react';
import {Header} from '../components';
import {ColorPickerComponent} from '@syncfusion/ej2-react-inputs';

const change = (args) =>{
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};
const CustomColorPicker = ({id,mode}) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false}  inline showButtons={false} change={change}/>

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h1>Color Picker</h1>
    </div>
  );
};

export default ColorPicker;
