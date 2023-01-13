import Vue from 'vue';

import $ from 'jquery';
import '@progress/kendo-ui';
import { DataSource, HierarchicalDataSource, GanttDataSource, GanttDependencyDataSource, PivotDataSource, SchedulerDataSource, TreeListDataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper';
import { Grid, GridColumn, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
import JSZip from 'jszip';

Vue.use(DataSourceInstaller);
Vue.use(GridInstaller);

new Vue({
    el: '#vueapp',
    data () {
        return {
            dsSchemaFields: {
                ProductID: { type: "number" },
                UnitPrice: { type: "number" },
                ProductName: { type: "string" },
                UnitsInStock: { type: "number" }
            },
            filterableConfig:  {
              mode: "row",
              extra: false,
              operators: {
              string: {
                startswith: "Starts with",
                eq: "Is equal to",
                neq: "Is not equal to",
                contains: "Contains"
              },
              number: {
                lt: "Is less than",
                eq: "Is equal to",
                gt: "Is greater than"
              }
            }
          }
        }
    }
})
