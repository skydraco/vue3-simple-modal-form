<template>
    <div :class="['modal', { modal__open: enabled }]" @click="hideModal">
        <div class="modal__container uk-container uk-container-small">
            <div :class="['modal__content', { modal__content_sm: windowSmall }]">
                <div class="modal__close" @click="hideModal($event, true)">
                    <SvgClose viewBox="0 0 20 20" />
                </div>

                <slot>
                    <!-- Here is the modal content -->
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import SvgClose from "@/assets/svg/close.svg";
import { computed, watch } from "vue";
import { useStore } from "vuex";
import "@/assets/sass/style.sass";

const props = defineProps({
    windowSmall: Boolean,
});

const store = useStore();
const enabled = computed(() => store.state.modal.name);

function hideModal(prop, force = false) {
    if (!prop.target.closest(".modal") || force) {
        store.commit("modal/CALL_MODAL", false);
    }
}

watch(enabled, (value) => {
    if (document.body && value) {
        document.body.classList.add("modal-open");
    }
    if (document.body && !value) {
        document.body.classList.remove("modal-open");
    }
});
</script>
