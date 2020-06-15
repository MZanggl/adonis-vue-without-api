<template>
    <div>
       <div> {{ currentUsername ? 'Hello ' + currentUsername : 'Not logged in...' }}</div>

        <h2>All Users</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                [{{ user.id }}] {{ user.email }}
            </li>
        </ul>

        <h2>Create User</h2>
        <input v-model="email" placeholder="email" />
        <input v-model="password" placeholder="password" type="password" />
        <button @click="create">Create User</button>

        <h2>Login Via ID</h2>
        <input v-model.number="loginas">
        <button :disabled="!loginas" placeholder="id" @click.prevent="login">login</button>
        <br/>
    </div>
</template>

<script>
import { getCurrentUser, getAllUsers, createUser, login } from '../../api/app/Actions/user'

export default {
    data() {
        return {
            loginas: null,
            email: '',
            password: '',
            users: [],
            currentUsername: ''
        }
    },
    async mounted() {
        this.users = await getAllUsers()
        this.currentUsername = await getCurrentUser()
    },
    methods: {
        async login() {
            login(this.loginas)
                .then(() => location.reload())
                .catch(() => alert('could not log you in. Sorry!'))
        },
        async create() {
            try {
                await createUser(this.email, this.password)
                this.users = await getAllUsers()
            } catch(error) {
                alert('could not create user, maybe it already exists?')
            }
        }
    }
}
</script>