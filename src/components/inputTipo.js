import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function InputTipo() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
<FormControl fullWidth>
  <InputLabel id="tipo">Tipo</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Tipo"
    onChange={handleChange}
  >
    <MenuItem value="touchEdisplay">Touch & Display</MenuItem>
    <MenuItem value="bateria">Baterias</MenuItem>
    <MenuItem value="camera">Câmera</MenuItem>
    <MenuItem value="flexComponente">Flex e Componentes</MenuItem>
  </Select>
</FormControl>
 );
}