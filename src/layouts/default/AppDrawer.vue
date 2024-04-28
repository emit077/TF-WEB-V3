<style lang="scss" scoped>
.v-list-item--active {
    color: rgb(var(--v-theme-primary)) !important;
    background-color: rgb(var(--v-theme-secondary), 1) !important;
}
</style>

<template>
    <!-- drawer -->
    <v-navigation-drawer v-model="drawer" :temporary="$vuetify.display.mobile" color="primary" width="220"
        class="ml-1 rounded-lg">
        <div class="text-center pt-3">
            <img src="@/assets/logo/logo.svg" alt="">
        </div>
        <v-divider class="bg-theme_secondary"></v-divider>
        <v-list density="compact" nav>
            <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary rounded-lg">
                <v-list-item-title class="py-1 pl-1">
                    <span class="text-subtitle-1 font-bold">{{ item.title }}</span>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>


    <!-- app bar -->
    <v-app-bar color="" prominent>
        <!-- <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon> -->

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
            <!-- <v-btn icon="mdi-magnify" variant="text"></v-btn> -->
            <!-- <v-btn icon="mdi-filter" variant="text"></v-btn> -->
        </template>
        <v-btn icon="mdi-dots-vertical" variant="text" @click.stop="drawer = !drawer"></v-btn>
    </v-app-bar>
</template>
<script>
export default {
    data: () => ({
        drawer: true,
        group: null,
        items: [
            {
                title: "Overview",
                url: { name: "overview" },
                icon: "mdi-view-dashboard",
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            {
                title: "Subscription Plans",
                url: { name: "subscription_list" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            {
                title: "Subscription History",
                url: { name: "student_subscription_history" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            {
                title: "Students",
                url: { name: "student_list" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            {
                title: "Tutors",
                url: { name: "tutor_list" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            {
                title: "Our Team",
                url: { name: "bda_list" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            // batch
            {
                title: "Classes",
                url: { name: "session_list" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            // payment
            {
                title: "Payments",
                url: { name: "payment_list" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            {
                title: "Leads",
                url: { name: "lead_list" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            {
                title: "Demo",
                url: { name: "demo_list" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            {
                title: "Payouts",
                url: { name: "payouts" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            },
            {
                title: "Support",
                url: { name: "support_ticket" },
                is_active_tab: false,
                access_type: ['list', "add", "edit", "delete"]
            }],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>