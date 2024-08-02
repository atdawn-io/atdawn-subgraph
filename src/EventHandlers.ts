/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  AtDawnDataContract,
  AtDawnData_AddBonusEntity,
  AtDawnData_AddCreditEntity,
  AtDawnData_AddExpEntity,
  AtDawnData_AddInvitaNumEntity,
  AtDawnData_RegisterEntity,
  AtDawnData_SetReferrerEntity,
  AtDawnData_SubBonusEntity,
  AtDawnData_SubCreditEntity,
  AtDawnData_SubExpEntity,
  AtDawnData_SubInvitaNumEntity,
  UserStatsEntity,
} from "generated";

function updateUserStats(context, _user, bonusDelta, creditDelta, expDelta, invitaNumDelta) {
  let userStats = context.UserStats.findOne({ _user }) || {
    id: _user,
    _user,
    totalBonus: BigInt(0),
    totalCredit: BigInt(0),
    totalExp: BigInt(0),
    totalInvitaNum: BigInt(0),
  };


  userStats.totalBonus += bonusDelta;
  userStats.totalCredit += creditDelta;
  userStats.totalExp += expDelta;
  userStats.totalInvitaNum += invitaNumDelta;

  context.UserStats.set(userStats);
}

AtDawnDataContract.AddBonus.handler(({ event, context }) => {
  const entity: AtDawnData_AddBonusEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_AddBonus.set(entity);
  updateUserStats(context, event.params._user, event.params._value, BigInt(0), BigInt(0), BigInt(0));
});

AtDawnDataContract.AddCredit.handler(({ event, context }) => {
  const entity: AtDawnData_AddCreditEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_AddCredit.set(entity);
  updateUserStats(context, event.params._user, BigInt(0), event.params._value, BigInt(0), BigInt(0));
});

AtDawnDataContract.AddExp.handler(({ event, context }) => {
  const entity: AtDawnData_AddExpEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_AddExp.set(entity);
  updateUserStats(context, event.params._user, BigInt(0), BigInt(0), event.params._value, BigInt(0));
});

AtDawnDataContract.AddInvitaNum.handler(({ event, context }) => {
  const entity: AtDawnData_AddInvitaNumEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_AddInvitaNum.set(entity);
  updateUserStats(context, event.params._user, BigInt(0), BigInt(0), BigInt(0), event.params._value);
});

AtDawnDataContract.Register.handler(({ event, context }) => {
  const entity: AtDawnData_RegisterEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    referrer: event.params.referrer,
    code: event.params.code,
    time: event.params.time,
  };

  context.AtDawnData_Register.set(entity);
});

AtDawnDataContract.SetReferrer.handler(({ event, context }) => {
  const entity: AtDawnData_SetReferrerEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _referrer: event.params._referrer,
    time: event.params.time,
  };

  context.AtDawnData_SetReferrer.set(entity);
});

AtDawnDataContract.SubBonus.handler(({ event, context }) => {
  const entity: AtDawnData_SubBonusEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_SubBonus.set(entity);
  updateUserStats(context, event.params._user, -event.params._value, BigInt(0), BigInt(0), BigInt(0));
});

AtDawnDataContract.SubCredit.handler(({ event, context }) => {
  const entity: AtDawnData_SubCreditEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_SubCredit.set(entity);
  updateUserStats(context, event.params._user, BigInt(0), -event.params._value, BigInt(0), BigInt(0));
});

AtDawnDataContract.SubExp.handler(({ event, context }) => {
  const entity: AtDawnData_SubExpEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_SubExp.set(entity);
  updateUserStats(context, event.params._user, BigInt(0), BigInt(0), -event.params._value, BigInt(0));
});

AtDawnDataContract.SubInvitaNum.handler(({ event, context }) => {
  const entity: AtDawnData_SubInvitaNumEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_SubInvitaNum.set(entity);
  updateUserStats(context, event.params._user, BigInt(0), BigInt(0), BigInt(0), -event.params._value);
});
