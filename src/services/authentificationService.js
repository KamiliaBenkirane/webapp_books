import api from '@/services/api'

export default{
    register(info){
        return api().post('register', info)
}
}

/*AuthentificationService.register({
    email:'testing@gmail.com',
    password: '123456'
})*/