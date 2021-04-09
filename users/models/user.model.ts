import {
  UserInt,
  Address,
  Company,
} from '../../common/interfaces/user.interface';

class User {
  private _id: Number;
  private _username: String;
  private _email: String;
  private _address: Address;
  private _phone: String;
  private _website: String;
  private _company: Company;
  private _name: String;

  constructor(user: UserInt) {
    this._id = user.id;
    this._name = user.name;
    this._username = user.username;
    this._email = user.email;
    this._address = user.address;
    this._phone = user.phone;
    this._website = user.website;
    this._company = user.company;
  }

  public get id(): Number {
    return this._id;
  }
  public set id(value: Number) {
    this._id = value;
  }

  public get name() {
    console.log('i was called')
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }

  public get username(): String {
    return this._username;
  }
  public set username(value: String) {
    this._username = value;
  }

  public get email(): String {
    return this._email;
  }
  public set email(value: String) {
    this._email = value || 'defaultemail@email.com';
  }

  public get address(): Address {
    return this._address;
  }
  public set address(value: Address) {
    this._address = value;
  }

  public get phone(): String {
    return this._phone;
  }
  public set phone(value: String) {
    this._phone = value;
  }

  public get website(): String {
    return this._website;
  }
  public set website(value: String) {
    this._website = value;
  }

  public get company(): Company {
    return this._company;
  }
  public set company(value: Company) {
    this._company = value;
  }
}

export default User;