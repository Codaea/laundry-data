<template>
    <h1 class="text-2xl text-center">Machine Status Page</h1>

    <div class="flex flex-row">
        <div class="w-1/2 h-screen border-r-2 border-gray-300">
            <p class="text-center lg">Washers</p>
            <p class="text-center md">{{ washers.filter(washer => washer.status === MachineStatus.pressStart).length }}/{{ driers.length }} in use</p>

            <div v-for="machine in washers" :key="machine.number" class="m-5">
                <MachineCard :machine="machine" class="h-32" />
            </div>
        </div>
        <div class="w-1/2 h-screen border-l-2 border-gray-300">
            <p class="text-center lg">Driers</p>
            <p class="text-center md">{{ driers.filter(drier => drier.status === MachineStatus.pressStart).length }}/{{ driers.length }} in use</p>
            <div v-for="machine in driers" :key="machine.number" class="m-5">
                <MachineCard :machine="machine" class="h-32" />
            </div>
        </div>
        

        </div>
</template>


<script setup lang="ts">
import { type Machine, MachineType, MachineStatus, MachineNotAvailable } from '~/types/Machine'

// schema in what i want shit
const machines : Machine[] = [
    {
        number: 1,
        type: MachineType.Washer,
        status: MachineStatus.running,
        timeRemaining: 10,
    },
    {
        number: 2,
        type: MachineType.Drier,
        status: MachineStatus.idle,
        timeRemaining: 0,
    },
    {
        number: 3,
        type: MachineType.Washer,
        status: MachineStatus.idle,
        timeRemaining: 50,
    },
    {
        number: 4,
        type: MachineType.Drier,
        status: MachineStatus.running,
        timeRemaining: 5,
    },
    {
        number: 5,
        type: MachineType.Washer,
        status: MachineStatus.idle,
        notAvalibleReason: MachineNotAvailable.hasError,
        
    },
    {
        number: 6,
        type: MachineType.Drier,
        status: MachineStatus.pressStart,
    },
    {
        number: 7,
        type: MachineType.Washer,
        status: MachineStatus.pressStart
    }
    
]

const washers = machines.filter(machine => machine.type === MachineType.Washer);
const driers = machines.filter(machine => machine.type === MachineType.Drier);
</script>