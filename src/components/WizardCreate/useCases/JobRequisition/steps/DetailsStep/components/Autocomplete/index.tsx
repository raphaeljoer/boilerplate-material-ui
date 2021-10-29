import React from 'react';
import {
  Autocomplete as MuiAutocomplete,
  TextField,
  Theme
} from '@mui/material';
import { SxProps } from '@mui/system';
import { useCallback, useState } from 'react';

type Option = {
  label: string;
  id: number;
};

type Errors = {
  [key: string]: any;
};

type OnChange<T> = (
  e: React.SyntheticEvent<Element, Event>,
  input: T | null,
  id: string
) => void;

type Props = {
  id: string;
  options: Option[];
  value: Option | null;
  label: string;
  errors: Errors;
  sx?: SxProps<Theme>;
  onChange: OnChange<Option>;
};

export function Autocomplete({
  id,
  label,
  options,
  value,
  errors,
  sx,
  onChange
}: Props): JSX.Element {
  const [inputValue, setInputValue] = useState<Option | null>(value);

  const handleChange: OnChange<Option> = useCallback(
    (e, input, id) => {
      setInputValue(input);
      onChange(e, input, id);
    },
    [onChange]
  );

  const hasErrors = !!errors[id];
  const errorMessage = errors[id]?.message;

  return (
    <MuiAutocomplete
      id={id}
      disablePortal
      options={options}
      value={inputValue}
      sx={sx}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={hasErrors}
          helperText={errorMessage}
        />
      )}
      onChange={(e, input) => handleChange(e, input, id)}
    />
  );
}
