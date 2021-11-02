<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"employeeAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Employee</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Age</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody v-if="employees.length > 0">
                                <tr v-for="(employee,key) in employees" :key="key">
                                    
                                    <td>{{ employee.firstname }}</td>
                                    <td>{{ employee.lastname }}</td>
                                    <td>{{ employee.age }}</td>
                                    <td>{{ employee.salary }}</td>
                                    <td>
                                        <router-link :to='{name:"employeeEdit",params:{id:employee.id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteEmployee(employee.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Employees Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"employees",
    data(){
        return {
            employees:[]
        }
    },
    mounted(){
        this.getEmployees()
    },
    methods:{
        async getEmployees(){
            await this.axios.get('/api/employee').then(response=>{
                this.employees = response.data
            }).catch(error=>{
                console.log(error)
                this.employees = []
            })
        },
        deleteEmployee(id){
            if(confirm("Are you sure to delete this employee ?")){
                this.axios.delete(`/api/employee/${id}`).then(response=>{
                    this.getEmployees()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>