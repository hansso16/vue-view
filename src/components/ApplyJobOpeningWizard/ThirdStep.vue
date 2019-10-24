<template>
    <div class="row justify-content-center">
        <div class="col-md-6 mx-auto">
            <fg-input name="birthdate"
                    placeholder="Birthdate (YYYY-MM-DD)"
                    v-model="model.birthdate"
                    v-validate="modelValidations.birthdate"
                    :error="getError('birthdate')"
                    addon-left-icon="fa fa-birthday-cake">
            </fg-input>

            <fg-input name="address"
                    placeholder="Address (required)"
                    v-model="model.address"
                    v-validate="modelValidations.address"
                    :error="getError('address')"
                    addon-left-icon="fa fa-home">
            </fg-input>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                model: {
                    birthdate: null,
                    address: null
                },
                modelValidations: {
                    birthdate: {
                        required: true,
                        date_format: 'YYYY-MM-DD'
                    },
                    address: {
                        required: true
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
