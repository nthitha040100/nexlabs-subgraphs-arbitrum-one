import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CompleteRebalanceActions } from "../generated/schema"
import { CompleteRebalanceActions as CompleteRebalanceActionsEvent } from "../generated/IndexBalancerMAG7/IndexBalancerMAG7"
import { handleCompleteRebalanceActions } from "../src/index-balancer-mag-7"
import { createCompleteRebalanceActionsEvent } from "./index-balancer-mag-7-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nonce = BigInt.fromI32(234)
    let time = BigInt.fromI32(234)
    let newCompleteRebalanceActionsEvent = createCompleteRebalanceActionsEvent(
      nonce,
      time
    )
    handleCompleteRebalanceActions(newCompleteRebalanceActionsEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CompleteRebalanceActions created and stored", () => {
    assert.entityCount("CompleteRebalanceActions", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CompleteRebalanceActions",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nonce",
      "234"
    )
    assert.fieldEquals(
      "CompleteRebalanceActions",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "time",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
