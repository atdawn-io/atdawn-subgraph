import assert from "assert";
import { 
  TestHelpers,
  AtDawnData_AddBonusEntity
} from "generated";
const { MockDb, AtDawnData } = TestHelpers;

describe("AtDawnData contract AddBonus event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for AtDawnData contract AddBonus event
  const event = AtDawnData.AddBonus.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  // Processing the event
  const mockDbUpdated = AtDawnData.AddBonus.processEvent({
    event,
    mockDb,
  });

  it("AtDawnData_AddBonusEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualAtDawnDataAddBonusEntity = mockDbUpdated.entities.AtDawnData_AddBonus.get(
      `${event.transactionHash}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAtDawnDataAddBonusEntity: AtDawnData_AddBonusEntity = {
      id: `${event.transactionHash}_${event.logIndex}`,
      _user: event.params._user,
      _value: event.params._value,
      time: event.params.time,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAtDawnDataAddBonusEntity, expectedAtDawnDataAddBonusEntity, "Actual AtDawnDataAddBonusEntity should be the same as the expectedAtDawnDataAddBonusEntity");
  });
});
