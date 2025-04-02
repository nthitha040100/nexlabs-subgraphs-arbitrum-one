import { dataSource } from "@graphprotocol/graph-ts"
import {
  CompleteRebalanceActions as CompleteRebalanceActionsEvent,
  FirstRebalanceAction as FirstRebalanceActionEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  SecondRebalanceAction as SecondRebalanceActionEvent,
  Unpaused as UnpausedEvent,
} from "../generated/IndexBalancerMAG7/IndexBalancerMAG7"
import {
  MAG7CompleteRebalanceActions,
  MAG7FirstRebalanceAction,
  MAG7Initialized,
  MAG7OwnershipTransferred,
  MAG7Paused,
  MAG7SecondRebalanceAction,
  MAG7Unpaused,
} from "../generated/schema"

export function handleCompleteRebalanceActions(
  event: CompleteRebalanceActionsEvent,
): void {
  let entity = new MAG7CompleteRebalanceActions(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nonce = event.params.nonce
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFirstRebalanceAction(
  event: FirstRebalanceActionEvent,
): void {
  let entity = new MAG7FirstRebalanceAction(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nonce = event.params.nonce
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new MAG7Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new MAG7OwnershipTransferred(
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

export function handlePaused(event: PausedEvent): void {
  let entity = new MAG7Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSecondRebalanceAction(
  event: SecondRebalanceActionEvent,
): void {
  let entity = new MAG7SecondRebalanceAction(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nonce = event.params.nonce
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new MAG7Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
