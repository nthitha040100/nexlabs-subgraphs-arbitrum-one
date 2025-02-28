import { dataSource } from "@graphprotocol/graph-ts"
import {
  Approval as ApprovalEvent,
  FeeRateSet as FeeRateSetEvent,
  FeeReceiverSet as FeeReceiverSetEvent,
  Initialized as InitializedEvent,
  MethodologistSet as MethodologistSetEvent,
  MethodologySet as MethodologySetEvent,
  MintFeeToReceiver as MintFeeToReceiverEvent,
  MinterSet as MinterSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  SupplyCeilingSet as SupplyCeilingSetEvent,
  ToggledRestricted as ToggledRestrictedEvent,
  Transfer as TransferEvent,
  Unpaused as UnpausedEvent,
} from "../generated/IndexTokenARBEI/IndexTokenARBEI"
import {
  ARBEIApproval,
  ARBEIFeeRateSet,
  ARBEIFeeReceiverSet,
  ARBEIInitialized,
  ARBEIMethodologistSet,
  ARBEIMethodologySet,
  ARBEIMintFeeToReceiver,
  ARBEIMinterSet,
  ARBEIOwnershipTransferred,
  ARBEIPaused,
  ARBEISupplyCeilingSet,
  ARBEIToggledRestricted,
  ARBEITransfer,
  ARBEIUnpaused,
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

export function handleFeeRateSet(event: FeeRateSetEvent): void {
  let entity = new ARBEIFeeRateSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.feeRatePerDayScaled = event.params.feeRatePerDayScaled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeReceiverSet(event: FeeReceiverSetEvent): void {
  let entity = new ARBEIFeeReceiverSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.feeReceiver = event.params.feeReceiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new ARBEIInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMethodologistSet(event: MethodologistSetEvent): void {
  let entity = new ARBEIMethodologistSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.methodologist = event.params.methodologist

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMethodologySet(event: MethodologySetEvent): void {
  let entity = new ARBEIMethodologySet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.methodology = event.params.methodology

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintFeeToReceiver(event: MintFeeToReceiverEvent): void {
  let entity = new ARBEIMintFeeToReceiver(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.feeReceiver = event.params.feeReceiver
  entity.timestamp = event.params.timestamp
  entity.totalSupply = event.params.totalSupply
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterSet(event: MinterSetEvent): void {
  let entity = new ARBEIMinterSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.minter = event.params.minter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new ARBEIOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new ARBEIPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSupplyCeilingSet(event: SupplyCeilingSetEvent): void {
  let entity = new ARBEISupplyCeilingSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.supplyCeiling = event.params.supplyCeiling

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleToggledRestricted(event: ToggledRestrictedEvent): void {
  let entity = new ARBEIToggledRestricted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.account = event.params.account
  entity.isRestricted = event.params.isRestricted

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

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new ARBEIUnpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
