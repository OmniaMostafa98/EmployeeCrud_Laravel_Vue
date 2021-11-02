<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Employee</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>FirstName</label>
                                    <input type="text" class="form-control" v-model="employee.firstname">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>LastName</label>
                                    <input type="text" class="form-control" v-model="employee.lastname">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Age</label>
                                    <input type="text" class="form-control" v-model="employee.age">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Salary</label>
                                    <input type="text" class="form-control" v-model="employee.salary">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-employee",
    data(){
        return {
            employee:{
                firstname:"",
                lastname:"",
                age:"",
                salary:""
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/employee',this.employee).then(response=>{
                this.$router.push({name:"employeeList"})
            }).catch(error=>{
                console.log("omnia")
            })
        }
    }
}
</script>