import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { AskValuesCompleted } from "../generated/schema"
import { AskValuesCompleted as AskValuesCompletedEvent } from "../generated/IndexBalancerSenderANFI/IndexBalancerSenderANFI"
import { handleAskValuesCompleted } from "../src/index-balancer-sender-anfi"
import { createAskValuesCompletedEvent } from "./index-balancer-sender-anfi-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let time = BigInt.fromI32(234)
    let newAskValuesCompletedEvent = createAskValuesCompletedEvent(time)
    handleAskValuesCompleted(newAskValuesCompletedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AskValuesCompleted created and stored", () => {
    assert.entityCount("AskValuesCompleted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AskValuesCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "time",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
