import { dataSource } from "@graphprotocol/graph-ts"
import {
  RequestCancelIssuance as RequestCancelIssuanceEvent,
  RequestCancelRedemption as RequestCancelRedemptionEvent,
  RequestIssuance as RequestIssuanceEvent,
  RequestRedemption as RequestRedemptionEvent,
} from "../generated/IndexFactoryMAG7/IndexFactoryMAG7"
import {
  MAG7RequestCancelIssuance,
  MAG7RequestCancelRedemption,
  MAG7RequestIssuance,
  MAG7RequestRedemption,
} from "../generated/schema"

export function handleRequestCancelIssuance(
  event: RequestCancelIssuanceEvent,
): void {
  let entity = new MAG7RequestCancelIssuance(
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

export function handleRequestCancelRedemption(
  event: RequestCancelRedemptionEvent,
): void {
  let entity = new MAG7RequestCancelRedemption(
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

export function handleRequestIssuance(event: RequestIssuanceEvent): void {
  let entity = new MAG7RequestIssuance(
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

export function handleRequestRedemption(event: RequestRedemptionEvent): void {
  let entity = new MAG7RequestRedemption(
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
