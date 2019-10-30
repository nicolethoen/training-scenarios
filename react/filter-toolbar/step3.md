Toolbar items are individual components that can be placed inside of a toolbar. DataToolbarItems can be passed an optional `variant` prop to format specific types of items such as search filters, pagination, bulk selects, and overflow menus.

## Task
1) Any components you would like to display in a toolbar should be wrapped in a `DataToolbarItem` component. This will ensure that the items are spaced appropriately.

We will use the state of our ToolbarDemoApp to manage some of the items in our `DataToolbar`.

Replace ToolbarDemoApp constructor with the following snippet.

<pre class="file" data-target="clipboard">
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        risk: [&quot;Low&quot;],
        status: [&quot;New&quot;, &quot;Pending&quot;]
      }
    };
  }
</pre>

2) Copy the following onSelect event handler and add it to the ToolbarDemoApp class.

<pre class="file" data-target="clipboard">
  onSelect = (type, event, selection) => {
    const checked = event.target.checked;
    this.setState(prevState => {
      const prevSelections = prevState.filters[type.toLowerCase()];
      return {
        filters: {
          ...prevState.filters,
          [type.toLowerCase()]: checked
            ? [...prevSelections, selection]
            : prevSelections.filter(value => value !== selection)
        }
      };
    });
  };
</pre>

3) Add the following constants to the top of the render function.

<pre class="file" data-target="clipboard">
  const { filters } = this.state;
  const statusOptions = [&quot;New&quot;, &quot;Pending&quot;, &quot;Running&quot;, &quot;Cancelled&quot;];
  const riskOptions = [&quot;Low&quot;, &quot;Medium&quot;, &quot;High&quot;];
</pre>


4) In this case, the first of the items we are going to add is going be `variant='search-filter'`.

Replace the contents of the `DataToolbarContent` with the following six items.

<pre class="file" data-target="clipboard">
    &lt;DataToolbarItem variant=&quot;search-filter&quot;&gt;
      &lt;Input value=&quot;&quot; id=&quot;step2Input&quot; ariaLabel=&quot;Step 2 input&quot; /&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarItem&gt;
      &lt;CheckboxSelect
        onSelect={this.onSelect}
        type=&quot;Status&quot;
        selections={filters.status}
        options={statusOptions}
      /&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarItem&gt;
      &lt;CheckboxSelect
        onSelect={this.onSelect}
        type=&quot;Risk&quot;
        selections={filters.risk}
        options={riskOptions}
      /&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarItem&gt;
      &lt;Button variant=&quot;plain&quot;&gt;
        &lt;EditIcon /&gt;
      &lt;/Button&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarItem&gt;
      &lt;Button variant=&quot;plain&quot;&gt;
        &lt;CloneIcon /&gt;
      &lt;/Button&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarItem&gt;
      &lt;Button variant=&quot;plain&quot;&gt;
        &lt;SyncIcon /&gt;
      &lt;/Button&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarItem&gt;
      &lt;Kebab /&gt;
    &lt;/DataToolbarItem&gt;
</pre>

Once the preview reloads - it should look like this:
`some image`