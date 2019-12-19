import React from 'react';
import { Paper, Tabs, Tab, withWidth } from '@material-ui/core';

export default withWidth()(({ muscles, category, onSelect, width }) => {
  const index = category
    ? muscles.findIndex(muscle => muscle === category) + 1
    : 0;

  const handleIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1]);
  };
  if (width === 'xs' || width === 'sm') {
    return (
      <Paper>
        <Tabs
          indicatorColor="secondary"
          onChange={handleIndexSelect}
          value={index}
          textColor="secondary"
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="ALL" />
          {muscles.map(muscle => (
            <Tab key={muscle} label={muscle} />
          ))}
        </Tabs>
      </Paper>
    );
  }
  if (width !== 'xs' || width !== 'sm') {
    return (
      <Paper>
        <Tabs
          indicatorColor="secondary"
          onChange={handleIndexSelect}
          value={index}
          textColor="secondary"
          centered
        >
          <Tab label="ALL" />
          {muscles.map(muscle => (
            <Tab key={muscle} label={muscle} />
          ))}
        </Tabs>
      </Paper>
    );
  }
});
