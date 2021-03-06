// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { makeEnumParser } from './enum';

// These strings are saved to disk, so be careful when changing them.
export enum PhoneNumberSharingMode {
  Everybody = 'Everybody',
  ContactsOnly = 'ContactsOnly',
  Nobody = 'Nobody',
}

export const parsePhoneNumberSharingMode = makeEnumParser(
  PhoneNumberSharingMode,
  PhoneNumberSharingMode.Everybody
);
