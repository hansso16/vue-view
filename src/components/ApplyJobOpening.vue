<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 mr-auto ml-auto">
                <wizard>
                    <template slot="header" v-if="jobOpeningData">
                        <h3 class="card-title">{{jobOpeningData.title}}</h3>
                        <h3 class="description">{{jobOpeningData.description}}</h3>
                    </template>

                    <wizard-tab :before-change="() => validateStep('step1')">
                        <template slot="label">
                            <i class="nc-icon nc-single-02"></i>
                            About
                        </template>
                        <first-step ref="step1" @on-validated="onStepValidated"></first-step>
                    </wizard-tab>

                    <wizard-tab :before-change="() => validateStep('step2')">
                        <template slot="label" >
                            <i class="nc-icon nc-touch-id"></i>
                            Account
                        </template>
                        <second-step ref="step2" @on-validated="onStepValidated"></second-step>
                    </wizard-tab>

                    <wizard-tab :before-change="() => validateStep('step3')">
                        <template slot="label">
                            <i class="nc-icon nc-alert-circle-i"></i>
                            Personal
                        </template>
                        <third-step ref="step3" @on-validated="wizardComplete"></third-step>
                    </wizard-tab>
                </wizard>
                <div class="pull-left">
                    <router-link to="/jobopening" class="btn btn-warning"><a>Back</a></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FirstStep from './ApplyJobOpeningWizard/FirstStep.vue'
    import SecondStep from './ApplyJobOpeningWizard/SecondStep.vue'
    import ThirdStep from './ApplyJobOpeningWizard/ThirdStep.vue'
    import axios from 'axios';
    import {Wizard, WizardTab} from 'src/components/UIComponents'
    import swal from 'sweetalert2'
    export default {
        data() {
            return {
                jobOpeningId: this.$route.params.id,
                jobOpeningData: null,
                wizardModel: {}
            }
        },
        components: {
            Wizard,
            WizardTab,
            FirstStep,
            SecondStep,
            ThirdStep
        },
        created() {
            axios.get('/api/v1/list/jobopening/' + this.jobOpeningId).then(res => {
                if (res.data.success) {
                    this.jobOpeningData = res.data.jobOpeningDto
                }
            }).catch(error => {
                this.$router.replace('/jobopening')
            })
        },
        methods: {
            validateStep(ref) {
                return this.$refs[ref].validate()
            },
            onStepValidated(validated, model) {
                this.wizardModel = {...this.wizardModel, ...model}
            },
            wizardComplete(validated, model) {
                this.wizardModel = {...this.wizardModel, ...model};
                if (validated) {
                    axios.post('/api/v1/jobopening/' + this.jobOpeningId + '/create/applicant', this.wizardModel).then(res => {
                        if (res.data.success) {
                            swal(this.jobOpeningData.title, 'You successfully registered!', 'success').then(() => {
                                this.$route.replace('/jobopening')
                            }).catch(error => {
                                this.$route.replace('/jobopening?error=true')
                            })
                        }
                    }).catch(error => {
                        console.log(error);
                        console.log(error.response);
                        this.$route.replace('/jobopening?error=true')
                    })
                }
            }
        }
    }
</script>

<style>
    .card-wizard .tab-content {
        min-height: 250px !important
    }
</style>
