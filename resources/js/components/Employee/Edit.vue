<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Employee</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
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
                                <button type="submit" class="btn btn-primary">Update</button>
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
    name:"update-employee",
    data(){
        return {
            employee:{
               firstname:"",
                lastname:"",
                age:"",
                salary:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showEmployee()
    },
    methods:{
        async showEmployee(){
            await this.axios.get(`/api/employee/${this.$route.params.id}`).then(response=>{
                const { firstname, lastname,age,salary } = response.data
                this.employee.firstname = firstname
                this.employee.lastname = lastname
                this.employee.age = age
                this.employee.salary = salary
                
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/employee/${this.$route.params.id}`,this.employee).then(response=>{
                this.$router.push({name:"employeeList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>