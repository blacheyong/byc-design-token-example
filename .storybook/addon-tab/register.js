// doc: https://stackoverflow.com/questions/67021916/add-new-tab-in-storybook-story 
// doc: https://storybook.js.org/docs/vue/addons/writing-addons 

import React from 'react';
import { addons, types } from '@storybook/addons';

addons.register('tokens', () => {
  addons.add('my-panel-addon/tab', {
    type: types.TAB,
    title: 'Tokens',
    //👇 Checks the current route for the story
    route: ({ storyId, refId }) => (refId ? `/tokens/${refId}_${storyId}` : `/tokens/${storyId}`),
    //👇 Shows the Tab UI element in tokens view mode
    match: ({ viewMode }) => viewMode === 'tokens',
    render: () => (
      <div>
        <h2>I'm a tabbed addon in Storybook</h2> 
        {/* usually insert vue/react component here */}
      </div>
    ),
  });
});