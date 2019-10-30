One particular type of Data toolbar item is called the `DataToolbarFilter`. When used, selected filters are displayed in chip groups below the toolbar. You may consider placing filters inside of a toggle group to make you toolbar responsive.

Using a `DataToolbarFilter` requires three properties. First is a managed array of selected filters called `chips` as strings or ReactNodes. It also requires an `onDelete` callback function to be executed whenever the user deletes a selected filter chip. Lastly, it requires a `categoryName` which will be used to label the chip group.

## Task
1) Define the required `onDelete` function to be passed to the DataToolbarFilters. Add it to the ToolbarDemoApp class.

<pre class="file" data-target="clipboard">
  onDelete = (type = &quot;&quot;, id = &quot;&quot;) =&lt; {
    if (type) {
      this.setState((prevState) =&lt; {
        prevState.filters[type.toLowerCase()] = prevState.filters[type.toLowerCase()].filter(s =&lt; s !== id);
        return {
          filters: prevState.filters,
        }
      });
    } else {
      this.setState({
        filters: {
          risk: [],
          status: [],
        }
      })
    }
  };
</pre&lt;

2) Replace each of the two `DataToolbarItems` inside the filter-group `DataToolbarGroup` with a `DataToolbarFilter`. Pass the appropriate state managed filters array as the `chips` property, an appropriate label as the `categoryName` property, and the onDelete function as the `deleteChip` property. 

<pre class="file" data-target="clipboard">
  &gt;DataToolbarFilter chips={filters.status} deleteChip={this.onDelete} categoryName=&quot;Status&quot;&lt;
    &gt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Status&quot;
      selections={filters.status}
      options={statusOptions}
    /&lt;
  &gt;/DataToolbarFilter&lt;
  &gt;DataToolbarFilter chips={filters.risk} deleteChip={this.onDelete} categoryName=&quot;Risk&quot;&lt;
    &gt;CheckboxSelect
      onSelect={this.onSelect}
      type=&quot;Risk&quot;
      selections={filters.risk}
      options={riskOptions}
    /&lt;
  &gt;/DataToolbarFilter&lt;
</pre>

3) Two props can be optionally added to the top level `DataToolbar` component to improve user experience when using a `DataToolbarFilter`.
First, if a `clearAllFilters` event handler is passed to `DataToolbar`, a 'Clear All Filters' action will appear alongside the applied filters chip groups.
Second, if a `collapseListedFiltersBreakpoint` is passed to `DataToolbar`, the chip groups will collapse to a summary message at the passed in breakpoint, making the applied filters chip groups more responsive.
Add the following code to the `DataToolbar` to see optional props in action.

<pre class="file" data-target="clipboard">
  clearAllFilters={this.onDelete} collapseListedFiltersBreakpoint=&quot;xl&quot;
</pre>

Take some time to play with the toolbar to see how it responds to changes in viewport size and the number of filters applied.
At smaller viewport widths, you should see a responsive collapsed view of the toolbar and applied filters.
`some image`