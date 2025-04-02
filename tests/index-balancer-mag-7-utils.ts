import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CompleteRebalanceActions,
  FirstRebalanceAction,
  Initialized,
  OwnershipTransferred,
  Paused,
  SecondRebalanceAction,
  Unpaused
} from "../generated/IndexBalancerMAG7/IndexBalancerMAG7"

export function createCompleteRebalanceActionsEvent(
  nonce: BigInt,
  time: BigInt
): CompleteRebalanceActions {
  let completeRebalanceActionsEvent = changetype<CompleteRebalanceActions>(
    newMockEvent()
  )

  completeRebalanceActionsEvent.parameters = new Array()

  completeRebalanceActionsEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  completeRebalanceActionsEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return completeRebalanceActionsEvent
}

export function createFirstRebalanceActionEvent(
  nonce: BigInt,
  time: BigInt
): FirstRebalanceAction {
  let firstRebalanceActionEvent = changetype<FirstRebalanceAction>(
    newMockEvent()
  )

  firstRebalanceActionEvent.parameters = new Array()

  firstRebalanceActionEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  firstRebalanceActionEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return firstRebalanceActionEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createSecondRebalanceActionEvent(
  nonce: BigInt,
  time: BigInt
): SecondRebalanceAction {
  let secondRebalanceActionEvent = changetype<SecondRebalanceAction>(
    newMockEvent()
  )

  secondRebalanceActionEvent.parameters = new Array()

  secondRebalanceActionEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  secondRebalanceActionEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return secondRebalanceActionEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
