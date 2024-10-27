<template>
    <div class="bg-gray-300 rounded-lg m-4">
        <div class="w-full h-2/3 p-2">
            <Icon name="icon-park-twotone:washing-machine-one" class="icon-scale" />
        </div> 
        <div class="w-full h-1/3 p-2">
            <div class="text-center text-sm font-semibold">
                Machine #{{ props.machine.number }}
            </div>
            <div class="text-center text-xs pb-2">
                {{ props.machine.status }}<span v-if="props.machine.status === MachineStatus.running"> with {{ props.machine.timeRemaining }}m left</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MachineStatus, type Machine } from '~/types/Machine';
const props = defineProps({
    machine: {
        type: Object as PropType<Machine>,
        required: true
    }
})

</script>

<style scoped>
.icon-scale {
    width: 100%;
    height: 100%;
}

</style>