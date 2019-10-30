Toolbar groups are used to group sets of like items to create desired associations and to enable items to respond together to changes in viewport width. DataToolbarGroups are passed an optional prop `variant` to format particular types of groups of elements such as filter groups, button groups, or icon button groups.

## Task
1) Wrap both the `DataToolbarItem` components containing our `CheckboxSelect` filters in the same `DataToolbarGroup`

<pre class="file" data-target="clipboard">
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
</pre>

2) Wrap three adjacent `DataToolbarItem` components containing icons in the same `DataToolbarGroup`

<pre class="file" data-target="clipboard">
  &lt;DataToolbarGroup variant=&quot;icon-button-group&quot;&gt;
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
  &lt;/DataToolbarGroup&gt;
</pre>


Once the preview reloads - it should look like this:
`some image`