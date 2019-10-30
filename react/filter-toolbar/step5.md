One particular type of Data toolbar group is called the toggle group. A toggle group can be used when you want to collapse a set of items into an overlay panel at a certain breakpoint. This allows complex toolbars with multiple items and groups of items to be responsive. A toggle group is useful for containing filter controls, for example. When the toolbar responds to adapt to a mobile viewport, the contents contained in a toggle group will collapse into an overlay panel that can be toggled by clicking the Filter icon.

Using a `DataToolbarToggleGroup` requires both a `toggleIcon` and `breakpoint` property. The `toggleIcon` is a ReactNode which is displayed instead of the children of `DataToolbarToggleGroup` once the viewport width shrinks below the passed in breakpoint.

## Task
1) Wrap both the "search-filter" `DataToolbarItem` and the "filter-group" `DataToolbarGroup` in a `DataToolbarToggleGroup`. Provide both the `toggleIcon` and `breakpoint` properties to the `DataToolbarToggleGroup`.

<pre class="file" data-target="clipboard">
  &lt;DataToolbarToggleGroup toggleIcon={&lt;FilterIcon /&gt;} breakpoint=&quot;xl&quot;&gt;
    &lt;DataToolbarItem variant=&quot;search-filter&quot;&gt;
      &lt;Input value=&quot;&quot; id=&quot;step2Input&quot; ariaLabel=&quot;Step 2 input&quot; /&gt;
    &lt;/DataToolbarItem&gt;
    &lt;DataToolbarGroup variant=&quot;filter-group&quot;&gt;
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
    &lt;/DataToolbarGroup&gt;
  &lt;/DataToolbarToggleGroup&gt;
</pre>

Once done, shrinking and expanding the viewport should toggle between showing the toggle icon and the children of the `DataToolbarToggleGroup`. When the toggle icon is being displayed, clicking on it should toggle the `DataToolbarToggleGroup` children in responsive expandable content.
`some image`
`some image`