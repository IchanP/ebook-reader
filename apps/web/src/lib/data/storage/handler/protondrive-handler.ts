/**
 * @license BSD-3-Clause
 * Copyright (c) 2026, ッツ Reader Authors
 * All rights reserved.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import type { BookCardProps } from '$lib/components/book-card/book-card-props';
import { StorageKey } from '../storage-types';
import { ApiStorageHandler } from './api-handler';
import type { ExternalFile } from './base-handler';

// TODO extend externalfile type?

export class ProtonDriveStorageHandler extends ApiStorageHandler {
  private baseEndpoint = '';

  constructor(window: Window) {
    // TODO add protondrivetokenendpoint and import it from .env
    super(StorageKey.PROTONDRIVE, window, '');
  }

  protected setInternalSettings(storageSourceName: string): void {
    throw new Error('Method not implemented.');
  }
  protected ensureTitle(name?: string, parent?: string, readOnly?: boolean): Promise<string> {
    throw new Error('Method not implemented.');
  }
  protected getExternalFiles(remoteTitleId: string): Promise<ExternalFile[]> {
    throw new Error('Method not implemented.');
  }
  protected setRootFiles(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  protected retrieve(
    file: ExternalFile,
    typeToRetrieve: XMLHttpRequestResponseType,
    progressBase?: number
  ): Promise<any> {
    throw new Error('Method not implemented.');
  }
  protected upload(
    folderId: string,
    name: string,
    files: ExternalFile[],
    externalFile: ExternalFile | undefined,
    data: Blob | string | undefined,
    rootFilePrefix?: string,
    progressBase?: number
  ): Promise<ExternalFile> {
    throw new Error('Method not implemented.');
  }
  protected executeDelete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getBookList(): Promise<BookCardProps[]> {
    throw new Error('Method not implemented.');
  }
}
