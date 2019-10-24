<template>
    <div>
        <div class=" justify-content-center">
            <div class="col-md-6 ml-auto mr-auto">
                <fg-input name="first name"
                        placeholder="First Name (required)"
                        v-model="model.firstName"
                        v-validate.lazy="modelValidations.firstName"
                        :error="getError('first name')"
                        addon-left-icon="nc-icon nc-single-02">
                </fg-input>

                <fg-input name="last name"
                        placeholder="Last Name (required)"
                        v-model="model.lastName"
                        v-validate="modelValidations.lastName"
                        :error="getError('last name')"
                        addon-left-icon="nc-icon nc-circle-10">
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
                    firstName: '',
                    lastName: ''
                },
                modelValidations: {
                    firstName: {
                        required: true,
                        min: 3
                    },
                    lastName: {
                        required: true,
                        min: 2
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
<style lang="scss">
</style>
