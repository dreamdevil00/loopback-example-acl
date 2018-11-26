/* tslint:disable */

declare var Object: any;
export interface SysUserInterface {
  "id"?: string;
  "username": string;
  "email"?: string;
  "status": number;
  "realm"?: string;
  "emailVerified"?: boolean;
  "password"?: string;
  accessTokens?: any[];
}

export class SysUser implements SysUserInterface {
  "id": string;
  "username": string;
  "email": string;
  "status": number;
  "realm": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  constructor(data?: SysUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SysUser`.
   */
  public static getModelName() {
    return "SysUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SysUser for dynamic purposes.
  **/
  public static factory(data: SysUserInterface): SysUser{
    return new SysUser(data);
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
      name: 'SysUser',
      plural: 'users',
      path: 'users',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'number',
          default: 0
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
