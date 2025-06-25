import { dataSource } from "@graphprotocol/graph-ts"
import {
  IssuanceCancelled as IssuanceCancelledEvent,
  Issuanced as IssuancedEvent,
  Redemption as RedemptionEvent,
  RedemptionCancelled as RedemptionCancelledEvent
} from "../generated/IndexProcessorMAG7/IndexProcessorMAG7"
import {
  MAG7IssuanceCancelled,
  MAG7Issuanced,
  MAG7Redemption,
  MAG7RedemptionCancelled,
} from "../generated/schema"

export function handleIssuanceCancelled(event: IssuanceCancelledEvent): void {
  let entity = new MAG7IssuanceCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.inputToken = event.params.inputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIssuanced(event: IssuancedEvent): void {
  let entity = new MAG7Issuanced(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.inputToken = event.params.inputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.price = event.params.price
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedemption(event: RedemptionEvent): void {
  let entity = new MAG7Redemption(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.outputToken = event.params.outputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.price = event.params.price
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedemptionCancelled(
  event: RedemptionCancelledEvent,
): void {
  let entity = new MAG7RedemptionCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.outputToken = event.params.outputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
