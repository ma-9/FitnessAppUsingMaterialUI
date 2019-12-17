import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex(muscle => muscle === category) + 1
    : 0;

  const handleIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1]);
  };
  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        onChange={handleIndexSelect}
        value={index}
        textColor="primary"
        centered
      >
        <Tab label="ALL" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
};
