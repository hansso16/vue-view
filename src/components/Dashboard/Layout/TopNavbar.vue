<template>
    <navbar :show-navbar="showNavbar">
        <div class="navbar-wrapper">
            <div class="navbar-minimize">
                <button id="minimizeSidebar" class="btn btn-icon btn-round" @click="minimizeSidebar">
                    <i class="nc-icon nc-minimal-right text-center visible-on-sidebar-mini"></i>
                    <i class="nc-icon nc-minimal-left text-center visible-on-sidebar-regular"></i>
                </button>
            </div>
            <div class="navbar-toggle">
                <navbar-toggle-button @click.native="toggleSidebar">

                </navbar-toggle-button>
            </div>
            <a class="navbar-brand" href="#">COMP NAME OR USERNAME</a>
        </div>

        <template slot="navbar-menu">
            <form>
                <div class="input-group no-border">
                    <input type="text" value="" class="form-control" placeholder="Search...">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <i class="nc-icon nc-zoom-split"></i>
                        </div>
                    </div>
                </div>
            </form>
            <ul class="navbar-nav">
                <drop-down icon="fa fa-lock" tag="li"
                                     position="right"
                                     direction="none"
                                     class="nav-item dropdown">
                    <a slot="title"
                         slot-scope="{isOpen}"
                         class="nav-link dropdown-toggle"
                         data-toggle="dropdown"
                         aria-haspopup="true"
                         :aria-expanded="isOpen">
                        <i class="fa fa-lock"></i>
                        <p>
                            <span class="d-lg-none d-md-block">Some Actions</span>
                        </p>
                    </a>
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </drop-down>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color:red;" @click.prevent="logout">
                        <i class="nc-icon nc-button-power"></i>
                        <p>
                            <span class="">Logout</span>
                        </p>
                    </a>
                </li>
            </ul>
        </template>
    </navbar>
</template>
<script>
    import { Navbar, NavbarToggleButton } from 'src/components/UIComponents'

    export default {
        components: {
            Navbar,
            NavbarToggleButton
        },
        data() {
            return {
                activeNotifications: false,
                showNavbar: false
            }
        },
        methods: {
            capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1)
            },
            toggleNotificationDropDown() {
                this.activeNotifications = !this.activeNotifications
            },
            closeDropDown() {
                this.activeNotifications = false
            },
            toggleSidebar() {
                this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
            },
            hideSidebar() {
                this.$sidebar.displaySidebar(false)
            },
            minimizeSidebar() {
                this.$sidebar.toggleMinimize()
            },
            toggleNavbar() {
                this.showNavbar = !this.showNavbar;
            },
            logout() {
                this.$store.dispatch('logout');
            }
        }
    }

</script>
<style scoped>
</style>
