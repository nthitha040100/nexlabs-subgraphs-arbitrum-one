import { Bytes } from "@graphprotocol/graph-ts"
import {
  CompleteRebalanceActions as CompleteRebalanceActionsEvent,
  FirstRebalanceAction as FirstRebalanceActionEvent,
  SecondRebalanceAction as SecondRebalanceActionEvent
} from "../generated/IndexBalancerMAG7/IndexBalancerMAG7"
import { MAG7RebalanceAction } from "../generated/schema"
import { RebalanceActionType } from "./helper/enums"
import { CHAIN } from "./helper/constant"

function makeId(eventHash: Bytes, logIndex: i32): Bytes {
  return eventHash.concatI32(logIndex)
}

export function handleCompleteRebalanceActions(
  event: CompleteRebalanceActionsEvent
): void {
  let id = makeId(event.transaction.hash, event.logIndex.toI32())
  let action = new MAG7RebalanceAction(id)

  action.type = RebalanceActionType.COMPLETE
  action.network = CHAIN
  action.nonce = event.params.nonce
  action.time = event.params.time

  action.blockNumber = event.block.number
  action.blockTimestamp = event.block.timestamp
  action.transactionHash = event.transaction.hash

  action.save()
}

export function handleFirstRebalanceAction(
  event: FirstRebalanceActionEvent
): void {
  let id = makeId(event.transaction.hash, event.logIndex.toI32())
  let action = new MAG7RebalanceAction(id)

  action.type = RebalanceActionType.FIRST
  action.network = CHAIN
  action.nonce = event.params.nonce
  action.time = event.params.time

  action.blockNumber = event.block.number
  action.blockTimestamp = event.block.timestamp
  action.transactionHash = event.transaction.hash

  action.save()
}

export function handleSecondRebalanceAction(
  event: SecondRebalanceActionEvent
): void {
  let id = makeId(event.transaction.hash, event.logIndex.toI32())
  let action = new MAG7RebalanceAction(id)

  action.type = RebalanceActionType.SECOND
  action.network = CHAIN
  action.nonce = event.params.nonce
  action.time = event.params.time

  action.blockNumber = event.block.number
  action.blockTimestamp = event.block.timestamp
  action.transactionHash = event.transaction.hash

  action.save()
}
