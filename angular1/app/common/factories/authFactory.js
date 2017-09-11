(function () {
    angular.module('primeiraApp').factory('auth', [
        '$http',
        'consts',
        AuthFactory
    ])
    function AuthFactory($http, consts) {

        let user = null
        function getUser() {
            if (!user) {
                user = JSON.parse(localStorage.getItem(consts.userKey))
            }
            return user
        }

        function signup(user, callback) {
            submit('signup', user, callback)
        }
        function login(user, callback) {
            console.log('Entrou em login')
            submit('login', user, callback)
            console.log('saiu do Login')
        }
        function submit(url, user, callback) {
            console.log(user)
            console.log(`${consts.oapiUrl}/${url}`)
            console.log(callback)
            $http.post(`${consts.oapiUrl}/${url}`, user).then(function (response) {
                localStorage.setItem(consts.userKey, JSON.stringify(response.data))
                $http.defaults.headers.common.Authorization = response.data.token
                if (callback) callback(null, response.data)
            }).catch(function (response) {
                if (callback) callback(response.data.errors, null)
            })
        }

        function logout(callback) {
            user = null
            localStorage.removeItem(consts.userKey)
            $http.defaults.headers.common.Authorization = ''
            if (callback) callback(null)
        }

        function validateToken(token, callback) {
            if (token) {
                $http.post(`${consts.oapiUrl}/validateToken`, { token })
                    .then(resp => {
                        if (!resp.data.valid) {
                            logout()
                        } else {
                            $http.defaults.headers.common.Authorization = getUser().token
                        }
                        if (callback) callback(null, resp.data.valid)
                    }).catch(function (resp) {
                        if (callback) callback(resp.data.errors)
                    })
            } else {
                if (callback) callback('Token inválido.')
            }
        }

        return { signup, login, logout, getUser, validateToken }
    }
})()
