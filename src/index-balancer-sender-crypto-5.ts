import { dataSource } from "@graphprotocol/graph-ts"
import {
  AskValuesCompleted as AskValuesCompletedEvent,
  FirstReweightActionCompleted as FirstReweightActionCompletedEvent,
  MessageSent as MessageSentEvent,
  SecondReweightActionCompleted as SecondReweightActionCompletedEvent,
} from "../generated/IndexBalancerSenderCRYPTO5/IndexBalancerSenderCRYPTO5"
import {
  CRYPTO5AskValuesCompleted,
  CRYPTO5FirstReweightActionCompleted,
  CRYPTO5MessageSent,
  CRYPTO5SecondReweightActionCompleted,
} from "../generated/schema"

export function handleAskValuesCompleted(event: AskValuesCompletedEvent): void {
  let entity = new CRYPTO5AskValuesCompleted(
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
  let entity = new CRYPTO5FirstReweightActionCompleted(
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
  let entity = new CRYPTO5MessageSent(
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
  let entity = new CRYPTO5SecondReweightActionCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
