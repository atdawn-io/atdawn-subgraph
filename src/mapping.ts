import { BigInt } from "@graphprotocol/graph-ts";
import {
  AddBonus,
  AddCredit,
  AddExp,
  AddInvitaNum,
  Register,
  SetReferrer,
  SubBonus,
  SubCredit,
  SubExp,
  SubInvitaNum,
} from "../generated/AtDawnData/AtDawnData";
import {
  At_AddBonus,
  At_AddCredit,
  At_AddExp,
  At_AddInvitaNum,
  At_Register,
  At_SetReferrer,
  At_SubBonus,
  At_SubCredit,
  At_SubExp,
  At_SubInvitaNum,
  UserStats,
} from "../generated/schema";

function updateUserStats(
  _user: string,
  bonusDelta: BigInt,
  creditDelta: BigInt,
  expDelta: BigInt,
  invitaNumDelta: BigInt
): void {
  let userStats = UserStats.load(_user);
  if (userStats == null) {
    userStats = new UserStats(_user);
    userStats._user = _user;
    userStats.totalBonus = BigInt.fromI32(0);
    userStats.totalCredit = BigInt.fromI32(0);
    userStats.totalExp = BigInt.fromI32(0);
    userStats.totalInvitaNum = BigInt.fromI32(0);
  }

  userStats.totalBonus = userStats.totalBonus.plus(bonusDelta);
  userStats.totalCredit = userStats.totalCredit.plus(creditDelta);
  userStats.totalExp = userStats.totalExp.plus(expDelta);
  userStats.totalInvitaNum = userStats.totalInvitaNum.plus(invitaNumDelta);

  userStats.save();
}

export function handleAddBonus(event: AddBonus): void {
  let entity = new At_AddBonus(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._user = event.params._user.toHexString();
  entity._value = event.params._value;
  entity.time = event.params.time;

  entity.save();
  updateUserStats( 
    event.params._user.toHexString(),
    event.params._value,
    BigInt.fromI32(0),
    BigInt.fromI32(0),
    BigInt.fromI32(0)
  );
}

export function handleAddCredit(event: AddCredit): void {
  let entity = new At_AddCredit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._user = event.params._user.toHexString();
  entity._value = event.params._value;
  entity.time = event.params.time;

  entity.save();
  updateUserStats( 
    event.params._user.toHexString(),
    BigInt.fromI32(0),
    event.params._value,
    BigInt.fromI32(0),
    BigInt.fromI32(0)
  );
}

export function handleAddExp(event: AddExp): void {
  let entity = new At_AddExp(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._user = event.params._user.toHexString();
  entity._value = event.params._value;
  entity.time = event.params.time;

  entity.save();
  updateUserStats(
    event.params._user.toHexString(),
    BigInt.fromI32(0),
    BigInt.fromI32(0),
    event.params._value,
    BigInt.fromI32(0)
  );
}

export function handleAddInvitaNum(event: AddInvitaNum): void {
  let entity = new At_AddInvitaNum(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._user = event.params._user.toHexString();
  entity._value = event.params._value;
  entity.time = event.params.time;

  entity.save();
  updateUserStats( 
    event.params._user.toHexString(),
    BigInt.fromI32(0),
    BigInt.fromI32(0),
    BigInt.fromI32(0),
    event.params._value
  );
}

export function handleRegister(event: Register): void {
  let entity = new At_Register(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.referrer = event.params.referrer.toHexString();
  entity.code = event.params.code;
  entity.time = event.params.time;

  entity.save();
}

export function handleSetReferrer(event: SetReferrer): void {
  let entity = new At_SetReferrer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._user = event.params._user.toHexString();
  entity._referrer = event.params._referrer.toHexString();
  entity.time = event.params.time;

  entity.save();
}

export function handleSubBonus(event: SubBonus): void {
  let entity = new At_SubBonus(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._user = event.params._user.toHexString();
  entity._value = event.params._value;
  entity.time = event.params.time;

  entity.save();
  updateUserStats( 
    event.params._user.toHexString(),
    event.params._value.neg(),
    BigInt.fromI32(0),
    BigInt.fromI32(0),
    BigInt.fromI32(0)
  );
}

export function handleSubCredit(event: SubCredit): void {
  let entity = new At_SubCredit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._user = event.params._user.toHexString();
  entity._value = event.params._value;
  entity.time = event.params.time;

  entity.save();
  updateUserStats( 
    event.params._user.toHexString(),
    BigInt.fromI32(0),
    event.params._value.neg(),
    BigInt.fromI32(0),
    BigInt.fromI32(0)
  );
}

export function handleSubExp(event: SubExp): void {
  let entity = new At_SubExp(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._user = event.params._user.toHexString();
  entity._value = event.params._value;
  entity.time = event.params.time;

  entity.save();
  updateUserStats( 
    event.params._user.toHexString(),
    BigInt.fromI32(0),
    BigInt.fromI32(0),
    event.params._value.neg(),
    BigInt.fromI32(0)
  );
}

export function handleSubInvitaNum(event: SubInvitaNum): void {
  let entity = new At_SubInvitaNum(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity._user = event.params._user.toHexString();
  entity._value = event.params._value;
  entity.time = event.params.time;

  entity.save();
  updateUserStats(
    event.params._user.toHexString(),
    BigInt.fromI32(0),
    BigInt.fromI32(0),
    BigInt.fromI32(0),
    event.params._value.neg() //-event.params._value
  );
}
