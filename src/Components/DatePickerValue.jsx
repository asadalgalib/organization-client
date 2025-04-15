import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import useCustomTheme from '../Hooks/useCustomTheme';
import { DateTimePicker } from '@mui/x-date-pickers';

export default function DatePickerValue({ dateValue, setDateValue, setDateError, setChanged }) {
  const { theme } = useCustomTheme();

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
    >
      <DateTimePicker
        className='w-full text-black dark:text-white'
        label="Event Date & Time"
        value={dateValue}
        onChange={(newValue) => { setDateValue(newValue); setDateError(false); setChanged(true) }}
        slotProps={{
          textField: {
            InputProps: {
              sx: {
                color: 'white',
                '& input': {
                  color: 'white',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              },
            },
            InputLabelProps: {
              sx: {
                color: 'white',
              },
            },
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  );
}
