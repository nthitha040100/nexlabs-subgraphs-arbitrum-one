import { dataSource } from "@graphprotocol/graph-ts"
import {
  CompleteRebalanceActions as CompleteRebalanceActionsEvent,
  FirstRebalanceAction as FirstRebalanceActionEvent,
  SecondRebalanceAction as SecondRebalanceActionEvent
} from "../generated/IndexBalancerMAG7/IndexBalancerMAG7"
import {
  MAG7CompleteRebalanceActions,
  MAG7FirstRebalanceAction,
  MAG7SecondRebalanceAction
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