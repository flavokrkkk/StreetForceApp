import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() { 
        this._devices = [
            
        ]

        this._likesPr = [

        ]
        makeAutoObservable(this)
    }

    setAddDevice(product) {
        this._devices.push(product)
        console.log("Added device")
    }
    setAddLiked(product) {
        this._likesPr.push(product)
        console.log("Added device")
    }

    setDevices(devices){
        this._devices = devices
    }

    setLiked(devices){
        this._likesPr = devices
    }

    get Liked(){
        return this._likesPr 
    }

    get devices(){
        return this._devices 
    }
}
