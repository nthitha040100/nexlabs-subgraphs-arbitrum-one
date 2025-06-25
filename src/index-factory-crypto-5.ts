import { dataSource } from "@graphprotocol/graph-ts"
import {
  RequestIssuance as RequestIssuanceEvent,
  RequestRedemption as RequestRedemptionEvent,
} from "../generated/IndexFactoryCRYPTO5/IndexFactoryCRYPTO5"
import {
  CRYPTO5RequestIssuance,
  CRYPTO5RequestRedemption,
} from "../generated/schema"

export function handleRequestIssuance(event: RequestIssuanceEvent): void {
  let entity = new CRYPTO5RequestIssuance(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId
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
  let entity = new CRYPTO5RequestRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId
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
