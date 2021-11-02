const Welcome = () => import('./components/Welcome.vue' )
const EmployeeList = () => import('./components/Employee/List.vue' )
const EmployeeCreate = () => import('./components/Employee/Add.vue' )
const EmployeeEdit = () => import('./components/Employee/Edit.vue' )

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'employeeList',
        path: '/employee',
        component: EmployeeList
    },
    {
        name: 'employeeEdit',
        path: '/employee/:id/edit',
        component: EmployeeEdit
    },
    {
        name: 'employeeAdd',
        path: '/employee/add',
        component: EmployeeCreate
    }
]