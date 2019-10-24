<template>
    <div class="">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title text-center">Job Opening</h3>
            </div>
            <div class="card-body row">
                <div class="col-md-3 mx-auto">
                    <fg-input class="input-sm"
                        placeholder="Search"
                        v-model="searchQuery"
                        addon-right-icon="nc-icon nc-zoom-split">
                    </fg-input>
                </div>
                <div class="col-md-12 text-center text-danger" v-if="this.$route.query.error">
                    Something went wrong. Please try again. If problem persists, please contact System Administrator.
                </div>
                <div class="col-md-12">
                    <el-table :data="queriedData" header-row-class-name="text-primary">
                        <el-table-column type="index">
                        </el-table-column>
                        <el-table-column prop="title"
                                         label="Job Title">
                        </el-table-column>
                        <el-table-column prop="description"
                                         label="Job Description">
                        </el-table-column>
                        <el-table-column
                          class-name="action-buttons td-actions"
                          align="right"
                          label="Actions">
                            <template slot-scope="props">
                                <router-link tag="button"
                                    :to="'jobopening/' + props.row.jobOpeningId + '/apply'"
                                    class="btn btn-warning">
                                    Apply
                                </router-link>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Table, TableColumn} from 'element-ui'
    import axios from 'axios'
    Vue.use(Table)
    Vue.use(TableColumn)
    export default {
        data () {
            return {
                data: [],
                searchQuery: '',
                propsToSearch: ['title', 'description']
            }
        },
        computed: {
            queriedData () {
                if (!this.searchQuery) {
                    return this.data
                }
                let result = this.data
                    .filter((row) => {
                        let isIncluded = false
                        for (let key of this.propsToSearch) {
                            let rowValue = row[key].toString().toUpperCase()
                            if (rowValue.includes && rowValue.includes(this.searchQuery.toUpperCase())) {
                                isIncluded = true
                            }
                        }
                        return isIncluded
                    })
                return result;
            }
        },
        methods: {
            apply(id) {
                alert('Job Opening Id: ' + id);
            }
        },
        created() {
            axios.get("/api/v1/list/jobopening", {
                params: {
                    enabled: true
                }
            }).then(res => {
                if (res.data.success) {
                    this.data = res.data.jobOpeningDetails
                }
            })
        }
    }
</script>

<style scoped>

</style>
