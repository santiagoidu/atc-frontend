import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function InputMarcas() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl fullWidth>
    <InputLabel id="modelo">Marca</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Marca"
      onChange={handleChange}
    >
      <MenuItem value="Apple">Apple</MenuItem>
      <MenuItem value="Asus">Asus</MenuItem>
      <MenuItem value="LG">LG</MenuItem>
      <MenuItem value="Lenovo">Lenovo</MenuItem>
      <MenuItem value="Motorola">Motorola</MenuItem>
      <MenuItem value="Samsung">Samsung</MenuItem>
      <MenuItem value="Sony">Sony</MenuItem>
      <MenuItem value="Xiaomi">Xiaomi</MenuItem>
    </Select>
  </FormControl>
    );
}