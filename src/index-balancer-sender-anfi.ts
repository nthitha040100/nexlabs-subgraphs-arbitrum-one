import {
  AskValuesCompleted as AskValuesCompletedEvent,
  FirstReweightActionCompleted as FirstReweightActionCompletedEvent,
  MessageSent as MessageSentEvent,
  SecondReweightActionCompleted as SecondReweightActionCompletedEvent,
} from "../generated/IndexBalancerSenderANFI/IndexBalancerSenderANFI"
import {
  ANFIReweightAction,
  ANFIMessageSent,
} from "../generated/schema"
import { ReweightActionType } from "./helper/enums"
import { CHAIN } from "./helper/constant"

export function handleAskValuesCompleted(
  event: AskValuesCompletedEvent
): void {
  let id = event.transaction.hash.concatI32(event.logIndex.toI32())
  let action = new ANFIReweightAction(id)

  action.type = ReweightActionType.ASK_VALUES_COMPLETED
  action.network = CHAIN
  action.time = event.params.time

  action.blockNumber = event.block.number
  action.blockTimestamp = event.block.timestamp
  action.transactionHash = event.transaction.hash

  action.save()
}

export function handleFirstReweightActionCompleted(
  event: FirstReweightActionCompletedEvent
): void {
  let id = event.transaction.hash.concatI32(event.logIndex.toI32())
  let action = new ANFIReweightAction(id)

  action.type = ReweightActionType.FIRST_REWEIGHT_ACTION_COMPLETED
  action.network = CHAIN
  action.time = event.params.time

  action.blockNumber = event.block.number
  action.blockTimestamp = event.block.timestamp
  action.transactionHash = event.transaction.hash

  action.save()
}

export function handleSecondReweightActionCompleted(
  event: SecondReweightActionCompletedEvent
): void {
  let id = event.transaction.hash.concatI32(event.logIndex.toI32())
  let action = new ANFIReweightAction(id)

  action.type = ReweightActionType.SECOND_REWEIGHT_ACTION_COMPLETED
  action.network = CHAIN
  action.time = event.params.time

  action.blockNumber = event.block.number
  action.blockTimestamp = event.block.timestamp
  action.transactionHash = event.transaction.hash

  action.save()
}

export function handleMessageSent(event: MessageSentEvent): void {
  let entity = new ANFIMessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId
  entity.network = CHAIN
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}
