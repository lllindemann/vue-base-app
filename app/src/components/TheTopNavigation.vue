<!--  CLASS IS NOT USED ANYMORE  -->
<script lang="ts">
import { ref } from "vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faPhone,
    faPerson,
    faList,
    faMap,
    faUser,
    faGear,
    faUserGroup,
    faNewspaper,
    faInfo,
    faShield
} from "@fortawesome/free-solid-svg-icons";

//ADD ICONS to FONTAWESOME Lib
library.add(faPhone, faPerson, faList, faMap, faUserGroup, faUser, faNewspaper, faGear, faInfo, faShield);


export default {
    setup() {
        const showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, toggleNav };
    },
};
</script>

<template>
    <div>
        <nav class="absolute p-2 pt-3 text-slate-400 transition-all">
            <div class="flex items-center justify-between">
                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex">
                    <button type="button" class="hover:text-baseGray-400 focus:text-baseGray-400 focus:outline-none">
                        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

        <div :class="showMenu ? '' : 'hidden'">
            <!-- Sidebar -->
            <div class="fixed inset-0 top-10 z-20 flex">
                <!-- Fixed and Flex frame for Sidebar and Dimmer  -->
                <!-- Absolute Frame for Sidebar Content   -->
                <div class="absolute max-h-full bg-baseGray-100">
                    <!-- Sidebar Content -->
                    <div class="flex items-center justify-center overflow-hidden bg-baseGray-50">
                        <div class="rounded bg-neutral-50 py-4 px-3 ">
                            <ul class="">
                                <li>
                                    <router-link to="/">
                                        <a
                                            class="flex items-center rounded-lg p-2 text-base font-normal text-baseGray-500 hover:bg-primary-100 hover:text-primary-600">
                                            <FontAwesomeIcon icon="user" />
                                            <span class="ml-3 ">Profile</span>
                                        </a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/settings">
                                        <a
                                            class="flex items-center rounded-lg p-2 text-base font-normal text-baseGray-500 hover:bg-primary-100 hover:text-primary-600">
                                            <FontAwesomeIcon icon="gear" />
                                            <span class="ml-3 ">Settings</span>
                                        </a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        <a
                                            class="flex items-center rounded-lg p-2 text-base font-normal text-baseGray-500 hover:bg-primary-100 hover:text-primary-600">
                                            <FontAwesomeIcon icon="phone" />
                                            <span class="ml-3 ">Contact</span>
                                        </a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        <a
                                            class="flex items-center rounded-lg p-2 text-base font-normal text-baseGray-500 hover:bg-primary-100 hover:text-primary-600">
                                            <FontAwesomeIcon icon="shield" />
                                            <span class="ml-3 ">Policy</span>
                                        </a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        <a
                                            class="flex items-center rounded-lg p-2 text-base font-normal text-baseGray-500 hover:bg-primary-100 hover:text-primary-600">
                                            <FontAwesomeIcon icon="info" />
                                            <span class="ml-3 ">Imprint</span>
                                        </a>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
