import { dataSource } from "@graphprotocol/graph-ts"
import {
  Approval as ApprovalEvent,
  Transfer as TransferEvent,
} from "../generated/IndexTokenARBEI/IndexTokenARBEI"
import {
  ARBEIApproval,
  ARBEITransfer,
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new ARBEIApproval(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new ARBEITransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
