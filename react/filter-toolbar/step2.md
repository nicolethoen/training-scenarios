Toolbar items are individual components that can be placed inside of a toolbar. Buttons, select lists, and pagination controls are examples of items. Often, it makes sense to group sets of like items to create desired associations and to enable items to respond together to changes in viewport width.

## Task
1) Navigate to the `src` folder and open `src/App.js`{{open}}

Next, we'll set up the general structure of an empty toolbar and add the necessary imports.

2) Copy the following code into the App.js file, replacing all of the content there:

<pre class="file" data-filename="App.js" data-target="replace">
import React from &quot;react&quot;;
import ReactDOM from &quot;react-dom&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import &quot;./app.css&quot;;
import { Button, Badge } from &quot;@patternfly/react-core&quot;;
import {
  EditIcon,
  CloneIcon,
  SyncIcon,
  FilterIcon
} from &quot;@patternfly/react-icons&quot;;
import {
  DataToolbar,
  DataToolbarContent,
  DataToolbarItem,
  DataToolbarGroup,
  DataToolbarToggleGroup,
  DataToolbarFilter
} from &quot;@patternfly/react-core/dist/esm/experimental&quot;;
import Input from &quot;./components/input&quot;;
import CheckboxSelect from &quot;./components/checkboxSelect&quot;;
import Kebab from &quot;./components/kebab&quot;;
import AppTable from &quot;./components/table&quot;;

class ToolbarDemoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        &lt;DataToolbar id=&quot;tutorial-toolbar&quot;&gt;
          
        &lt;/DataToolbar&gt;
      );
   }
};

export default ToolbarDemoApp;
</pre>

3) Each toolbar contains one or more content rows. Copy the following snippet into the `DataToolbar`.

<pre class="file" data-target="clipboard">
  &lt;DataToolbarContent&gt;Toolbar&lt;/DataToolbarContent&gt;
</pre>

Once the preview reloads - it should look like this:
`some image`