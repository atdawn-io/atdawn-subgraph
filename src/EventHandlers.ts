/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  AtDawnDataContract,
  AtDawnData_AddBonusEntity,
  AtDawnData_AddCreditEntity,
  AtDawnData_AddExpEntity,
  AtDawnData_AddInvitaNumEntity,
  AtDawnData_OwnershipTransferredEntity,
  AtDawnData_RegisterEntity,
  AtDawnData_SetReferrerEntity,
  AtDawnData_SubBonusEntity,
  AtDawnData_SubCreditEntity,
  AtDawnData_SubExpEntity,
  AtDawnData_SubInvitaNumEntity,
} from "generated";

AtDawnDataContract.AddBonus.handler(({ event, context }) => {
  const entity: AtDawnData_AddBonusEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_AddBonus.set(entity);
});

AtDawnDataContract.AddCredit.handler(({ event, context }) => {
  const entity: AtDawnData_AddCreditEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_AddCredit.set(entity);
});

AtDawnDataContract.AddExp.handler(({ event, context }) => {
  const entity: AtDawnData_AddExpEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_AddExp.set(entity);
});

AtDawnDataContract.AddInvitaNum.handler(({ event, context }) => {
  const entity: AtDawnData_AddInvitaNumEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_AddInvitaNum.set(entity);
});

AtDawnDataContract.OwnershipTransferred.handler(({ event, context }) => {
  const entity: AtDawnData_OwnershipTransferredEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.AtDawnData_OwnershipTransferred.set(entity);
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
});

AtDawnDataContract.SubCredit.handler(({ event, context }) => {
  const entity: AtDawnData_SubCreditEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_SubCredit.set(entity);
});

AtDawnDataContract.SubExp.handler(({ event, context }) => {
  const entity: AtDawnData_SubExpEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_SubExp.set(entity);
});

AtDawnDataContract.SubInvitaNum.handler(({ event, context }) => {
  const entity: AtDawnData_SubInvitaNumEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _user: event.params._user,
    _value: event.params._value,
    time: event.params.time,
  };

  context.AtDawnData_SubInvitaNum.set(entity);
});
