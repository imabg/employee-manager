import viewEmployee from '@/components/viewEmployee.vue'
import EditEmployee from '@/components/editEmployee.vue'
import Dashboard from '@/components/dashboard.vue'
import newEmployee from '@/components/newEmployee.vue'

export default [
        { path: '/', name: 'dashboard', component: Dashboard},
        { path: '/new', name: 'newEmployee', component: newEmployee },
        { path: '/edit/:employee_id', name: 'editEmployee', component: EditEmployee },
        { path: '/:employee_id', name: 'viewEmployee', component: viewEmployee }
]