import { dataSource } from "@graphprotocol/graph-ts"
import {
  Issuanced as IssuancedEvent,
  Redemption as RedemptionEvent,
} from "../generated/IndexCoreSenderANFI/IndexCoreSenderANFI"
import {
  ANFIIssuanced,
  ANFIRedemption,
} from "../generated/schema"

export function handleIssuanced(event: IssuancedEvent): void {
  let entity = new ANFIIssuanced(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId
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
  let entity = new ANFIRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId
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
