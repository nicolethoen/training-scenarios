Managing the relationship of a toolbar with its filters to a table or other component is the responsibility of the consumer. 

## Task
1) Add the `AppTable` component below the `DataToolbar` and pass it the status and risk filters as props.

<pre class="file" data-target="clipboard">
  &lt;AppTable statusFilters={filters.status} riskFilters={filters.risk}/&gt;
</pre> 

The `AppTable` component is defined in `src/components/table.js` and you can see how it uses the managed list of applied filters to manipulate a very small set of data.
Once the preview reloads - it should look like this:
`some image`