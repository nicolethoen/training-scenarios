import React from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableVariant
} from "@patternfly/react-table";

class AppTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: "Resource name" },
                "Status",
                { title: "Risk", props: { className: "pf-u-text-align-center" } },
                "" // deliberately empty
            ],
            rows: [
                ["helloworld-go-2-7gs9s", "New", "High", "2 hours ago"],
                ["nodejs-rest-http-crud", "Pending", "Low", "Created 11 Sept 2019"],
                ["tag-portal-v1-3", "Pending", "Low", "Created 20 Sept 2019"],
                ["tag-portal-v1-2", "Running", "Low", "Created 01 Aug 2019"],
                ["helloworld-go-1-7gs9s", "Running", "Medium", "Created 09 July 2019"],
                [
                    "openshift-cluster-storage-operator",
                    "Running",
                    "High",
                    "Created 27 July 2019"
                ],
                ["tag-portal-v1-1", "Cancelled", "Medium", "Cancelled 30 Aug 2019"]
            ]
        };
    }

    render() {
        const { statusFilters, riskFilters } = this.props;
        const { columns, rows } = this.state;

        const filteredRows = rows.filter(row => {
            return statusFilters.includes(row[1]) || riskFilters.includes(row[2]);
        });

        return (
            <Table
                variant={TableVariant.compact}
                cells={columns}
                rows={filteredRows}
                aria-label="filtered table"
            >
                <TableHeader />
                <TableBody />
            </Table>
        );
    }
}

export default AppTable;
