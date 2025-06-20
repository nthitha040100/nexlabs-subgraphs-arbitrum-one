import { dataSource } from "@graphprotocol/graph-ts"
import {
  AskValuesCompleted as AskValuesCompletedEvent,
  FirstReweightActionCompleted as FirstReweightActionCompletedEvent,
  Initialized as InitializedEvent,
  MessageSent as MessageSentEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SecondReweightActionCompleted as SecondReweightActionCompletedEvent,
} from "../generated/IndexBalancerSenderANFI/IndexBalancerSenderANFI"
import {
  ANFIAskValuesCompleted,
  ANFIFirstReweightActionCompleted,
  ANFIInitialized,
  ANFIMessageSent,
  ANFIOwnershipTransferred,
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

export function handleInitialized(event: InitializedEvent): void {
  let entity = new ANFIInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version
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

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new ANFIOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
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
