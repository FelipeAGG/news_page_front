// OrderDropdown.js
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowUpward';

const OrderDropdown = ({ onOrderChange }) => {

  const [sortOrder, setSortOrder] = useState('asc'); // Estado para rastrear el orden ascendente o descendente

  const handleOrderChange = (event) => {
    const selectedValue = event.target.value;
    onOrderChange(selectedValue, sortOrder); // Llama a la función proporcionada con el valor seleccionado y el orden actual
  };

  const handleToggleOrder = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    onOrderChange(undefined, newOrder); // Llama a la función proporcionada con el orden actualizado
  };

  return (
    <FormControl sx={{ 
        paddingRight: '20px', 
        marginBottom: '10px',
        float: 'right',
        display: 'block',
        }}>
      <InputLabel id="ordenar-label">Ordenar por:</InputLabel>
      <Select
        labelId="ordenar-label"
        id="ordenar"
        onChange={handleOrderChange}
        sx={{ 
          width: '170px'
        }}
      >
        <MenuItem value="date">Fecha</MenuItem>
        <MenuItem value="author">Autor</MenuItem>
        <MenuItem value="title">Título</MenuItem>
      </Select>
      <IconButton onClick={handleToggleOrder} color="inherit">
        <ArrowDropDownIcon sx={{ transform: `rotate(${sortOrder === 'asc' ? 0 : 180}deg)` }} />
      </IconButton>
    </FormControl>
  );
};

export default OrderDropdown;
