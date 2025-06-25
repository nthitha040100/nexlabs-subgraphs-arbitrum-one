import { dataSource } from "@graphprotocol/graph-ts"
import {
  Issuanced as IssuancedEvent,
  Redemption as RedemptionEvent,
} from "../generated/IndexFactoryARBEI/IndexFactoryARBEI"
import {
  ARBEIIssuanced,
  ARBEIRedemption,
} from "../generated/schema"

export function handleIssuanced(event: IssuancedEvent): void {
  let entity = new ARBEIIssuanced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.user = event.params.user
  entity.inputToken = event.params.inputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.time = event.params.time
  entity.price= event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedemption(event: RedemptionEvent): void {
  let entity = new ARBEIRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.user = event.params.user
  entity.outputToken = event.params.outputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.time = event.params.time
  entity.price= event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}