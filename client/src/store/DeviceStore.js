import {makeAutoObservable} from 'mobx';

/*
export default class DeviceStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: "Sumsung"},
            {id: 2, name: "Apple"}
        ]
    }
}
*/

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: "Айфоны"},
            {id: 4, name: "Ноутбуки"}
        ]

        this._brands = [
            {id: 1, name: 'Sumsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
            
        ]

        this._devices = [
            {
                id: 1, name: 'Sumsung', price: 5000, rating: 50, 
                img: 'https://www.ixbt.com/mobile/images/samsung-galaxy-s8-plus/foto/sgs8-0043.jpeg'
            },
            
            {
                id: 2, name: 'Apple', price: 50100, rating: 56, 
                img: 'https://www.ixbt.com/mobile/images/samsung-galaxy-s8-plus/foto/sgs8-0043.jpeg'
            },

            {
                id: 3, name: 'Lenovo', price: 50100, rating: 56, 
                img: 'https://www.ixbt.com/mobile/images/samsung-galaxy-s8-plus/foto/sgs8-0043.jpeg'
            },

            {
                id: 4, name: 'Asus', price: 50100, rating: 56, 
                img: 'https://www.ixbt.com/mobile/images/samsung-galaxy-s8-plus/foto/sgs8-0043.jpeg'
            }
        ]
        
        this._selectedType = {
            
        }

        
        this._selectedBrand = {
            
        }

        this._page = 1
        this._totalCount = 0
        this._limit = 3

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        //this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}