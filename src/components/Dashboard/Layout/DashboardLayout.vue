<template>
    <div class="wrapper">
        <side-bar type="sidebar" :sidebar-links="this.authorizedSidebarLinks">
            <user-menu></user-menu>
        </side-bar>

        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content @click.native="toggleSidebar">

            </dashboard-content>

            <content-footer></content-footer>
        </div>
    </div>
</template>

<script>
    import TopNavbar from './TopNavbar.vue'
    import ContentFooter from './ContentFooter.vue'
    import DashboardContent from './Content.vue'
    import UserMenu from 'src/components/UIComponents/SidebarPlugin/UserMenu.vue'

    import SideBar from 'src/components/UIComponents/SidebarPlugin'
    import sidebarLinks from 'src/sidebarLinks'
    import Vue from 'vue'
    Vue.use(SideBar, {sidebarLinks: sidebarLinks})

    export default {
        components: {
            TopNavbar,
            ContentFooter,
            DashboardContent,
            UserMenu
        },
        methods: {
            toggleSidebar () {
                if (this.$sidebar.showSidebar) {
                    this.$sidebar.displaySidebar(false)
                }
            },
            authenticateSidebarLinks(sidebarLinks) {
                for (var link in sidebarLinks) {
                    const currentLink = sidebarLinks[link];
                    if (currentLink.priviledge === 'ADMIN') {
                        if (currentLink.children) {
                            var child = currentLink.children.length
                            while(child--) {
                                if(currentLink.children[child].access !== 1) {
                                    currentLink.children.splice(child, 1)
                                }
                            }
                        }
                        this.updatedSidebarLinks.push(currentLink)
                    }
                }
            }
        },
        data() {
            return {
                updatedSidebarLinks: []
            }
        },
        created() {
            this.authenticateSidebarLinks(sidebarLinks)
        },
        computed: {
            authorizedSidebarLinks() {
                return this.updatedSidebarLinks;
            }
        }
    }

</script>

<style lang="scss">

</style>
