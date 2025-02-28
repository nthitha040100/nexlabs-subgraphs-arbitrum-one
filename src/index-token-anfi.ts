import { dataSource } from "@graphprotocol/graph-ts"
import {
  Approval as ApprovalEvent,
  FeeRateSet as FeeRateSetEvent,
  FeeReceiverSet as FeeReceiverSetEvent,
  Initialized as InitializedEvent,
  MethodologistSet as MethodologistSetEvent,
  MethodologySet as MethodologySetEvent,
  MintFeeToReceiver as MintFeeToReceiverEvent,
  MinterRemoved as MinterRemovedEvent,
  MinterSet as MinterSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  SupplyCeilingSet as SupplyCeilingSetEvent,
  ToggledRestricted as ToggledRestrictedEvent,
  Transfer as TransferEvent,
  Unpaused as UnpausedEvent,
} from "../generated/IndexTokenANFI/IndexTokenANFI"
import {
  ANFIApproval,
  ANFIFeeRateSet,
  ANFIFeeReceiverSet,
  ANFIInitialized,
  ANFIMethodologistSet,
  ANFIMethodologySet,
  ANFIMintFeeToReceiver,
  ANFIMinterRemoved,
  ANFIMinterSet,
  ANFIOwnershipTransferred,
  ANFIPaused,
  ANFISupplyCeilingSet,
  ANFIToggledRestricted,
  ANFITransfer,
  ANFIUnpaused,
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new ANFIApproval(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeRateSet(event: FeeRateSetEvent): void {
  let entity = new ANFIFeeRateSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.feeRatePerDayScaled = event.params.feeRatePerDayScaled
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeReceiverSet(event: FeeReceiverSetEvent): void {
  let entity = new ANFIFeeReceiverSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.feeReceiver = event.params.feeReceiver
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new ANFIInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMethodologistSet(event: MethodologistSetEvent): void {
  let entity = new ANFIMethodologistSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.methodologist = event.params.methodologist
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMethodologySet(event: MethodologySetEvent): void {
  let entity = new ANFIMethodologySet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.methodology = event.params.methodology
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintFeeToReceiver(event: MintFeeToReceiverEvent): void {
  let entity = new ANFIMintFeeToReceiver(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.feeReceiver = event.params.feeReceiver
  entity.timestamp = event.params.timestamp
  entity.totalSupply = event.params.totalSupply
  entity.amount = event.params.amount
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterRemoved(event: MinterRemovedEvent): void {
  let entity = new ANFIMinterRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.minter = event.params.minter
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterSet(event: MinterSetEvent): void {
  let entity = new ANFIMinterSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.minter = event.params.minter
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new ANFIOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new ANFIPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSupplyCeilingSet(event: SupplyCeilingSetEvent): void {
  let entity = new ANFISupplyCeilingSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.supplyCeiling = event.params.supplyCeiling
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleToggledRestricted(event: ToggledRestrictedEvent): void {
  let entity = new ANFIToggledRestricted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account
  entity.isRestricted = event.params.isRestricted
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new ANFITransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new ANFIUnpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account
  entity.network = dataSource.network()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
