import React from 'react';
import { AppBar, Tabs, Tab, withWidth } from '@material-ui/core';

export default withWidth()(({ muscles, category, onSelect, width }) => {
  const index = category
    ? muscles.findIndex(muscle => muscle === category) + 1
    : 0;

  const handleIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1]);
  };
  if (width === 'xs' || width === 'sm') {
    return (
      <AppBar color="secondary" position="static">
        <Tabs
          indicatorColor="primary"
          onChange={handleIndexSelect}
          value={index}
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="ALL" />
          {muscles.map(muscle => (
            <Tab key={muscle} label={muscle} />
          ))}
        </Tabs>
      </AppBar>
    );
  }
  if (width !== 'xs' || width !== 'sm') {
    return (
      <AppBar color="secondary" position="static">
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
      </AppBar>
    );
  }
});
