import { dataSource } from "@graphprotocol/graph-ts"
import {
  Rebalanced as RebalancedEvent
} from "../generated/IndexBalancerARBEI/IndexBalancerARBEI"
import {
  ARBEIRebalanced
} from "../generated/schema"

export function handleRebalanced(event: RebalancedEvent): void {
  let entity = new ARBEIRebalanced(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.time = event.params.time
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}