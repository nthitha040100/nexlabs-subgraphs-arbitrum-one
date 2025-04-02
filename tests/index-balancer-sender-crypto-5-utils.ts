import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  AskValuesCompleted,
  FirstReweightActionCompleted,
  Initialized,
  MessageSent,
  OwnershipTransferred,
  SecondReweightActionCompleted
} from "../generated/IndexBalancerSenderCRYPTO5/IndexBalancerSenderCRYPTO5"

export function createAskValuesCompletedEvent(
  time: BigInt
): AskValuesCompleted {
  let askValuesCompletedEvent = changetype<AskValuesCompleted>(newMockEvent())

  askValuesCompletedEvent.parameters = new Array()

  askValuesCompletedEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return askValuesCompletedEvent
}

export function createFirstReweightActionCompletedEvent(
  time: BigInt
): FirstReweightActionCompleted {
  let firstReweightActionCompletedEvent =
    changetype<FirstReweightActionCompleted>(newMockEvent())

  firstReweightActionCompletedEvent.parameters = new Array()

  firstReweightActionCompletedEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return firstReweightActionCompletedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createMessageSentEvent(messageId: Bytes): MessageSent {
  let messageSentEvent = changetype<MessageSent>(newMockEvent())

  messageSentEvent.parameters = new Array()

  messageSentEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )

  return messageSentEvent
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

export function createSecondReweightActionCompletedEvent(
  time: BigInt
): SecondReweightActionCompleted {
  let secondReweightActionCompletedEvent =
    changetype<SecondReweightActionCompleted>(newMockEvent())

  secondReweightActionCompletedEvent.parameters = new Array()

  secondReweightActionCompletedEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return secondReweightActionCompletedEvent
}
