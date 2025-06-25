import { dataSource } from "@graphprotocol/graph-ts"
import {
  AskValuesCompleted as AskValuesCompletedEvent,
  FirstReweightActionCompleted as FirstReweightActionCompletedEvent,
  MessageSent as MessageSentEvent,
  SecondReweightActionCompleted as SecondReweightActionCompletedEvent,
} from "../generated/IndexBalancerSenderANFI/IndexBalancerSenderANFI"
import {
  ANFIAskValuesCompleted,
  ANFIFirstReweightActionCompleted,
  ANFIMessageSent,
  ANFISecondReweightActionCompleted,
} from "../generated/schema"

export function handleAskValuesCompleted(event: AskValuesCompletedEvent): void {
  let entity = new ANFIAskValuesCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFirstReweightActionCompleted(
  event: FirstReweightActionCompletedEvent,
): void {
  let entity = new ANFIFirstReweightActionCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageSent(event: MessageSentEvent): void {
  let entity = new ANFIMessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSecondReweightActionCompleted(
  event: SecondReweightActionCompletedEvent,
): void {
  let entity = new ANFISecondReweightActionCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
