import { Button, ButtonGroup, FormControl, FormLabel, Stack } from '@mui/material';
import { useState } from 'react';

export default function Selectbar({minMag,setMinMag,timespan,setTimespan}) {
  const handleChangeMagnitude = (value) => {
    setMinMag(value);
  };

  const handleChangeTimePeriod = (value) => {
    setTimespan(value);
  };

  return (
    <Stack spacing={2} direction="row" alignItems="center" padding={2}>
      
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Magnitude</FormLabel>
        <ButtonGroup variant="outlined">
          <Button
            variant={minMag === 'all' ? 'contained' : 'outlined'}
            color={minMag === 'all' ? 'primary' : 'default'}
            disabled={timespan === 'month'}
            onClick={() => handleChangeMagnitude('all')}
          >
            ALL
          </Button>
          <Button
            variant={minMag === '1.0' ? 'contained' : 'outlined'}
            color={minMag === '1.0' ? 'primary' : 'default'}
            disabled={timespan === 'month'}
            onClick={() => handleChangeMagnitude('1.0')}
          >
            M1.0+
          </Button>
          <Button
            variant={minMag === '2.5' ? 'contained' : 'outlined'}
            color={minMag === '2.5' ? 'primary' : 'default'}
            onClick={() => handleChangeMagnitude('2.5')}
          >
            M2.5+
          </Button>
          <Button
            variant={minMag === '4.5' ? 'contained' : 'outlined'}
            color={minMag === '4.5' ? 'primary' : 'default'}
            onClick={() => handleChangeMagnitude('4.5')}
          >
            M4.5+
          </Button>
          <Button
            variant={minMag === 'significant' ? 'contained' : 'outlined'}
            color={minMag === 'significant' ? 'primary' : 'default'}
            onClick={() => handleChangeMagnitude('significant')}
          >
            SIGNIFICANT
          </Button>
        </ButtonGroup>
      </FormControl>
      
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Time Period</FormLabel>
        <ButtonGroup variant="outlined">
          <Button
            variant={timespan === 'hour' ? 'contained' : 'outlined'}
            color={timespan === 'hour' ? 'secondary' : 'default'}
            onClick={() => handleChangeTimePeriod('hour')}
          >
            LAST HOUR
          </Button>
          <Button
            variant={timespan === 'day' ? 'contained' : 'outlined'}
            color={timespan === 'day' ? 'secondary' : 'default'}
            onClick={() => handleChangeTimePeriod('day')}
          >
            LAST DAY
          </Button>
          <Button
            variant={timespan === 'week' ? 'contained' : 'outlined'}
            color={timespan === 'week' ? 'secondary' : 'default'}
            onClick={() => handleChangeTimePeriod('week')}
          >
            LAST 7 DAYS
          </Button>
          <Button
            variant={timespan === 'month' ? 'contained' : 'outlined'}
            color={timespan === 'month' ? 'secondary' : 'default'}
            disabled={minMag === 'all' || minMag === '1.0'}
            onClick={() => handleChangeTimePeriod('month')}
          >
            LAST 30 DAYS
          </Button>
        </ButtonGroup>
      </FormControl>

    </Stack>
  );
}
