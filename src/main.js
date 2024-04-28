/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import globalMixin from "./mixins/globalMixin";
// global veriables
import keys from "./helper/keys";
import urls from "./helper/urls";
import rules from "./helper/rules";
import messages from "./helper/messages";
import lang from "./helper/lang";

// global components
import CreateBtn from "./components/buttons/CreateBtn.vue";
import DetailBtn from "./components/buttons/DetailBtn.vue";
import EditBtn from "./components/buttons/EditBtn.vue";
import FilterBtn from "./components/buttons/FilterBtn.vue";
import FormCancelBtn from "./components/buttons/FormCancelBtn.vue";
import FormSaveBtn from "./components/buttons/FormSaveBtn.vue";

const app = createApp({
  extends: App,
  mixins: [globalMixin],
  components: {
    CreateBtn,
    DetailBtn,
    EditBtn,
    FilterBtn,
    FormCancelBtn,
    FormSaveBtn,
  },
});

app.config.globalProperties.$keys = keys;
app.config.globalProperties.$lang = lang;
app.config.globalProperties.$rules = rules;
app.config.globalProperties.$urls = urls;
app.config.globalProperties.$messages = messages;

registerPlugins(app);

app.mount("#app");
