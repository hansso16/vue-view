<template>
    <div>
        <div class="justify-content-center">
            <div class="col-md-6 mx-auto">
                <fg-input name="email"
                        placeholder="Email (required)"
                        v-model="model.email"
                        v-validate="modelValidations.email"
                        :error="getError('email')"
                        addon-left-icon="nc-icon nc-send">
                </fg-input>
                <fg-input name="phone number"
                        placeholder="Phone Number (required)"
                        v-model="model.phoneNumber"
                        v-validate="modelValidations.phoneNumber"
                        :error="getError('phone number')"
                        addon-left-icon="fa fa-phone"
                        addon-left-text="+1">
                </fg-input>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                model: {
                    email: '',
                    phoneNumber: null
                },
                modelValidations: {
                    email: {
                        required: true,
                        email: true
                    },
                    phoneNumber: {
                        required: true,
                        integer: true,
                        min: 10
                    }
                }
            }
        },
        methods: {
            getError(fieldName) {
                return this.errors.first(fieldName)
            },
            validate() {
                return this.$validator.validateAll().then(res => {
                    this.$emit('on-validated', res, this.model)
                    return res
                })
            }
        }
    }
</script>
<style>
</style>
