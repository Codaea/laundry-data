export enum MachineType {
    Washer,
    Drier,
}
/**
 * pressStart: When Machine is ready to start
 * running: When Machine is running, timeRemaining is available
 * idle: When Laundry is left in machine?
 */
export enum MachineStatus {
    pressStart = 'Ready to Start',
    running = 'Running',
    idle = 'Idle',
}

/**
 * hasError: Machine has some error
 * inUse: Machine is in use
 * offline: Machine is offline
 */
export enum MachineNotAvailable {
    hasError = 'Machine Error',
    inUse = 'In Use',
    offline = 'Offline',
}

/**
 * number: sticker number on machine
 * type: Washer or Drier
 * status: status enum, pressStart, running, idle
 * timeRemaining: time remaining in minutes
 * notAvalibleReason: optional, if machine is not available because of use or error (or offline). usually null
 */
export interface Machine {
    number: number;
    type: MachineType;
    status: MachineStatus;
    timeRemaining?: number;
    notAvalibleReason?: MachineNotAvailable; // optional
}

