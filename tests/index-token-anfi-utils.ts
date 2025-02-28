import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  FeeRateSet,
  FeeReceiverSet,
  Initialized,
  MethodologistSet,
  MethodologySet,
  MintFeeToReceiver,
  MinterRemoved,
  MinterSet,
  OwnershipTransferred,
  Paused,
  SupplyCeilingSet,
  ToggledRestricted,
  Transfer,
  Unpaused
} from "../generated/IndexTokenANFI/IndexTokenANFI"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createFeeRateSetEvent(feeRatePerDayScaled: BigInt): FeeRateSet {
  let feeRateSetEvent = changetype<FeeRateSet>(newMockEvent())

  feeRateSetEvent.parameters = new Array()

  feeRateSetEvent.parameters.push(
    new ethereum.EventParam(
      "feeRatePerDayScaled",
      ethereum.Value.fromUnsignedBigInt(feeRatePerDayScaled)
    )
  )

  return feeRateSetEvent
}

export function createFeeReceiverSetEvent(
  feeReceiver: Address
): FeeReceiverSet {
  let feeReceiverSetEvent = changetype<FeeReceiverSet>(newMockEvent())

  feeReceiverSetEvent.parameters = new Array()

  feeReceiverSetEvent.parameters.push(
    new ethereum.EventParam(
      "feeReceiver",
      ethereum.Value.fromAddress(feeReceiver)
    )
  )

  return feeReceiverSetEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createMethodologistSetEvent(
  methodologist: Address
): MethodologistSet {
  let methodologistSetEvent = changetype<MethodologistSet>(newMockEvent())

  methodologistSetEvent.parameters = new Array()

  methodologistSetEvent.parameters.push(
    new ethereum.EventParam(
      "methodologist",
      ethereum.Value.fromAddress(methodologist)
    )
  )

  return methodologistSetEvent
}

export function createMethodologySetEvent(methodology: string): MethodologySet {
  let methodologySetEvent = changetype<MethodologySet>(newMockEvent())

  methodologySetEvent.parameters = new Array()

  methodologySetEvent.parameters.push(
    new ethereum.EventParam(
      "methodology",
      ethereum.Value.fromString(methodology)
    )
  )

  return methodologySetEvent
}

export function createMintFeeToReceiverEvent(
  feeReceiver: Address,
  timestamp: BigInt,
  totalSupply: BigInt,
  amount: BigInt
): MintFeeToReceiver {
  let mintFeeToReceiverEvent = changetype<MintFeeToReceiver>(newMockEvent())

  mintFeeToReceiverEvent.parameters = new Array()

  mintFeeToReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "feeReceiver",
      ethereum.Value.fromAddress(feeReceiver)
    )
  )
  mintFeeToReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  mintFeeToReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "totalSupply",
      ethereum.Value.fromUnsignedBigInt(totalSupply)
    )
  )
  mintFeeToReceiverEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return mintFeeToReceiverEvent
}

export function createMinterRemovedEvent(minter: Address): MinterRemoved {
  let minterRemovedEvent = changetype<MinterRemoved>(newMockEvent())

  minterRemovedEvent.parameters = new Array()

  minterRemovedEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )

  return minterRemovedEvent
}

export function createMinterSetEvent(minter: Address): MinterSet {
  let minterSetEvent = changetype<MinterSet>(newMockEvent())

  minterSetEvent.parameters = new Array()

  minterSetEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )

  return minterSetEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createSupplyCeilingSetEvent(
  supplyCeiling: BigInt
): SupplyCeilingSet {
  let supplyCeilingSetEvent = changetype<SupplyCeilingSet>(newMockEvent())

  supplyCeilingSetEvent.parameters = new Array()

  supplyCeilingSetEvent.parameters.push(
    new ethereum.EventParam(
      "supplyCeiling",
      ethereum.Value.fromUnsignedBigInt(supplyCeiling)
    )
  )

  return supplyCeilingSetEvent
}

export function createToggledRestrictedEvent(
  account: Address,
  isRestricted: boolean
): ToggledRestricted {
  let toggledRestrictedEvent = changetype<ToggledRestricted>(newMockEvent())

  toggledRestrictedEvent.parameters = new Array()

  toggledRestrictedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  toggledRestrictedEvent.parameters.push(
    new ethereum.EventParam(
      "isRestricted",
      ethereum.Value.fromBoolean(isRestricted)
    )
  )

  return toggledRestrictedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
