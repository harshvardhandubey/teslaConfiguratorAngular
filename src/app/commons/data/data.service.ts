import { Injectable, Input } from '@angular/core';
import { Config } from '../types/options';
import { Model } from '../types/model';
import { Color } from '../types/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _modelCode: string = '';
  private _modelName: string = '';
  private _colorCode: string = '';
  private _colorName: string = '';
  private _colorPrice: number = 0;
  private _configDescr: string = '';
  private _configRange: number = 0;
  private _configSpeed: number = 0;
  private _configPrice: number = 0;
  private _configCode: number = 0;
  private _towHitch: boolean = false;
  private _yoke: boolean = false;

  // private _model!: Model;
  // private _color!: Color;
  // private _config!: Config;

  private _step2: boolean = false;
  private _step3: boolean = false;
  
  constructor() { }

  // public get model() {
  //   return this._model;
  // }

  // public set model(_model: Model) {
  //   this._model = _model;
  // }

  // public get color() {
  //   return this._color;
  // }

  // public set color(_color: Color) {
  //   this._color = _color;
  // }

  // public get config() {
  //   return this._config;
  // }

  // public set config(_config: Config) {
  //   this._config = _config;
  // }

  public get modelCode() {
    return this._modelCode;
  }

  public set modelCode(_modelCode: string){
    this._modelCode = _modelCode;
  }

  public get modelName() {
    return this._modelName;
  }

  public set modelName(_modelName: string){
    this._modelName = _modelName;
  }

  public get colorCode() {
    return this._colorCode;
  }

  public set colorCode(_colorCode: string){
    this._colorCode = _colorCode;
  }

  public get configDescr() {
    return this._configDescr;
  }

  public set configDescr(_configDescr: string){
    this._configDescr = _configDescr;
  }

  public get colorPrice() {
    return this._colorPrice;
  }

  public set colorPrice(_colorPrice: number) {
    this._colorPrice = _colorPrice;
  }

  public get configCode() {
    return this._configCode;
  }

  public set configCode(_configCode: number) {
    this._configCode = _configCode;
  }

  public get colorName() {
    return this._colorName;
  }

  public set colorName(_colorName: string){
    this._colorName = _colorName;
  }

  public get configRange() {
    return this._configRange;
  }

  public set configRange(_configRange: number) {
    this._configRange = _configRange;
  }

  public get configSpeed() {
    return this._configSpeed;
  }

  public set configSpeed(_configSpeed: number) {
    this._configSpeed = _configSpeed;
  }

  public get configPrice() {
    return this._configPrice;
  }

  public set configPrice(_configPrice: number) {
    this._configPrice = _configPrice;
  }

  public get towHitch() {
    return this._towHitch;
  }

  public set towHitch(_towHitch: boolean) {
    this._towHitch = _towHitch;
  }

  public get yoke() {
    return this._yoke;
  }

  public set yoke(_yoke: boolean) {
    this._yoke = _yoke;
  }

  public get step2() {
    return this._step2;
  }

  public set step2(_step2: boolean) {
    this._step2 = _step2;
  }

  public get step3() {
    return this._step3;
  }

  public set step3(_step3: boolean) {
    this._step3 = _step3;
  }
  
}
