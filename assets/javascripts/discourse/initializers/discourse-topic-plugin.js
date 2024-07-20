import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api)
{
  api.onPageChange((url, title) => {
        // your code here
        console.log('the page changed to: ' + url + ' and title ' + title);
  });
}

export default {
  name: 'discourse-drbenri',
  initialize: function(container)
  {
    withPluginApi('0.1', api => initializePlugin(api));
  }
};
