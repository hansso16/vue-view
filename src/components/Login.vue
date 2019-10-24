<template>
    <div class="container">
        <div class="col-md-6 mx-auto">
            <div class="panel panel-primary">
				<div class="panel-body">
                    <br /><br /><br />
					<h2 class="text-center">COMPANY/SYSTEM NAME</h2>
					<hr />
                    <form @submit.prevent="onSubmit">
                        <!-- add bounce animation -->
                        <transition name="fade" mode="out-in">
                            <div id="error" v-if="errors.has('error')" class="text-center alert alert-danger">
                                {{errors.first('error')}}
                            </div>
                        </transition>
                        <fg-input v-model="username"
                                  addon-left-icon="nc-icon nc-single-02"
                                  placeholder="Username"
                                  type="text"
                                  name="username"
                                  v-validate="formValidations"
                                  :error="getError('username')"></fg-input>

                        <fg-input v-model="password"
                                  addon-left-icon="nc-icon nc-key-25"
                                  placeholder="Password"
                                  type="password"
                                  name="password"
                                  v-validate="formValidations"
                                  :error="getError('password')"></fg-input>
                        </fg-input>
                        <button type="submit" @click.prevent="login" class="btn btn-info btn-wd pull-right">Login</button>
                    </form>
                    <router-link to="/jobopening" class="btn btn-warning"><a>Job Opening</a></router-link>
					<!-- <a th:href="@{/jobopenings}">
                        <button class="btn btn-info">Job Openings</button>
                    </a> -->
				</div>
			</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                username: '',
                password: '',
                formValidations: {
                    required: true
                }
            }
        },
        methods: {
            getError(fieldName) {
                return this.errors.first(fieldName)
            },
            login() {
                this.errors.remove('error')
                this.$validator.validateAll().then(isValid => {
                    if(!isValid) {
                        return;
                    }
                    const formData = {
                        username: this.username,
                        password: this.password,
                    }
                    axios.post('/login', formData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => {
                        var authData = {
                            token: res.headers.authorization,
                            expiresIn: res.headers.expiresin
                        };
                        this.$store.dispatch('login', authData);
                        this.$store.dispatch('setLogoutTimer', authData.expiresIn)
                        //temporary redirect
                        this.$router.replace('/admin')
                    }).catch(error => {
                        let errorMsg = 'Something went wrong. Please try again. If problem persist, consult your system administrator';
                        if(error.response.status === 401) {
                            errorMsg = 'Invalid Username/Password';
                        }
                            const FieldError = {
                            field: 'error',
                            msg: errorMsg
                        }
                        this.errors.add(FieldError);
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active {
        transition: opacity 1s;
    }
</style>
