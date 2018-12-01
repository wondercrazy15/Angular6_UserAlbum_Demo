export class Address {
    constructor(
        public street: string,
        public suite: string,
        public city: string,
        public zipcode: string,
        public geo: GEO
    ) { }
}

export class GEO {
    constructor(
        public lat: string,
        public lng: string
    ) { }
}

export class Company {
    constructor(
        public name: string,
        public catchPhrase: string,
        public bs: string
    ) { }
}

export class Users {
    id: string
    name: string
    username: number
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}
