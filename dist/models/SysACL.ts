/* tslint:disable */

declare var Object: any;
export interface SysACLInterface {
  "id"?: string;
  "displayName": string;
  "model"?: string;
  "property"?: string;
  "accessType"?: string;
  "permission"?: string;
  "principalType"?: string;
  "principalId"?: string;
}

export class SysACL implements SysACLInterface {
  "id": string;
  "displayName": string;
  "model": string;
  "property": string;
  "accessType": string;
  "permission": string;
  "principalType": string;
  "principalId": string;
  constructor(data?: SysACLInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SysACL`.
   */
  public static getModelName() {
    return "SysACL";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SysACL for dynamic purposes.
  **/
  public static factory(data: SysACLInterface): SysACL{
    return new SysACL(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'SysACL',
      plural: 'acls',
      path: 'acls',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "displayName": {
          name: 'displayName',
          type: 'string'
        },
        "model": {
          name: 'model',
          type: 'string'
        },
        "property": {
          name: 'property',
          type: 'string'
        },
        "accessType": {
          name: 'accessType',
          type: 'string'
        },
        "permission": {
          name: 'permission',
          type: 'string'
        },
        "principalType": {
          name: 'principalType',
          type: 'string'
        },
        "principalId": {
          name: 'principalId',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
