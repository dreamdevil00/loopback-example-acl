/* tslint:disable */
import { Injectable } from '@angular/core';
import { SysUser } from '../../models/SysUser';
import { SysACL } from '../../models/SysACL';
import { SysRole } from '../../models/SysRole';
import { Product } from '../../models/Product';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    SysUser: SysUser,
    SysACL: SysACL,
    SysRole: SysRole,
    Product: Product,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
