/* tslint:disable */

declare var Object: any;
export interface SysRoleInterface {
  "id"?: string;
  "displayName": string;
  "name": string;
  "description"?: string;
  "created"?: Date;
  "modified"?: Date;
  principals?: any[];
}

export class SysRole implements SysRoleInterface {
  "id": string;
  "displayName": string;
  "name": string;
  "description": string;
  "created": Date;
  "modified": Date;
  principals: any[];
  constructor(data?: SysRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SysRole`.
   */
  public static getModelName() {
    return "SysRole";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SysRole for dynamic purposes.
  **/
  public static factory(data: SysRoleInterface): SysRole{
    return new SysRole(data);
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
      name: 'SysRole',
      plural: 'roles',
      path: 'roles',
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
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
        },
      },
      relations: {
        principals: {
          name: 'principals',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'roleId'
        },
      }
    }
  }
}
